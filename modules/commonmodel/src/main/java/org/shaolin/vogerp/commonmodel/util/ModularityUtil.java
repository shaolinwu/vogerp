package org.shaolin.vogerp.commonmodel.util;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.bmdp.datamodel.common.TargetEntityType;
import org.shaolin.bmdp.datamodel.flowdiagram.Connection;
import org.shaolin.bmdp.datamodel.flowdiagram.FlowChunk;
import org.shaolin.bmdp.datamodel.flowdiagram.NodeType;
import org.shaolin.bmdp.datamodel.flowdiagram.RectangleNodeType;
import org.shaolin.bmdp.datamodel.pagediagram.PageNodeType;
import org.shaolin.bmdp.datamodel.pagediagram.WebChunk;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.cache.UIFlowCacheManager;
import org.shaolin.vogerp.commonmodel.be.IModuleGroup;
import org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;

public class ModularityUtil {

	private static final String NodeIDPrefix = "g_";

	public static void syncView(List<IModuleGroup> modules, FlowChunk chunk) {
		chunk.setEntityName("ModuleManagement");
		int x = 10;
		int y = 10;
		for (IModuleGroup module : modules) {
			RectangleNodeType rectNode = new RectangleNodeType();
			rectNode.setId(NodeIDPrefix + module.getGroupId() + "_");
			rectNode.setName(module.getName());
			rectNode.setDescription(module.getDescription());
			rectNode.setX(x);
			rectNode.setY(y);
			chunk.getNodes().add(rectNode);
			x += 30;
			y += 30;
		}
		
		for (IModuleGroup module : modules) {
			if (module.getParentId() > 0) {
				IModuleGroup parent = getParent(module.getParentId(), modules);
				Connection conn = new Connection();
				String srcId = NodeIDPrefix + module.getGroupId() + "_";
				String tarId = NodeIDPrefix + parent.getGroupId() + "_";
				conn.setName(srcId + tarId);
				conn.setSourceAnchor(srcId + "TopCenter");
				conn.setTargetAnchor(tarId + "BottomCenter");
				chunk.getConnections().add(conn);
			}
		}
	}
	
	public static IModuleGroup getParent(long id, List<IModuleGroup> modules) {
		for (IModuleGroup module : modules) {
			if (module.getGroupId() == id) {
				return module;
			}
		}
		throw new IllegalStateException("There no parent for such id: " + id);
	}

	public static void syncViewWithNewModules(List<IModuleGroup> modules, FlowChunk chunk) {
		List<NodeType> nodes = chunk.getNodes();
		List<Connection> conns = chunk.getConnections();
		for (IModuleGroup module : modules) {
			for (NodeType n : nodes) {
				if (module.getName().equals(n.getName())) {
					String newId = NodeIDPrefix + module.getGroupId() + "_";
					String oldId = n.getId();
					for (Connection conn : conns) {
						if (conn.getSourceAnchor().startsWith(oldId)) {
							conn.setSourceAnchor(conn.getSourceAnchor().replace(oldId, newId));
						}
						if (conn.getTargetAnchor().startsWith(oldId)) {
							conn.setTargetAnchor(conn.getTargetAnchor().replace(oldId, newId));
						}
					}
					n.setId(newId);
					break;
				}
			}
		}
	}
	
	public static void updateWebFlowLinks() throws ParsingException {
		ModuleGroupImpl condition = new ModuleGroupImpl();
        List<ModuleGroupImpl> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        updateWebFlowLinks(all);
	}
	
	public static void updateWebFlowLinks(List<ModuleGroupImpl> all) throws ParsingException {
        // find AppContext.get().getAppName()
        ModuleGroupImpl root = null;
        for (int i=0;i<all.size();i++) {
        	ModuleGroupImpl mg = (ModuleGroupImpl)all.get(i);
        	if (mg.getName().equals(AppContext.get().getAppName())) {
        		root = mg;
        	    break;
        	}
        }
        if (root == null) {
        	return; // no root being configured!
        }
        
		// list the nodes under the root node.
        List<PageNodeType> webNodes = new ArrayList<PageNodeType>();
        for (int i=0;i<all.size();i++) {
            ModuleGroupImpl mg = (ModuleGroupImpl)all.get(i);
            if (mg.getParentId() != root.getGroupId()) {
            	continue;
            }
            // webflow.do?_chunkname=org.shaolin.bmdp.adminconsole.diagram.MainFunctions&_nodename=ModuleManager&_framename=moduleManager&_framePrefix=
            String accessURL = mg.getAccessURL();
			if (accessURL != null && !"#".equals(accessURL)) {
            	int chunkNameIndex = accessURL.indexOf("_chunkname=");
            	int _nodenameIndex = accessURL.indexOf("_nodename=");
            	int _framenameIndex = accessURL.indexOf("_framename=");
            	if (chunkNameIndex != -1) {
            		/**
            		 * <ns2:webNode xsi:type="ns2:PageNodeType" name="ModuleManager">
					    <ns2:sourceEntity entityName="org.shaolin.vogerp.commonmodel.page.ModuleManagement"></ns2:sourceEntity>
					  </ns2:webNode>
            		 */
            		PageNodeType webNode = new PageNodeType();
            		webNode.setName(accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1));
            		TargetEntityType tarEntityName = new TargetEntityType();
            		tarEntityName.setEntityName(accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1));
            		webNode.setSourceEntity(tarEntityName);
            		webNodes.add(webNode);
            	}
            }
            // find children
            for (int j=0;j<all.size();j++) {
            	if (mg.getGroupId() == ((ModuleGroupImpl)all.get(j)).getParentId()) {
            		ModuleGroupImpl m = (ModuleGroupImpl)all.get(j);
            		accessURL = m.getAccessURL();
        			if (accessURL != null && !"#".equals(accessURL)) {
                    	int chunkNameIndex = accessURL.indexOf("_chunkname=");
                    	int _nodenameIndex = accessURL.indexOf("_nodename=");
                    	int _framenameIndex = accessURL.indexOf("_framename=");
                    	if (chunkNameIndex != -1) {
                    		PageNodeType webNode = new PageNodeType();
                    		webNode.setName(accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1));
                    		TargetEntityType tarEntityName = new TargetEntityType();
                    		tarEntityName.setEntityName(accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1));
                    		webNode.setSourceEntity(tarEntityName);
                    		webNodes.add(webNode);
                    	}
                    }
            	}
            }
        }
        
        String webFlowEntity = "org.shaolin.vogerp.commonmodel.diagram.ModularityModel";
		WebChunk chunk = new WebChunk();
		chunk.setEntityName(webFlowEntity);
        chunk.getWebNodes().addAll(webNodes);
        
        AppContext.get().getEntityManager().appendEntity(chunk);
        
        UIFlowCacheManager.addFlowCacheIfAbsent(AppContext.get().getAppName());
		UIFlowCacheManager.getInstance().removeAppChunk(webFlowEntity);
		UIFlowCacheManager.getInstance().addChunk(chunk, AppContext.get().getAppName());
	}
	
}

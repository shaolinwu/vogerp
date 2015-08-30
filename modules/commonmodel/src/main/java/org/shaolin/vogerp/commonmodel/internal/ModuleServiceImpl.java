package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;
import org.shaolin.bmdp.datamodel.common.TargetEntityType;
import org.shaolin.bmdp.datamodel.pagediagram.PageNodeType;
import org.shaolin.bmdp.datamodel.pagediagram.WebChunk;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.cache.UIFlowCacheManager;
import org.shaolin.vogerp.commonmodel.be.IModuleGroup;
import org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;

public class ModuleServiceImpl implements IServiceProvider {

	private final ICache<String, Long> moduleLinks;
	
	private final ICache<Long, IModuleGroup> modules;
	
	
	public ModuleServiceImpl() {
		modules = CacheManager.getInstance().getCache(AppContext.get().getAppName() 
				+ "_modules_cache", Long.class, IModuleGroup.class);
		moduleLinks = CacheManager.getInstance().getCache(AppContext.get().getAppName() 
				+ "_modules_link_cache", String.class, Long.class);
		init();
	}
	
	private void init() {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        for (IModuleGroup module: all) {
        	String accessURL = module.getAccessURL();
        	if (accessURL != null && !"#".equals(accessURL)) {
            	int chunkNameIndex = accessURL.indexOf("_chunkname=");
            	int _nodenameIndex = accessURL.indexOf("_nodename=");
            	int _framenameIndex = accessURL.indexOf("_framename=");
            	if (chunkNameIndex != -1) {
	            	String path = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
	            	path += "." + accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1);
	            	moduleLinks.put(path, module.getId());
            	}
        	}
        }
        
        try {
			updateWebFlowLinks(all);
		} catch (ParsingException e) {
			Logger.getLogger(ModuleServiceImpl.class).error("Failed to sync all modules links: " + e.getMessage(), e);
		}
	}
	
	public void reload() {
		moduleLinks.clear();
		modules.clear();
		init();
	}
	
	public long getModuleId(String chunkName, String nodeName) {
		String path = chunkName + "." + nodeName;
		if (moduleLinks.containsKey(path)) {
			return moduleLinks.get(path);
		}
		return -1;
	}
	
	public ArrayList[] getModuleListInOptions() {
		ArrayList<String> optionsValues = new ArrayList<String>();
		ArrayList<String> displayItems = new ArrayList<String>();
		Iterator<IModuleGroup> i = modules.getValues().iterator();
		while(i.hasNext()) {
			IModuleGroup module = i.next();
			optionsValues.add(module.getId() + "");
			displayItems.add(module.getName());
		} 
		return new ArrayList[]{optionsValues, displayItems};
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return ModuleServiceImpl.class;
	}
	
	void updateWebFlowLinks() throws ParsingException {
		ModuleGroupImpl condition = new ModuleGroupImpl();
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        updateWebFlowLinks(all);
	}
	
	void updateWebFlowLinks(List<IModuleGroup> all) throws ParsingException {
        // find AppContext.get().getAppName()
        ModuleGroupImpl root = null;
        for (int i=0;i<all.size();i++) {
        	ModuleGroupImpl mg = (ModuleGroupImpl)all.get(i);
        	if (mg.getName().equals(AppContext.get().getAppName())) {
        		root = mg;
        		modules.put(mg.getId(), mg);
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
            if (mg.getParentId() != root.getId()) {
            	continue;
            }
            modules.put(mg.getId(), mg);
            // webflow.do?_chunkname=org.shaolin.bmdp.adminconsole.diagram.MainFunctions&_nodename=ModuleManager&_framename=moduleManager&_framePrefix=
            String accessURL = mg.getAccessURL();
			if (accessURL != null && !"#".equals(accessURL)) {
            	int chunkNameIndex = accessURL.indexOf("_chunkname=");
            	int _nodenameIndex = accessURL.indexOf("_nodename=");
            	int _pageIndex = accessURL.indexOf("_page=");
            	int _framenameIndex = accessURL.indexOf("_framename=");
            	if (chunkNameIndex != -1) {
            		/**
            		 * <ns2:webNode xsi:type="ns2:PageNodeType" name="ModuleManager">
					    <ns2:sourceEntity entityName="org.shaolin.vogerp.commonmodel.page.ModuleManagement"></ns2:sourceEntity>
					  </ns2:webNode>
            		 */
            		PageNodeType webNode = new PageNodeType();
            		webNode.setName(accessURL.substring(_nodenameIndex + "_nodename=".length(), _pageIndex -1));
            		TargetEntityType tarEntityName = new TargetEntityType();
            		tarEntityName.setEntityName(accessURL.substring(_pageIndex + "_page=".length(), _framenameIndex - 1));
            		webNode.setSourceEntity(tarEntityName);
            		webNodes.add(webNode);
            	}
            }
            // find children
            for (int j=0;j<all.size();j++) {
            	if (mg.getId() == ((ModuleGroupImpl)all.get(j)).getParentId()) {
            		ModuleGroupImpl m = (ModuleGroupImpl)all.get(j);
            		modules.put(m.getId(), m);
                    
            		accessURL = m.getAccessURL();
        			if (accessURL != null && !"#".equals(accessURL)) {
                    	int chunkNameIndex = accessURL.indexOf("_chunkname=");
                    	int _nodenameIndex = accessURL.indexOf("_nodename=");
                    	int _pageIndex = accessURL.indexOf("_page=");
                    	int _framenameIndex = accessURL.indexOf("_framename=");
                    	if (chunkNameIndex != -1) {
                    		PageNodeType webNode = new PageNodeType();
                    		webNode.setName(accessURL.substring(_nodenameIndex + "_nodename=".length(), _pageIndex -1));
                    		TargetEntityType tarEntityName = new TargetEntityType();
                    		tarEntityName.setEntityName(accessURL.substring(_pageIndex + "_page=".length(), _framenameIndex - 1));
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

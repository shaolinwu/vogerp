package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.shaolin.bmdp.datamodel.common.TargetEntityType;
import org.shaolin.bmdp.datamodel.pagediagram.PageNodeType;
import org.shaolin.bmdp.datamodel.pagediagram.WebChunk;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.be.IPersistentEntity;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.cache.UIFlowCacheManager;
import org.shaolin.uimaster.page.flow.ApplicationInitializer;
import org.shaolin.uimaster.page.widgets.HTMLMatrixType.DataMode;
import org.shaolin.vogerp.commonmodel.IModuleService;
import org.shaolin.vogerp.commonmodel.be.IModuleGroup;
import org.shaolin.vogerp.commonmodel.be.ModelPermissionImpl;
import org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ModuleServiceImpl implements IServiceProvider, IModuleService {

	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	private final ICache<String, Long> moduleLinks;
	
	private final ICache<Long, IModuleGroup> modules;
	
	private boolean initialized = false;
	
	public ModuleServiceImpl() {
		modules = CacheManager.getInstance().getCache(AppContext.get().getAppName() 
				+ "_modules_cache", Long.class, IModuleGroup.class);
		moduleLinks = CacheManager.getInstance().getCache(AppContext.get().getAppName() 
				+ "_modules_link_cache", String.class, Long.class);
		init();
	}
	
	private void createApps(List<IModuleGroup> all) {
		// build application context.
        for (IModuleGroup module: all) {
        	if (module.getParentId() == 0 && !module.getName().equals(IServerServiceManager.INSTANCE.getMasterNodeName())) {
        		ApplicationInitializer appInitizlier = new ApplicationInitializer(module.getName());
        		appInitizlier.start();
        	}
        }
	}
	
	private void init() {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        if (!this.initialized) {
        	createApps(all);
        	this.initialized = true;
        }
        
        // build links
        for (IModuleGroup module: all) {
        	String accessURL = escapeTNR(module.getAccessURL());
        	if (accessURL != null && !"#".equals(accessURL)) {
            	int chunkNameIndex = accessURL.indexOf("_chunkname=");
            	int _nodenameIndex = accessURL.indexOf("_nodename=");
            	int _framenameIndex = accessURL.indexOf("_framename=");
            	if (chunkNameIndex != -1) {
	            	String path = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
	            	String node = accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1);
	            	if (node.indexOf('&') != -1) {
	            		node = node.substring(0, node.indexOf('&'));
	            	}
	            	path = path + "." + node;
	            	moduleLinks.put(path, module.getId());
	            	logger.info("Read module link: {}", path);
            	}
        	}
        }
        
        try {
			updateWebFlowLinks(all);
		} catch (ParsingException e) {
			logger.error("Failed to sync all modules links: " + e.getMessage(), e);
		}
	}
	
	@Override
	public void reload() {
		moduleLinks.clear();
		modules.clear();
		init();
	}
	
	@Override
	public long getModuleId(String chunkName, String nodeName) {
		String path = chunkName + "." + nodeName;
		if (moduleLinks.containsKey(path)) {
			return moduleLinks.get(path);
		}
		return -1;
	}
	
	@Override
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
	public synchronized void newAppModules(String appName, String reference) {
		if (appName == null || appName.trim().length() == 0) {
			throw new IllegalArgumentException("Application must not be null!");
		}
		if (reference == null || reference.trim().length() == 0) {
			throw new IllegalArgumentException("Application's reference must not be null!");
		}
		if (getModule(appName) != null) {
			throw new IllegalArgumentException("Application has already existed!");
		}
		
		List<IModuleGroup> refModules = getModuleGroupTree(reference);
		
		ModuleGroupImpl newGroup = new ModuleGroupImpl();
		newGroup.setName(appName);
		newGroup.setAccessURL("#");
		newGroup.setDescription("Customer Org Code: " + appName);
		ModularityModel.INSTANCE.create(newGroup);
		
		List<IPersistentEntity> newSubNodes = new ArrayList<IPersistentEntity>();
		for (IModuleGroup node : refModules) {
			ModuleGroupImpl item = new ModuleGroupImpl();
			item.setParentId(newGroup.getId());
			item.setName(node.getName());
			item.setAccessURL(escapeTNR(node.getAccessURL()));
			item.setDescription(node.getDescription());
			item.setBigIcon(node.getBigIcon());
			item.setSmallIcon(node.getSmallIcon());
			newSubNodes.add(item);
		}
		ModularityModel.INSTANCE.batchInsert(newSubNodes);
		
		List<IPersistentEntity> modulePermissions = new ArrayList<IPersistentEntity>();
		for (IPersistentEntity node : newSubNodes) {
			ModuleGroupImpl m = (ModuleGroupImpl)node;
			ModelPermissionImpl permission = new ModelPermissionImpl();
			permission.setModuleId(m.getId());
			permission.setPartyType("org.shaolin.vogerp.commonmodel.ce.GenericOrganizationType,0");
			modulePermissions.add(permission);
		}
		ModularityModel.INSTANCE.batchInsert(modulePermissions);
		
		ApplicationInitializer appInitizlier = new ApplicationInitializer(appName);
		appInitizlier.start();
	}
	
	@Override
	public IModuleGroup getModule(String name) {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setName(name);
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        return all.size() > 0 ? all.get(0) : null;
	}
	
	@Override
	public IModuleGroup getModule(long id) {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setId(id);
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        return all.size() > 0 ? all.get(0) : null;
	}
	
	@Override
	public List<IModuleGroup> getModuleGroupTree(String appName) {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        
        ModuleGroupImpl root = null;
		for (int i = 0; i < all.size(); i++) {
			ModuleGroupImpl mg = (ModuleGroupImpl) all.get(i);
			if (appName.equals(mg.getName())) {
				root = mg;
				break;
			}
		}
        if (root == null) {
        	return Collections.emptyList();
        }
        
		ArrayList<IModuleGroup> result = new ArrayList<IModuleGroup>();
		for (int i = 0; i < all.size(); i++) {
			ModuleGroupImpl mg = (ModuleGroupImpl) all.get(i);
			if (mg.getParentId() != root.getId()) {
				continue;
			}
			result.add(mg);

			// find children
			for (int j = 0; j < all.size(); j++) {
				if (mg.getId() == ((ModuleGroupImpl) all.get(j)).getParentId()) {
					ModuleGroupImpl m = (ModuleGroupImpl) all.get(j);
					result.add(m);
				}
			}
		}
		return result;
	}
	
	@Override
	public List<List<DataMode>> getModulesInMatrix(String appName, int columns) {
		List<List<DataMode>> result = new ArrayList<List<DataMode>>();
		List<IModuleGroup> a = getModuleGroupTree(appName);
		List<IModuleGroup> modules = new ArrayList<IModuleGroup>();
		for (int i = 0; i < a.size(); i++) {
			IModuleGroup m = a.get(i);
			if ("#".equals(m.getAccessURL())) {
				continue;
			}
			modules.add(m);
		}
		int total = modules.size()/columns;
		if (modules.size()%columns > 0) {
			total += 1;
		}
		while (--total >= 0) {
			ArrayList<DataMode> row = new ArrayList<DataMode>(columns);
			result.add(row);
		}
		for (int i = 0; i < modules.size(); i++) {
			IModuleGroup m = modules.get(i);
			if ("#".equals(m.getAccessURL())) {
				continue;
			}
			DataMode item = new DataMode();
			item.name = m.getName();
			item.css = m.getSmallIcon();
			item.link = escapeTNR(m.getAccessURL());
			result.get(i/columns).add(item);
		}
		return result;
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return IModuleService.class;
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
            String accessURL = escapeTNR(mg.getAccessURL());
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
            		
            		String path = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
            		if (UIFlowCacheManager.getInstance().findWebNode(path, webNode.getName()) == null) {
            			webNodes.add(webNode);
            		}
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
                    		String path = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
                    		PageNodeType webNode = new PageNodeType();
                    		webNode.setName(accessURL.substring(_nodenameIndex + "_nodename=".length(), _pageIndex -1));
                    		TargetEntityType tarEntityName = new TargetEntityType();
                    		tarEntityName.setEntityName(accessURL.substring(_pageIndex + "_page=".length(), _framenameIndex - 1));
                    		webNode.setSourceEntity(tarEntityName);
                    		
                    		if (UIFlowCacheManager.getInstance().findWebNode(path, webNode.getName()) == null) {
                    			webNodes.add(webNode);
                    		}
                    	}
                    }
            	}
            }
        }
        
        // all dynamic page nodes are added into ModularityModel.pageflow.
        String webFlowEntity = "org.shaolin.vogerp.commonmodel.diagram.ModularityModel";
        WebChunk chunk = AppContext.get().getEntityManager().getEntity(webFlowEntity, WebChunk.class);
        if (chunk == null) {
        	chunk = new WebChunk();
        	chunk.setEntityName(webFlowEntity);
        }
        chunk.getWebNodes().addAll(webNodes);
        AppContext.get().getEntityManager().appendEntity(chunk);
        
        UIFlowCacheManager.addFlowCacheIfAbsent(AppContext.get().getAppName());
        UIFlowCacheManager.getInstance().removeAppChunk(webFlowEntity);
		UIFlowCacheManager.getInstance().addChunk(chunk, AppContext.get().getAppName());
	}
	
	private static String escapeTNR(String line)
    {
        if (line == null)
        {
            return null;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0, n = line.length(); i < n; i++)
        {
            char c = line.charAt(i);
            switch (c)
            {
                case '\t':
                    sb.append("");
                    break;
                case '\n':
                    sb.append("");
                    break;
                case '\r':
                    sb.append("");
                    break;
                default:
                    sb.append(c);
            }
        }
        return new String(sb);
    }

}

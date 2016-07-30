package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.shaolin.bmdp.datamodel.common.TargetEntityType;
import org.shaolin.bmdp.datamodel.pagediagram.PageNodeType;
import org.shaolin.bmdp.datamodel.pagediagram.WebChunk;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.IPermissionService;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.ajax.TreeItem;
import org.shaolin.uimaster.page.cache.UIFlowCacheManager;
import org.shaolin.uimaster.page.flow.WebflowConstants;
import org.shaolin.uimaster.page.widgets.HTMLMatrixType.DataMode;
import org.shaolin.vogerp.commonmodel.IModuleService;
import org.shaolin.vogerp.commonmodel.be.IModuleGroup;
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
		modules = CacheManager.getInstance().getCache(IModuleService.ADMIN_MODULES 
				+ "_modules_cache", Long.class, IModuleGroup.class);
		moduleLinks = CacheManager.getInstance().getCache(IModuleService.ADMIN_MODULES
				+ "_modules_link_cache", String.class, Long.class);
		init();
	}
	
	private void init() {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        if (!this.initialized) {
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
	            	String node = accessURL.substring(_nodenameIndex + "_nodename=".length());
	            	if (_framenameIndex >= 0) {
	            		node = accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1);
	            	}
	            	if (node.indexOf('&') != -1) {
	            		node = node.substring(0, node.indexOf('&'));
	            	}
	            	path = path + "." + node;
	            	moduleLinks.put(path, module.getId());
	            	if (module.getAdditionNodes() != null && module.getAdditionNodes().trim().length() > 0) {
	            		String[] additionalPages = module.getAdditionNodes().split(";");
	            		for (String nodeName: additionalPages) {
	            			moduleLinks.put(nodeName, module.getId());
	            		}
	            	}
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
	
	/**
	 * only admin user is able to have it.
	 */
	@Override
	public ArrayList[] getModuleListInOptions() {
		String moduleType = IModuleService.DEFAULT_USER_MODULES;
		if (UserContext.getUserContext() != null && UserContext.getUserContext().getUserId() > 0 
        		&& UserContext.getUserContext().getOrgCode().equals(IModuleService.ADMIN_MODULES)) {
            moduleType = IModuleService.ADMIN_MODULES;
        }
		
		IModuleGroup root = null;
		ArrayList<String> optionsValues = new ArrayList<String>();
		ArrayList<String> displayItems = new ArrayList<String>();
		Iterator<IModuleGroup> i = modules.getValues().iterator();
		while(i.hasNext()) {
			IModuleGroup module = i.next();
			if (moduleType.equals(module.getName())) {
     		   root = module;
	     	   break;
	     	}
		} 
		i = modules.getValues().iterator();
		while(i.hasNext()) {
			IModuleGroup module = i.next();
			if (module.getParentId() != root.getId()) {
				continue;
			}
			if (!module.getIsDisplay()) {
				continue;
			}
			
			optionsValues.add(module.getId() + "");
			if ("#".equals(module.getAccessURL())) {
				displayItems.add("#" + module.getName());
			} else {
				displayItems.add(module.getName());
			}
			// find children
			for (Object item: modules.getValues()) {
				if (module.getId() == ((ModuleGroupImpl) item).getParentId()) {
					optionsValues.add(((ModuleGroupImpl) item).getId() + "");
					displayItems.add("--"+((ModuleGroupImpl) item).getName());
				}
			}
		}
		
		return new ArrayList[]{optionsValues, displayItems};
	}
	
	@Override
	public void newAppModules(String modulesReference, Long orgId, String orgCode) {
		if (modulesReference.equals(IModuleService.DEFAULT_USER_MODULES)) {
			// all registered organizations shared the same modules and the same permissions.
			// IModuleService.DEFAULT_USER_MODULES is managed by the admin user in the back end console.
		} else if (modulesReference.equals(IModuleService.ADMIN_MODULES)) {
			// unsupported registering an admin user.
		} else {
			throw new IllegalArgumentException("Unsupported user type for registration: " + modulesReference);
		}
	}
	
	/**
	 * Get module root.
	 */
	@Override
	public IModuleGroup getModule(String moduleType) {
		IModuleGroup root = null;
		Iterator<IModuleGroup> i = modules.getValues().iterator();
		while(i.hasNext()) {
			IModuleGroup module = i.next();
			if (moduleType.equals(module.getName())) {
     		   root = module;
	     	   break;
	     	}
		} 
        return root;
	}
	
	@Override
	public IModuleGroup getModule(long id) {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setId(id);
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        return all.size() > 0 ? all.get(0) : null;
	}
	
	public List getModuleGroupToJson() {
		ModuleGroupImpl condition = new ModuleGroupImpl();
        List all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        if (all.size() == 0) {
        	logger.warn("AdminConsoleTree data is not initialized!");
            return Collections.emptyList();
        } 
        String moduleType = IModuleService.DEFAULT_USER_MODULES;
        if (UserContext.getUserContext() != null && UserContext.getUserContext().getUserId() > 0 
        		&& UserContext.getUserContext().getOrgCode().equals(IModuleService.ADMIN_MODULES)) {
            moduleType = IModuleService.ADMIN_MODULES;
        }
        // find root
        ModuleGroupImpl root = null;
        for (int i=0;i<all.size();i++) {
        	ModuleGroupImpl mg = (ModuleGroupImpl)all.get(i);
        	if (moduleType.equals(mg.getName())) {
        		   root = mg;
        	    break;
        	}
        }
        if (root == null) {
            logger.warn("Please give an empty name as the application root node!");
            return Collections.emptyList();
        }
        List<IConstantEntity> roleIds = (List<IConstantEntity>)UserContext.getUserData(WebflowConstants.USER_ROLE_KEY);
        
        // list the nodes under the root node.
		ArrayList result = new ArrayList();
		for (int i = 0; i < all.size(); i++) {
			ModuleGroupImpl mg = (ModuleGroupImpl) all.get(i);
			if (mg.getParentId() != root.getId() || !checkPermission(mg, roleIds)) {
				continue;
			}
			if (!mg.getIsDisplay()) {
				continue;
			}
			TreeItem gitem = new TreeItem();
			gitem.setId("mg_" + mg.getId());
			gitem.setText(mg.getName());
			gitem.setIcon(mg.getSmallIcon());
			gitem.setState(new org.shaolin.uimaster.page.ajax.TreeItem.State());
			gitem.setA_attr(new org.shaolin.uimaster.page.ajax.TreeItem.LinkAttribute(
					mg.getAccessURL()));
			result.add(gitem);

			// find children
			boolean addedChild = false;
			for (int j = 0; j < all.size(); j++) {
				if (mg.getId() == ((ModuleGroupImpl) all.get(j)).getParentId()
						&& checkPermission((ModuleGroupImpl) all.get(j), roleIds)) {
					ModuleGroupImpl m = (ModuleGroupImpl) all.get(j);
					TreeItem item = new TreeItem();
					item.setId("mg_" + m.getId());
					item.setText(m.getName());
					item.setA_attr(new org.shaolin.uimaster.page.ajax.TreeItem.LinkAttribute(
							m.getAccessURL()));
					item.setState(new org.shaolin.uimaster.page.ajax.TreeItem.State());
					item.setIcon(m.getSmallIcon());

					gitem.getChildren().add(item);
					addedChild = true;
				}
			}
			if (all.size() > 0 && !addedChild && "#".equals(mg.getAccessURL())) {
				result.remove(result.size() -1);
			}
		}
		return result;
	}
	
	@Override
	public List<IModuleGroup> getModuleGroupTree(final String type) {
		List<IConstantEntity> roleIds = (List<IConstantEntity>)UserContext.getUserData(WebflowConstants.USER_ROLE_KEY);
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        
        String moduleType = IModuleService.DEFAULT_USER_MODULES;
        if (type.equals(IModuleService.ADMIN_MODULES)) {
        	moduleType = IModuleService.ADMIN_MODULES;
        }
        ModuleGroupImpl root = null;
		for (int i = 0; i < all.size(); i++) {
			ModuleGroupImpl mg = (ModuleGroupImpl) all.get(i);
			if (moduleType.equals(mg.getName())) {
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
			if (mg.getParentId() != root.getId() || !checkPermission(mg, roleIds)) {
				continue;
			}
			result.add(mg);

			// find children
			boolean addedChild = false;
			for (int j = 0; j < all.size(); j++) {
				if (mg.getId() == ((ModuleGroupImpl) all.get(j)).getParentId() 
						&& checkPermission((ModuleGroupImpl) all.get(j), roleIds)) {
					ModuleGroupImpl m = (ModuleGroupImpl) all.get(j);
					result.add(m);
					addedChild = true;
				}
			}
			if (all.size() > 0 && !addedChild && "#".equals(mg.getAccessURL())) {
				result.remove(result.size() -1);
			}
		}
		return result;
	}
	
	@Override
	public List<List<DataMode>> getModulesInMatrix(String orgCode, int columns) {
		List<IConstantEntity> roleIds = (List<IConstantEntity>)UserContext.getUserData(WebflowConstants.USER_ROLE_KEY);
		
		List<List<DataMode>> result = new ArrayList<List<DataMode>>();
		List<IModuleGroup> a = getModuleGroupTree(orgCode);
		List<IModuleGroup> modules = new ArrayList<IModuleGroup>();
		for (int i = 0; i < a.size(); i++) {
			IModuleGroup m = a.get(i);
			if ("#".equals(m.getAccessURL()) || !checkPermission(m, roleIds)) {
				continue;
			}
			if (!m.getIsDisplay()) {
				continue ;
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
			if ("#".equals(m.getAccessURL()) || !checkPermission(m, roleIds)) {
				continue;
			}
			
			DataMode item = new DataMode();
			item.name = m.getName();
			item.css = m.getSmallIcon();
			if (UserContext.getUserContext() != null) {
				String accessUrl = m.getAccessURL();
				accessUrl = accessUrl.replace("{orgid}", String.valueOf(UserContext.getUserContext().getOrgId()));
				item.link = escapeTNR(accessUrl);
			} else {
				item.link = escapeTNR(m.getAccessURL());
			}
			result.get(i/columns).add(item);
		}
		return result;
	}
	
	private boolean checkPermission(IModuleGroup module, List<IConstantEntity> roleIds) {
		String accessURL = escapeTNR(module.getAccessURL());
		if (accessURL != null && !"#".equals(accessURL)) {
			int chunkNameIndex = accessURL.indexOf("_chunkname=");
        	int _nodenameIndex = accessURL.indexOf("_nodename=");
        	int _framenameIndex = accessURL.indexOf("_framename=");
        	String chunkName = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
        	String nodenName = accessURL.substring(_nodenameIndex + "_nodename=".length());
        	if (_framenameIndex >= 0) {
        		nodenName = accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1);
        	}
        	if (nodenName.indexOf('&') != -1) {
        		nodenName = nodenName.substring(0, nodenName.indexOf('&'));
        	}
	     	IPermissionService permiService = AppContext.get().getService(IPermissionService.class);
	     	int decision = permiService.checkModule(chunkName, nodenName, roleIds);
	     	return IPermissionService.ACCEPTABLE == decision;
		}
		return true;
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return IModuleService.class;
	}
	
	void updateWebFlowLinks() throws ParsingException {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<IModuleGroup> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        updateWebFlowLinks(all);
	}
	
	void updateWebFlowLinks(List<IModuleGroup> all) throws ParsingException {
		// list the nodes under the root node.
        List<PageNodeType> webNodes = new ArrayList<PageNodeType>();
        for (int i=0;i<all.size();i++) {
            ModuleGroupImpl mg = (ModuleGroupImpl)all.get(i);
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
            		String entityName = accessURL.substring(_pageIndex + "_page=".length());
            		if (_framenameIndex >= 0) {
            			entityName = accessURL.substring(_pageIndex + "_page=".length(), _framenameIndex - 1);
            		}
            		tarEntityName.setEntityName(entityName);
            		webNode.setSourceEntity(tarEntityName);
            		
            		String path = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
            		if (UIFlowCacheManager.getInstance().findWebNode(path, webNode.getName()) == null) {
            			webNodes.add(webNode);
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
        
        UIFlowCacheManager.getInstance().removeAppChunk(webFlowEntity);
		UIFlowCacheManager.getInstance().addChunk(chunk);
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

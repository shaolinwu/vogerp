package org.shaolin.vogerp.commonmodel.internal;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.IPermissionService;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.commonmodel.IModuleService;
import org.shaolin.vogerp.commonmodel.be.BEPermissionImpl;
import org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl;
import org.shaolin.vogerp.commonmodel.be.IBEPermission;
import org.shaolin.vogerp.commonmodel.be.ICEHierarchy;
import org.shaolin.vogerp.commonmodel.be.IModelPermission;
import org.shaolin.vogerp.commonmodel.be.IUIWidgetPermission;
import org.shaolin.vogerp.commonmodel.be.ModelPermissionImpl;
import org.shaolin.vogerp.commonmodel.be.UIWidgetPermissionImpl;
import org.shaolin.vogerp.commonmodel.ce.PermissionType;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PermissionServiceImpl implements IServiceProvider, IPermissionService, Serializable {

	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(PermissionServiceImpl.class);
	
	private final ICache<String, SingleRolePermission> rolePermissions;
	
	private final IModuleService moduleService;
	
	public PermissionServiceImpl(IModuleService moduleService) {
		this.moduleService = moduleService;
		this.rolePermissions = CacheManager.getInstance().getCache(IModuleService.ADMIN_MODULES
				+ "_rolepermission_cache", 200, false, String.class, SingleRolePermission.class);
	}
	
	public void reloadRolePermissions(IConstantEntity partyType) {
		logger.info("Reload the role permissions: " + partyType);
		
		String strValue = CEUtil.getValue(partyType);
		List<IModelPermission> modelPermissions = new ArrayList<IModelPermission>();
		ModelPermissionImpl model = new ModelPermissionImpl();
    	model.setPartyType(strValue);
    	modelPermissions = CommonModel.INSTANCE.searchModelPermission(model, null, 0, -1);
    	if (modelPermissions.size() == 0) {
        	CEHierarchyImpl condition = new CEHierarchyImpl();
        	condition.setCeName(partyType.getEntityName());
			List<ICEHierarchy> hierarchy = ModularityModel.INSTANCE.searchCEHierarchy(condition, null, 0, 1);
        	if (hierarchy.size() > 0) {
        		// user's module role points to the parent item.
	        	model = new ModelPermissionImpl();
	        	model.setPartyType(hierarchy.get(0).getParentCeName() + "," + hierarchy.get(0).getParentCeItem());
	        	modelPermissions = CommonModel.INSTANCE.searchModelPermission(model, null, 0, -1);
        	}
    	}
		BEPermissionImpl bePermission = new BEPermissionImpl();
		bePermission.setPartyType(strValue);
		List<IBEPermission> bePermissions = CommonModel.INSTANCE.searchBEPermission(bePermission, null, 0, -1);
		
		UIWidgetPermissionImpl uiwidget = new UIWidgetPermissionImpl();
		uiwidget.setPartyType(strValue);
		List<IUIWidgetPermission> uiwidgetPermissions = CommonModel.INSTANCE.searchUIWidgetPermission(uiwidget, null, 0, -1);
		
		rolePermissions.put(strValue, new SingleRolePermission(strValue, bePermissions, modelPermissions, uiwidgetPermissions));
	}
	
	/**
	 * by lazy loading.
	 * 
	 * @param role
	 */
	synchronized void prepareDefaultOrgPermissions(IConstantEntity partyType) {
		if (!rolePermissions.containsKey(CEUtil.getValue(partyType))) {
			reloadRolePermissions(partyType);
		}
	}
	
	@Override
	public int checkModule(String orgCode, String chunkName, String nodeName, List<IConstantEntity> roles) {
		IModuleService moduleService = AppContext.get().getService(IModuleService.class);
		return checkModule(moduleService.getModuleId(orgCode, chunkName, nodeName), roles);
	}
	
	
	@Override
	public int checkModule(long moduleId, IConstantEntity role) {
		prepareDefaultOrgPermissions(role);
		if (moduleId == -1) {
			return PermissionType.NOT_SPECIFIED.getIntValue(); 
		}
		return rolePermissions.get(CEUtil.getValue(role)).hasModuleId(moduleId).getIntValue();
	}
	
	@Override
	public int checkModule(long moduleId, List<IConstantEntity> roles) {
		if (roles == null) {
			int matched = checkModule(moduleId, PermissionType.NOT_SPECIFIED);//empty rule
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
			return PermissionType.NOT_SPECIFIED.getIntValue();
		}
		
		for (IConstantEntity role : roles) {
			int matched = checkModule(moduleId, role);
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
		}
		return PermissionType.NOT_SPECIFIED.getIntValue();
	}
	
	@Override
	public int checkModule(long moduleId, String orgId, List<IConstantEntity> roles) {
		if (roles == null) {
			int matched = checkModule(moduleId, PermissionType.NOT_SPECIFIED);//empty rule
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
			if (orgId != null) {
				//TODO: search for this specific org id.
			}
			return PermissionType.NOT_SPECIFIED.getIntValue();
		}
		
		for (IConstantEntity role : roles) {
			int matched = checkModule(moduleId, role);
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
		}
		if (orgId != null) {
			//TODO: search for this specific org id.
		}
		return PermissionType.NOT_SPECIFIED.getIntValue();
	}
	
	@Override
	public int checkUIWidget(String pageName, String widgetId, IConstantEntity role) {
		prepareDefaultOrgPermissions(role);
		
		return rolePermissions.get(CEUtil.getValue(role)).hasUIWidget(pageName, widgetId).getIntValue();
	}
	
	@Override
	public int checkUIWidget(String pageName, String widgetId, List<IConstantEntity> roles) {
		if (roles == null) {
			return PermissionType.NOT_SPECIFIED.getIntValue();
		}
		
		for (IConstantEntity role : roles) {
			int matched = checkUIWidget(pageName, widgetId, role);
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
		}
		return PermissionType.NOT_SPECIFIED.getIntValue();
	}
	
	@Override
	public int checkUITableWidget(String pageName, String widgetId, String columnId, IConstantEntity role) {
		prepareDefaultOrgPermissions(role);
		
		return rolePermissions.get(CEUtil.getValue(role)).hasUIWidget(pageName, widgetId).getIntValue();
	}

	@Override
	public int checkUITableWidget(String pageName, String widgetId,
			String columnId, List<IConstantEntity> roles) {
		if (roles == null) {
			return PermissionType.NOT_SPECIFIED.getIntValue();
		}
		
		for (IConstantEntity role : roles) {
			int matched = checkUITableWidget(pageName, widgetId, columnId , role);
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
		}
		return PermissionType.NOT_SPECIFIED.getIntValue();
	}
	
	@Override
	public int checkBEDate(String beName, String field, IConstantEntity role) {
		prepareDefaultOrgPermissions(role);
		
		return rolePermissions.get(CEUtil.getValue(role)).hasBEField(beName, field).getIntValue();
	}
	
	@Override
	public int checkBEDate(String beName, String field, List<IConstantEntity> roles) {
		if (roles == null) {
			return PermissionType.NOT_SPECIFIED.getIntValue();
		}
		
		for (IConstantEntity role : roles) {
			int matched = checkBEDate(beName, field, role);
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
		}
		return PermissionType.NOT_SPECIFIED.getIntValue();
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return IPermissionService.class;
	}

	class SingleRolePermission implements Serializable {
		private static final long serialVersionUID = 1L;
		final String role;
		final List<IBEPermission> bePermissions;
		final List<IModelPermission> modelPermissions;
		final List<IUIWidgetPermission> uiwidgetPermissions;
		
		public SingleRolePermission(String role, List<IBEPermission> bePermissions, 
				List<IModelPermission> modelPermissions, List<IUIWidgetPermission> uiwidgetPermissions) {
			this.role = role;
			this.bePermissions = bePermissions;
			this.modelPermissions = modelPermissions;
			this.uiwidgetPermissions = uiwidgetPermissions;
		}
		
		PermissionType hasModuleId(long moduleId) {
			if (moduleId <= 0) {
				return PermissionType.NOT_SPECIFIED;
			}
			
			if (modelPermissions != null && modelPermissions.size() > 0) {
				for (IModelPermission m : modelPermissions) {
					if (m.getModuleId() == moduleId) {
						return PermissionType.ACCEPTABLE;
					}
				}
			}
			return PermissionType.DENIABLE;
		}
		
		PermissionType hasBEField(String beName, String field) {
			if (beName == null || field == null) {
				return PermissionType.NOT_SPECIFIED;
			}
			
			if (bePermissions != null && bePermissions.size() > 0) {
				for (IBEPermission m : bePermissions) {
					if (m.getBeName().equals(beName) && m.getField().equals(field)) {
						return PermissionType.EDITABLE;
					}
				}
			}
			return PermissionType.VIEWABLE;
		}
		
		PermissionType hasUIWidget(String pageName, String widgetId) {
			if (pageName == null || widgetId == null) {
				return PermissionType.NOT_SPECIFIED;
			}
			
			if (uiwidgetPermissions != null && uiwidgetPermissions.size() > 0) {
				for (IUIWidgetPermission m : uiwidgetPermissions) {
					if (m.getPageName().equals(pageName) && m.getWidgetId().equals(widgetId)) {
						return PermissionType.EDITABLE;
					}
				}
			}
			return PermissionType.VIEWABLE;
		}
		
		public String getRoleType() {
			return this.role;
		}
	}

}

package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.IPermissionService;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
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

public class PermissionServiceImpl implements IServiceProvider, IPermissionService {

	private final ICache<IConstantEntity, SingleRolePermission> rolePermissions;
	
	private final ModuleServiceImpl moduleService;
	
	public PermissionServiceImpl(ModuleServiceImpl moduleService) {
		this.moduleService = moduleService;
		this.rolePermissions = CacheManager.getInstance().getCache(AppContext.get().getAppName() 
				+ "_rolepermission_cache", IConstantEntity.class, SingleRolePermission.class);
	}
	
	/**
	 * by lazy loading.
	 * 
	 * @param role
	 */
	synchronized void prepareUserPermissions(IConstantEntity partyType) {
		String strValue = CEUtil.getValue(partyType);
		if (!rolePermissions.containsKey(partyType)) {
        	List<IModelPermission> modelPermissions = new ArrayList<IModelPermission>();
        	CEHierarchyImpl condition = new CEHierarchyImpl();
        	condition.setCeName(partyType.getEntityName());
			List<ICEHierarchy> hierarchy = ModularityModel.INSTANCE.searchCEHierarchy(condition, null, 0, 1);
        	if (hierarchy.size() > 0) {
        		// user's module role points to the parent item.
	        	ModelPermissionImpl model = new ModelPermissionImpl();
	        	model.setPartyType(hierarchy.get(0).getParentCeName() + "," + hierarchy.get(0).getParentCeItem());
	        	modelPermissions = CommonModel.INSTANCE.searchModelPermission(model, null, 0, -1);
        	}
        	
			BEPermissionImpl bePermission = new BEPermissionImpl();
			bePermission.setPartyType(strValue);
			List<IBEPermission> bePermissions = CommonModel.INSTANCE.searchBEPermission(bePermission, null, 0, -1);
			
			UIWidgetPermissionImpl uiwidget = new UIWidgetPermissionImpl();
			uiwidget.setPartyType(strValue);
			List<IUIWidgetPermission> uiwidgetPermissions = CommonModel.INSTANCE.searchUIWidgetPermission(uiwidget, null, 0, -1);
			
			rolePermissions.put(partyType, new SingleRolePermission(strValue, bePermissions, modelPermissions, uiwidgetPermissions));
		}
	}
	
	@Override
	public int checkModule(String chunkName, String nodeName, IConstantEntity role) {
		prepareUserPermissions(role);
		long moduleId = moduleService.getModuleId(chunkName, nodeName);
		if (moduleId == -1) {
			return PermissionType.NOT_SPECIFIED.getIntValue(); 
		}
		return rolePermissions.get(role).hasModuleId(moduleId).getIntValue();
	}
	
	@Override
	public int checkUIWidget(String pageName, String widgetId, IConstantEntity role) {
		prepareUserPermissions(role);
		
		return rolePermissions.get(role).hasUIWidget(pageName, widgetId).getIntValue();
	}
	
	@Override
	public int checkUITableWidget(String pageName, String widgetId, String columnId, IConstantEntity role) {
		prepareUserPermissions(role);
		
		return rolePermissions.get(role).hasUIWidget(pageName, widgetId).getIntValue();
	}
	
	@Override
	public int checkBEDate(String beName, String field, IConstantEntity role) {
		prepareUserPermissions(role);
		
		return rolePermissions.get(role).hasBEField(beName, field).getIntValue();
	}
	
	@Override
	public int checkModule(String chunkName, String nodeName, List<IConstantEntity> roles) {
		if (roles == null) {
			return PermissionType.NOT_SPECIFIED.getIntValue();
		}
		
		for (IConstantEntity role : roles) {
			int matched = checkModule(chunkName, nodeName, role);
			if (matched != PermissionType.NOT_SPECIFIED.getIntValue()) {
				return matched;
			}
		}
		return PermissionType.NOT_SPECIFIED.getIntValue();
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

	class SingleRolePermission {
		
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
				return PermissionType.DENIABLE;
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

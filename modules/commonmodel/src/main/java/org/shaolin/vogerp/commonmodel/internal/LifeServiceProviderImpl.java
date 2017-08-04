package org.shaolin.vogerp.commonmodel.internal;

import java.util.List;

import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;
import org.shaolin.bmdp.runtime.ce.ConstantServiceImpl;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.entity.EntityNotFoundException;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.bmdp.runtime.spi.IConstantService.HierarchyAccessor;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.uimaster.page.UIPermissionManager;
import org.shaolin.vogerp.commonmodel.ICaptcherService;
import org.shaolin.vogerp.commonmodel.be.CEEntityInfoImpl;
import org.shaolin.vogerp.commonmodel.be.CEExtensionImpl;
import org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl;
import org.shaolin.vogerp.commonmodel.be.CaptchaImpl;
import org.shaolin.vogerp.commonmodel.be.ICEEntityInfo;
import org.shaolin.vogerp.commonmodel.be.ICEExtension;
import org.shaolin.vogerp.commonmodel.be.ICEHierarchy;
import org.shaolin.vogerp.commonmodel.be.ICaptcha;
import org.shaolin.vogerp.commonmodel.be.IRegistry;
import org.shaolin.vogerp.commonmodel.be.RegistryImpl;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;
import org.shaolin.vogerp.commonmodel.util.CEOperationUtil;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class LifeServiceProviderImpl implements ILifeCycleProvider {
	
	@Override
	public void configService() {
		
	}
	
	@Override
	public void startService() {
		IAppServiceManager serviceManger = AppContext.get();
		try {
			RegistryImpl condition0 = new RegistryImpl();
			List<IRegistry> registerItems = ModularityModel.INSTANCE.searchRegistryItems(condition0, null, 0, -1);
			for (IRegistry item : registerItems) {
				String parentPath = item.getPath().substring(0, item.getPath().lastIndexOf('/'));
				String nodeName = item.getPath().substring(item.getPath().lastIndexOf('/') + 1);
				Registry.getInstance().getNodeItems(parentPath).put(nodeName, item.getValue());
				LoggerFactory.getLogger(Registry.class).info("Read Registry item: " + item.getPath() + "=" + item.getValue());
			}
			
			loadConstants();
		} catch (Exception e) {
			throw new IllegalStateException("Failed to parse CE items: " + e.getMessage(), e);
		}
		
		CaptchaImpl condition = new CaptchaImpl();
		final List<ICaptcha> allCaptchas = CommonModel.INSTANCE.allCaptcha(condition, null, 0, -1);
		ICaptcherService captcherSerivce = new ICaptcherService() {
			@Override
			public Class getServiceInterface() {
				return ICaptcherService.class;
			}
			@Override
			public int generateOne() {
				return (int)(Math.random() * allCaptchas.size());
			}
			@Override
			public ICaptcha getItem(int index) {
				if (index == allCaptchas.size()) {
					return allCaptchas.get(index - 1);
				}
				return allCaptchas.get(index);
			}
		};
		IServerServiceManager.INSTANCE.register(captcherSerivce);
		
		ModuleServiceImpl moduleService = new ModuleServiceImpl();
		serviceManger.register(moduleService);
		
		try {
			UserServiceImpl userService = new UserServiceImpl();
			userService.addListener(new NewUserListener());
			serviceManger.register(userService);
			
			PermissionServiceImpl permissionService = new PermissionServiceImpl(moduleService);
			serviceManger.register(permissionService);
			
			UIPermissionManager uiPermiManager = new UIPermissionManager(permissionService);
			serviceManger.register(uiPermiManager);
			
			DynamicUIServiceImpl dynamicUIService = new DynamicUIServiceImpl();
			serviceManger.register(dynamicUIService);
			
			OrganizationServiceImpl orgService = new OrganizationServiceImpl();
			serviceManger.register(orgService);
			
			ResourceManagerImpl resourceManager = new ResourceManagerImpl(orgService);
			serviceManger.register(resourceManager);
			
			MemberServiceImpl memberService = new MemberServiceImpl();
			serviceManger.register(memberService);
			
			ExpressServiceImpl expressService = new ExpressServiceImpl();
			serviceManger.register(expressService);
			
			AppUpdateServiceImpl updateService = new AppUpdateServiceImpl();
			serviceManger.register(updateService);
		} finally {
			HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
		}
	}

	public void loadConstants() throws Exception {
		CEHierarchyImpl condition = new CEHierarchyImpl();
		condition.setParentCeItem(-1);
		List<ICEHierarchy> hierarchy = ModularityModel.INSTANCE.searchCEHierarchy(condition, null, 0, -1);
		
		List<ICEExtension> ceItems = ModularityModel.INSTANCE.searchCEExtension(
				new CEExtensionImpl(), null, 0, -1);
		ConstantServiceImpl constantService = (ConstantServiceImpl) IServerServiceManager.INSTANCE.getConstantService();
		constantService.reloadData(CEOperationUtil.convertC2D(ceItems));
		constantService.reloadHierarchy(hierarchy);
		constantService.setHierarchyAccessor(new HierarchyAccessor() {
			@Override
			public IConstantEntity getChild(List hierarchy, String ceName,
					int intValue) {
				for (Object i : hierarchy) {
					ICEHierarchy c = (ICEHierarchy)i;
					if (ceName.equals(c.getParentCeName()) && intValue == c.getParentCeItem()) {
						return IServerServiceManager.INSTANCE.getConstantService().getConstantEntity(c.getCeName());
					}
				}
				return null;
			}
			@Override
			public boolean hasParent(List hierarchy, String ceName){
				for (Object i : hierarchy) {
					ICEHierarchy c = (ICEHierarchy)i;
					if (ceName.equals(c.getCeName())) {
						return true;
					}
				}
				return false;
			}
			@Override
			public boolean hasChild(List hierarchy, String ceName, int intValue) {
				for (Object i : hierarchy) {
					ICEHierarchy c = (ICEHierarchy)i;
					if (ceName.equals(c.getParentCeName()) && intValue == c.getParentCeItem()) {
						return IServerServiceManager.INSTANCE.getConstantService().getConstantEntity(c.getCeName()) != null;
					}
				}
				return false;
			}
			@Override
			public IConstantEntity getParent(List hierarchy, String ceName) {
				if (ceName == null) {
					return null;
				}
				for (Object i : hierarchy) {
					ICEHierarchy c = (ICEHierarchy)i;
					if (ceName.equals(c.getCeName())) {
						return IServerServiceManager.INSTANCE.getConstantService().getConstantEntity(c.getParentCeName());
					}
				}
				return null;
			}
			@Override
			public int getParentsIntValue(List hierarchy, String ceName) {
				for (Object i : hierarchy) {
					ICEHierarchy c = (ICEHierarchy)i;
					if (ceName.equals(c.getCeName())) {
						return c.getParentCeItem();
					}
				}
				return -1;
			}
		});
		constantService.setReloadFunction(new Runnable() {
			@Override
			public void run() {
				try {
					loadConstants();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
		List<ICEEntityInfo> ceInfos = ModularityModel.INSTANCE.searchCEInfo(new CEEntityInfoImpl(), null, 0, -1);
		for (ICEEntityInfo ceInfo : ceInfos) {
			try {
				AbstractConstant ce = (AbstractConstant)IServerServiceManager.INSTANCE.getConstantService().
						getConstantEntity(ceInfo.getCeName());
				ce.setEntityInfo(ceInfo.getDescription(), ceInfo.getI18nKey(), ceInfo.getIcon());
			} catch (EntityNotFoundException ex) {
				LoggerFactory.getLogger(LifeServiceProviderImpl.class).info("Unable to find this constant: " + ex.getMessage());
			}
		}
	}
	
	@Override
	public void reload() {
		startService();
	}

	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
	}

	@Override
	public int getRunLevel() {
		return 2;
	}
	

}

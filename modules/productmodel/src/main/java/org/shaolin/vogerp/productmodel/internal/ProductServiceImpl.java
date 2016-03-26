package org.shaolin.vogerp.productmodel.internal;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.exception.SQLGrammarException;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.ajax.TreeItem;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.productmodel.IProductService;
import org.shaolin.vogerp.productmodel.be.IProduct;
import org.shaolin.vogerp.productmodel.be.IProductPrice;
import org.shaolin.vogerp.productmodel.be.IProductTemplate;
import org.shaolin.vogerp.productmodel.be.ProductImpl;
import org.shaolin.vogerp.productmodel.be.ProductTemplateImpl;
import org.shaolin.vogerp.productmodel.dao.CustProductModel;
import org.shaolin.vogerp.productmodel.dao.ProductModel;
import org.shaolin.vogerp.productmodel.util.ProductUtil;
import org.slf4j.LoggerFactory;

public class ProductServiceImpl implements ILifeCycleProvider, IServiceProvider, IProductService {

	private final String CACHE_NAME = "_product_tree";
	
	private final ICache<Long, PriceCostCache> cache;
	
	private static class PriceCostCache {
		ArrayList priceResult;
		java.util.Map priceDataModel;
	}
	
	public ProductServiceImpl() {
		cache = CacheManager.getInstance().getCache(AppContext.get().getAppName() + CACHE_NAME, Long.class, 
				PriceCostCache.class);
	}
	
	private void reloadPriceTree(Long orgId) {
		try {
	        ProductImpl criteria = new ProductImpl();
			criteria.setParentId(0);
			criteria.setOrgId(orgId);
			List[] types = CustProductModel.INSTANCE.getProductRootTypeGroup();
			if (types[0].size() == 0) {
				return;
			}
			
			List<IProduct> all = ProductModel.INSTANCE.searchProductParent(criteria, null, 0, -1);
			
			java.util.Map dataModel = new java.util.HashMap();
			// categoried by the types
			ArrayList result = new ArrayList();
			for (int i = 0; i < types[0].size(); i++) {
				String ptype = String.valueOf(types[0].get(i));
				TreeItem gitem = new TreeItem();
				gitem.setId("mg_" + types[0].get(i));
				gitem.setText("" + types[1].get(i));
				result.add(gitem);
				
				// list the nodes under the root node.
				for (int j = 0; j < all.size(); j++) {
					ProductImpl mg = (ProductImpl) all.get(j);
					if (!mg.getTemplate().getType().equals(ptype)) {
						continue;
					}
					
					List<IProductPrice> priceItems = mg.getPriceList();
					if (priceItems.size() == 0) {
						continue;
					}
					for (int f = 0; f < priceItems.size(); f++) {
						IProductPrice price = priceItems.get(f);
						dataModel.put("pg_" + price.getId(), price);
					
						TreeItem pitem = new TreeItem();
						pitem.setId("pg_" + price.getId());
						pitem.setText(ProductUtil.getProductSummary(mg) + 
									"--" + ProductUtil.getPriceFormat(price.getPrice()) + 
									"--" + ProductUtil.getPricePackage(price));
						gitem.getChildren().add(pitem);
					}
				}
			}
			if (cache.containsKey(UserContext.getUserContext().getOrgId())) {
				PriceCostCache pcCache = cache.get(UserContext.getUserContext().getOrgId());
				pcCache.priceResult = result;
				pcCache.priceDataModel = dataModel;
			} else {
				PriceCostCache pcCache = new PriceCostCache();
				pcCache.priceResult = result;
				pcCache.priceDataModel = dataModel;
				cache.put(UserContext.getUserContext().getOrgId(), pcCache);
			}
		} finally {
		}
	}
	
	public List getProductTemplateInComboBox(String productType) {
		List<IProductTemplate> list = getProductTemplates(productType);
		
		ArrayList displays = new ArrayList();
		ArrayList options = new ArrayList();
		for (IProductTemplate temp : list) {
			options.add(temp.getId() + "");
			displays.add(temp.getName());
		}
		
		ArrayList result = new ArrayList(2);
		result.add(displays);
		result.add(options);
		return result;
	}
	
	public List<IProductTemplate> getProductTemplates(String productType) {
		IAppServiceManager masterApp = IServerServiceManager.INSTANCE.getApplication(
				IServerServiceManager.INSTANCE.getMasterNodeName());
		IProductService pservce = masterApp.getService(IProductService.class);
		IAppServiceManager currentContext = AppContext.get();
		try {
			AppContext.register(masterApp);
			return ((ProductServiceImpl)pservce).getProductTemplate0(productType);
		} finally {
			AppContext.register(currentContext);
		}
	}
	
	private List<IProductTemplate> getProductTemplate0(String productType) {
		ProductTemplateImpl scFlow =  new ProductTemplateImpl();
		scFlow.setType(productType);
		return ProductModel.INSTANCE.searchProductTemplate(scFlow, null, 0, -1);
	}
	
	public String getUserProductRoot() {
		String orgType = AppContext.get().getService(IUserService.class).getUserOrganizationType();
		if (orgType == null) {
			throw new IllegalStateException("Unable to find the user product root!");
		}
		int i = orgType.indexOf(",") ;
		if (i == -1) {
			return AppContext.get().getConstantService().getConstantEntity(orgType).getEntityName();
		}
		IConstantEntity constant = AppContext.get().getConstantService().getConstantEntity(orgType.substring(0, i));
		return constant.getByIntValue(Integer.valueOf(orgType.substring(i+1))).getEntityName();
	}
	
	@Override
	public List getPriceTree() {
		if (!cache.containsKey(UserContext.getUserContext().getOrgId()) 
				|| cache.get(UserContext.getUserContext().getOrgId()).priceResult == null) {
			try {
					reloadPriceTree(UserContext.getUserContext().getOrgId());
					HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
			} catch(SQLGrammarException e) {
				HibernateUtil.releaseSession(HibernateUtil.getSession(), false);
				LoggerFactory.getLogger(ProductServiceImpl.class).warn("Disable the product module due to " + e.getMessage());
			} 
		}
		ArrayList result = new ArrayList(cache.get(UserContext.getUserContext().getOrgId()).priceResult);
		result.add(cache.get(UserContext.getUserContext().getOrgId()).priceDataModel);
		return result;
	}
	
	@Override
	public Map getPriceTreeMap() {
		if (!cache.containsKey(UserContext.getUserContext().getOrgId()) 
				|| cache.get(UserContext.getUserContext().getOrgId()).priceResult == null) {
			try {
					reloadPriceTree(UserContext.getUserContext().getOrgId());
					HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
			} catch(SQLGrammarException e) {
				HibernateUtil.releaseSession(HibernateUtil.getSession(), false);
				LoggerFactory.getLogger(ProductServiceImpl.class).warn("Disable the product module due to " + e.getMessage());
			} 
		}
		return cache.get(UserContext.getUserContext().getOrgId()).priceDataModel;
	}
	
	@Override
	public Class getServiceInterface() {
		return IProductService.class;
	}

	@Override
	public void startService() {
		IAppServiceManager serviceManger = AppContext.get();
		if (AppContext.isMasterNode()) {
		}
		
		serviceManger.register(this);
	}

	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
		cache.clear();
	}

	@Override
	public void reload() {
		cache.clear();
	}

	@Override
	public int getRunLevel() {
		return 1;
	}

}

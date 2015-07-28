package org.shaolin.vogerp.productmodel.internal;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.exception.SQLGrammarException;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.ajax.RefForm;
import org.shaolin.uimaster.page.ajax.TreeItem;
import org.shaolin.vogerp.productmodel.IProductService;
import org.shaolin.vogerp.productmodel.be.ProductCostImpl;
import org.shaolin.vogerp.productmodel.be.ProductImpl;
import org.shaolin.vogerp.productmodel.be.ProductPriceImpl;
import org.shaolin.vogerp.productmodel.dao.CustProductModel;
import org.shaolin.vogerp.productmodel.dao.ProductModel;
import org.shaolin.vogerp.productmodel.util.ProductUtil;
import org.slf4j.LoggerFactory;

public class ProductServiceImpl implements ILifeCycleProvider, IServiceProvider, IProductService {

	private final String CACHE_NAME = "_product_tree";
	
	private final ICache<String, Object> cache;
	
	public ProductServiceImpl() {
		cache = CacheManager.getInstance().getCache(AppContext.get().getAppName() + CACHE_NAME, String.class, 
				Object.class);
	}
	
	private void reloadPriceTree(Session session) {
		try {
	        ProductImpl criteria = new ProductImpl();
			criteria.setParentId(0);
			List[] types = CustProductModel.INSTANCE.getProductRootTypeGroup(session);
			if (types[0].size() == 0) {
				return;
			}
			
			List all = ProductModel.INSTANCE.searchProductParent(criteria, session, null, 0, -1);
			
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
					if (!mg.getType().equals(ptype)) {
						continue;
					}
					
					List priceItems = ProductModel.INSTANCE.searchProductPrice(mg, session, null, 0, -1);
					if (priceItems.size() == 0) {
						continue;
					}
					
					for (int f = 0; f < priceItems.size(); f++) {
					    ProductPriceImpl price = (ProductPriceImpl)priceItems.get(f);
					    price.setProduct(mg);
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
			
			cache.put("1", result);
			cache.put("11", dataModel);
		} finally {
		}
	}
	
	private void reloadCostTree(Session session) {
		try {
	        ProductImpl criteria = new ProductImpl();
			criteria.setParentId(0);
			List[] types = CustProductModel.INSTANCE.getProductRootTypeGroup(session);
			if (types[0].size() == 0) {
				return;
			}
			
			List all = ProductModel.INSTANCE.searchProductParent(criteria, session, null, 0, -1);
			
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
					if (!mg.getType().equals(ptype)) {
						continue;
					}
					
					List costItems = ProductModel.INSTANCE.searchProductCost(mg, session, null, 0, -1);
					if (costItems.size() == 0) {
						continue;
					}
					
					for (int f = 0; f < costItems.size(); f++) {
					    ProductCostImpl cost = (ProductCostImpl)costItems.get(f);
					    cost.setProduct(mg);
						dataModel.put("pg_" + cost.getId(), cost);
					
						TreeItem pitem = new TreeItem();
						pitem.setId("pg_" + cost.getId());
						pitem.setText(ProductUtil.getProductSummary(mg) 
										+ "--" + ProductUtil.getPriceFormat(cost.getPrice()) 
										+  "--" + ProductUtil.getCostPackage(cost));
						gitem.getChildren().add(pitem);
					}
				}
			}
			
			cache.put("2", result);
			cache.put("21", dataModel);
		} finally {
		}
		
	}
	
	@Override
	public ArrayList getPriceTree() {
		ArrayList tree = (ArrayList)cache.get("1");
		tree.add(cache.get("11"));
		return tree;
	}
	
	@Override
	public ArrayList getCostTree() {
		ArrayList tree = (ArrayList)cache.get("2");
		tree.add(cache.get("21"));
		return tree;
	}
	
	@Override
	public Class getServiceInterface() {
		return IProductService.class;
	}

	@Override
	public void startService() {
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		try {
			reloadPriceTree(session);
			reloadCostTree(session);
		} catch(SQLGrammarException e) {
			LoggerFactory.getLogger(ProductServiceImpl.class).warn("Disable the product module due to " + e.getMessage());
			return;
		} finally {
			session.getTransaction().commit();
		}
		IAppServiceManager serviceManger = AppContext.get();
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
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		try {
			reloadPriceTree(session);
			reloadCostTree(session);
		} finally {
			session.getTransaction().commit();
		}
	}

	@Override
	public int getRunLevel() {
		return 1;
	}

}

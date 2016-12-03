package org.shaolin.vogerp.productmodel.internal;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.hibernate.criterion.Order;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.ajax.TreeItem;
import org.shaolin.vogerp.commonmodel.IMemberService;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.IOrganization;
import org.shaolin.vogerp.commonmodel.be.OrganizationImpl;
import org.shaolin.vogerp.commonmodel.ce.AMemberType;
import org.shaolin.vogerp.productmodel.IProductService;
import org.shaolin.vogerp.productmodel.be.IProduct;
import org.shaolin.vogerp.productmodel.be.IProductPrice;
import org.shaolin.vogerp.productmodel.be.IProductTemplate;
import org.shaolin.vogerp.productmodel.be.ISupplierRelationship;
import org.shaolin.vogerp.productmodel.be.ProductImpl;
import org.shaolin.vogerp.productmodel.be.ProductPriceImpl;
import org.shaolin.vogerp.productmodel.be.ProductTemplateImpl;
import org.shaolin.vogerp.productmodel.be.SupplierRelationshipImpl;
import org.shaolin.vogerp.productmodel.dao.ProductModel;
import org.shaolin.vogerp.productmodel.util.ProductUtil;

public class ProductServiceImpl implements ILifeCycleProvider, IServiceProvider, IProductService {

	private static final String SUPPLIER_CACHE = "__app_producttype_supplier_cache";
	
	private static final String CONSUMER_CACHE = "__app_producttype_consumer_cache";
	
	private static final String CACHE_NAME = "__app_product_price_tree";
	
    private final ICache<IConstantEntity, List> suppilerTreeCache;
	
    private final ICache<IConstantEntity, List> consumerTreeCache;
    
    private final ICache<Long, PriceCostCache> productPriceCache;
	
	public ProductServiceImpl() {
		suppilerTreeCache = CacheManager.getInstance().getCache(SUPPLIER_CACHE, 200, false, IConstantEntity.class, 
				List.class);
		consumerTreeCache = CacheManager.getInstance().getCache(CONSUMER_CACHE, 200, false, IConstantEntity.class, 
				List.class);
		productPriceCache = CacheManager.getInstance().getCache(CONSUMER_CACHE, 100, false, Long.class, 
				PriceCostCache.class);
	}
	
	private void loadProductTypeSuppliers() {
		SupplierRelationshipImpl condition = new SupplierRelationshipImpl();
		List<ISupplierRelationship> result = ProductModel.INSTANCE.searchPTypeSupplier(condition, null, 0, -1);
		for (ISupplierRelationship relation: result) {
			if (relation.getSupplierPTypes() != null && relation.getSupplierPTypes().length() > 0) {
				String[] items = relation.getSupplierPTypes().split(";");
				List<IConstantEntity> ceItems = new ArrayList<IConstantEntity>(items.length);
				for (String i : items) {
					ceItems.add(CEUtil.toCEValue(i));
				}
				suppilerTreeCache.put(CEUtil.toCEValue(relation.getProductType()), ceItems);
			}
			if (relation.getConsumerPTypes() != null && relation.getConsumerPTypes().length() > 0) {
				String[] items = relation.getConsumerPTypes().split(";");
				List<IConstantEntity> ceItems = new ArrayList<IConstantEntity>(items.length);
				for (String i : items) {
					ceItems.add(CEUtil.toCEValue(i));
				}
				consumerTreeCache.put(CEUtil.toCEValue(relation.getProductType()), ceItems);
			}
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<IConstantEntity> getProductTypeSuppliers(IConstantEntity ce) {
		return Collections.unmodifiableList(suppilerTreeCache.get(ce));
	}
	
	@SuppressWarnings("unchecked")
	public List<IConstantEntity> getProductTypeSuppliers(String ceValue) {
		return Collections.unmodifiableList(suppilerTreeCache.get(CEUtil.toCEValue(ceValue)));
	}
	
	@SuppressWarnings("unchecked")
	public List<IConstantEntity> getProductTypeConsumers(IConstantEntity ce) {
		return Collections.unmodifiableList(consumerTreeCache.get(ce));
	}
	
	@SuppressWarnings("unchecked")
	public List<IConstantEntity> getProductTypeConsumers(String ceValue) {
		return Collections.unmodifiableList(consumerTreeCache.get(CEUtil.toCEValue(ceValue)));
	}
	
	public void addProductTypeSuppliers(SupplierRelationshipImpl relation) {
		if (relation.getId() == 0) {
			ProductModel.INSTANCE.create(relation);
		} else {
			ProductModel.INSTANCE.update(relation);
		}
		if (relation.getSupplierPTypes() != null && relation.getSupplierPTypes().length() > 0) {
			String[] items = relation.getSupplierPTypes().split(";");
			List<IConstantEntity> ceItems = new ArrayList<IConstantEntity>(items.length);
			for (String i : items) {
				ceItems.add(CEUtil.toCEValue(i));
			}
			suppilerTreeCache.put(CEUtil.toCEValue(relation.getProductType()), ceItems);
		}
		
		if (relation.getConsumerPTypes() != null && relation.getConsumerPTypes().length() > 0) {
			String[] items = relation.getConsumerPTypes().split(";");
			List<IConstantEntity> ceItems = new ArrayList<IConstantEntity>(items.length);
			for (String i : items) {
				ceItems.add(CEUtil.toCEValue(i));
			}
			consumerTreeCache.put(CEUtil.toCEValue(relation.getProductType()), ceItems);
		}
	}
	
	public void removeProductTypeSuppliers(SupplierRelationshipImpl relation) {
		ProductModel.INSTANCE.delete(relation);
		suppilerTreeCache.remove(CEUtil.toCEValue(relation.getProductType()));
		consumerTreeCache.remove(CEUtil.toCEValue(relation.getProductType()));
	}
	
	/**
	 * TODO: this operation is too heavy!
	 * 
	 */
	public List<IOrganization> getPossibleProductSuppliers(IProduct product, 
			String orgName, AMemberType memberType, boolean isSupplier, int offset, int lenght) {
		List<IConstantEntity> items = null;
		if (isSupplier) {
			items = getProductTypeSuppliers(product.getSubType());
		} else {
			items = getProductTypeConsumers(product.getSubType());
		}
		 
		if (items == null || items.size() ==0) {
			if (isSupplier) {
				items = getProductTypeSuppliers(product.getType());
			} else {
				items = getProductTypeConsumers(product.getType());
			}
		}
		if (items == null || items.size() ==0) {
			return Collections.emptyList();
		}
		ArrayList<String> ceItems = new ArrayList<String>(items.size());
		for (IConstantEntity i : items) {
			ceItems.add(i.getEntityName() + "," + i.getIntValue());
		}
		
		ProductImpl scFlow = new ProductImpl();
		scFlow.setSubTypes(ceItems);
		List<IProduct> result = ProductModel.INSTANCE.searchProductInfo(scFlow, null, offset, lenght);
		ArrayList<Long> orgIdList = new ArrayList<Long>(result.size());
		for (IProduct p : result) {
			if (orgIdList.contains(p.getOrgId())) {
				orgIdList.add(p.getOrgId());
			}
		}
		
		// secondary filter
		IMemberService mService = AppContext.get().getService(IMemberService.class);
		ArrayList orgList = new ArrayList(result.size());
		for (Long orgId: orgIdList) {
			OrganizationImpl org = ProductModel.INSTANCE.get(orgId, OrganizationImpl.class);
			if (memberType != null && memberType != AMemberType.NOT_SPECIFIED 
				&& mService.checkUserHasAMember(org.getId()) == memberType) {
				if (orgName == null || orgName.length() == 0 || org.getName().contains(orgName)) {
					orgList.add(org);
				}
			} else {
				if (orgName == null || orgName.length() == 0 || org.getName().contains(orgName)) {
					orgList.add(org);
				}
			}
		}
		return orgList;
	}
	
	public List<IOrganization> getPossibleProductWithoutSuppliers(IProduct product, 
			String orgName, AMemberType memberType, int offset, int lenght) {
		ProductImpl scFlow = new ProductImpl();
		scFlow.setCity(product.getCity());
		scFlow.setType(product.getType());
		scFlow.setSubType(product.getSubType());
		List<IProduct> result = ProductModel.INSTANCE.searchProductInfo(scFlow, null, offset, lenght);
		ArrayList<Long> orgIdList = new ArrayList<Long>(result.size());
		for (IProduct p : result) {
			if (orgIdList.contains(p.getOrgId())) {
				orgIdList.add(p.getOrgId());
			}
		}
		// secondary filter
		IMemberService mService = AppContext.get().getService(IMemberService.class);
		List<IOrganization> orgList = new ArrayList<IOrganization>(result.size());
		for (Long orgId: orgIdList) {
			OrganizationImpl org = ProductModel.INSTANCE.get(orgId, OrganizationImpl.class);
			if (memberType != null && memberType != AMemberType.NOT_SPECIFIED 
				&& mService.checkUserHasAMember(org.getId()) == memberType) {
				if (orgName == null || orgName.length() == 0 || org.getName().contains(orgName)) {
					orgList.add(org);
				}
			} else {
				if (orgName == null || orgName.length() == 0 || org.getName().contains(orgName)) {
					orgList.add(org);
				}
			}
		}
		return orgList;
	}
	
	public static class PriceCostCache implements Serializable {
		private static final long serialVersionUID = 1L;
		ArrayList<TreeItem> priceResult;
		java.util.Map<String, IProductPrice> priceDataModel;
	}
	
	private PriceCostCache reloadPriceTree(Long orgId) {
		if (productPriceCache.containsKey(orgId)) {
			return productPriceCache.get(orgId);
		}
		
		HibernateUtil.getSession();
		
        ProductImpl criteria = new ProductImpl();
		criteria.setParentId(0);
		criteria.setOrgId(orgId);
		List<IProduct> all = ProductModel.INSTANCE.searchProductParent(criteria, null, 0, -1);
		
		java.util.Map<String, IProductPrice> dataModel = new java.util.HashMap<String, IProductPrice>();
		// categorized by the types
		ArrayList<TreeItem> result = new ArrayList<TreeItem>();
		// list the nodes under the root node.
		for (int i = 0; i < all.size(); i++) {
			ProductImpl mg = (ProductImpl) all.get(i);
			TreeItem gitem = new TreeItem();
			gitem.setId("mg_" + i);
			gitem.setText(mg.getName());
			result.add(gitem);
			
			List<IProductPrice> priceItems = mg.getPriceList();
			if (priceItems.size() == 0) {
				continue;
			}
			for (int j = 0; j < priceItems.size(); j++) {
				IProductPrice price = priceItems.get(j);
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
		PriceCostCache pcCache = new PriceCostCache();
		pcCache.priceResult = result;
		pcCache.priceDataModel = dataModel;
		
		productPriceCache.put(orgId, pcCache);
		return pcCache;
	}
	
	public void reloadProductPrice(Long orgId, IProduct product) {
		if (productPriceCache.containsKey(orgId)) {
			List<IProductPrice> priceItems = product.getPriceList();
			if (priceItems.size() == 0) {
				return;
			}
			
			ArrayList<TreeItem> result = productPriceCache.get(orgId).priceResult;
			int i=0;
			for (; i<result.size(); i++) {
				if (result.get(i).getText().equals(product.getName())) {
					break;
				}
			}
			if (result.size() > i) {
				result.remove(i);
			}
			TreeItem gitem = new TreeItem();
			gitem.setId("mg_" + productPriceCache.get(orgId).priceResult.size());
			gitem.setText(product.getName());
			productPriceCache.get(orgId).priceResult.add(gitem);
			
			for (int j = 0; j < priceItems.size(); j++) {
				IProductPrice price = priceItems.get(j);
				price.setProduct((ProductImpl)product);
				productPriceCache.get(orgId).priceDataModel.put("pg_" + price.getId(), price);
			
				TreeItem pitem = new TreeItem();
				pitem.setId("pg_" + price.getId());
				pitem.setText(ProductUtil.getProductSummary(product) + 
							"--" + ProductUtil.getPriceFormat(price.getPrice()) + 
							"--" + ProductUtil.getPricePackage(price));
				gitem.getChildren().add(pitem);
			}
			
			//TODO:
			productPriceCache.get(orgId);
		} else {
			reloadPriceTree(orgId);
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
	
	public List<List> getProductTemplatesByName(String name) {
		List orders = new ArrayList();
        orders.add(Order.desc("createDate"));
        ProductTemplateImpl condition = new ProductTemplateImpl();
        condition.setName(name);
        List<IProductTemplate> list = ProductModel.INSTANCE.searchProductTemplate(condition, orders, 0, 50);
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
		return this.getProductTemplate0(productType);
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
		PriceCostCache item = reloadPriceTree(UserContext.getUserContext().getOrgId());
		ArrayList result = new ArrayList(item.priceResult);
		result.add(item.priceDataModel);
		return result;
	}
	
	@Override
	public Map getPriceTreeMap() {
		PriceCostCache item = reloadPriceTree(UserContext.getUserContext().getOrgId());
		return item.priceDataModel;
	}
	
	public IProductPrice getPricePackage(long priceId) {
		return ProductModel.INSTANCE.get(priceId, ProductPriceImpl.class);
	}
	
	public String getProductPhotos(IProductPrice pack) {
		List tree = getPriceTree();
		Map dataModel = (Map)tree.get(tree.size()-1);
		IProductPrice newPrice = (IProductPrice)dataModel.get("pg_" + pack.getId());
		return newPrice.getProduct().getPhotos();
	}
	
	public String getProductPhotos(long productId) {
		ProductImpl condition = new ProductImpl();
		condition.setId(productId);
		List<IProduct> all = ProductModel.INSTANCE.searchProductInfo(condition, null, 0, 1);
		return all.get(0).getPhotos();
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
		
		loadProductTypeSuppliers();
		
	}

	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
	}

	@Override
	public void reload() {
		loadProductTypeSuppliers();
	}

	@Override
	public int getRunLevel() {
		return 1;
	}

}

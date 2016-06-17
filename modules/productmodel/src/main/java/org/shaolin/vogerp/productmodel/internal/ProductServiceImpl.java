package org.shaolin.vogerp.productmodel.internal;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.criterion.Order;
import org.shaolin.bmdp.runtime.AppContext;
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
import org.shaolin.vogerp.productmodel.be.ProductPriceImpl;
import org.shaolin.vogerp.productmodel.be.ProductTemplateImpl;
import org.shaolin.vogerp.productmodel.dao.CustProductModel;
import org.shaolin.vogerp.productmodel.dao.ProductModel;
import org.shaolin.vogerp.productmodel.util.ProductUtil;

public class ProductServiceImpl implements ILifeCycleProvider, IServiceProvider, IProductService {

	public static class PriceCostCache {
		ArrayList priceResult;
		java.util.Map priceDataModel;
	}
	
	private PriceCostCache reloadPriceTree(Long orgId) {
        ProductImpl criteria = new ProductImpl();
		criteria.setParentId(0);
		criteria.setOrgId(orgId);
		List<IProduct> all = ProductModel.INSTANCE.searchProductParent(criteria, null, 0, -1);
		
		java.util.Map<String, IProductPrice> dataModel = new java.util.HashMap<String, IProductPrice>();
		// categoried by the types
		ArrayList result = new ArrayList();
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
		return pcCache;
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
		ProductPriceImpl condition = new ProductPriceImpl();
		condition.setId(priceId);
		List<IProductPrice> all = ProductModel.INSTANCE.searchProductPrice(condition, null, 0, 1);
		return all.get(0);
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
	}

	@Override
	public int getRunLevel() {
		return 1;
	}

}

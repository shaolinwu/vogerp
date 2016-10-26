package org.shaolin.vogerp.productmodel;

import java.util.List;
import java.util.Map;

import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.vogerp.commonmodel.be.IOrganization;
import org.shaolin.vogerp.commonmodel.ce.AMemberType;
import org.shaolin.vogerp.productmodel.be.IProduct;
import org.shaolin.vogerp.productmodel.be.IProductPrice;
import org.shaolin.vogerp.productmodel.be.IProductTemplate;
import org.shaolin.vogerp.productmodel.be.SupplierRelationshipImpl;

public interface IProductService {

	public void reload();
	
	public List getPriceTree();
	
	public Map getPriceTreeMap();
	
	/**
	 * Get product templates from Master node.
	 * 
	 * @param productType
	 * @return
	 */
	public List<IProductTemplate> getProductTemplates(String productType);
	
	/**
	 * Get product templates in ComboBox
	 * 
	 * @param productType
	 * @return
	 */
	public List<List> getProductTemplateInComboBox(String productType);
	
	/**
	 * 
	 * @param name
	 * @return
	 */
	public List<List> getProductTemplatesByName(String name);
	
	/**
	 * Get the constant name of user product root.
	 * 
	 * @return
	 */
	public String getUserProductRoot();
	
	/**
	 * 
	 * @param priceId
	 * @return
	 */
	public IProductPrice getPricePackage(long priceId);
	
	/**
	 * 
	 * @param productId
	 * @return
	 */
	public String getProductPhotos(long productId);
	
	public String getProductPhotos(IProductPrice pack);
	
	/**
	 * Get prudct's suppliers for promotion
	 * 
	 * @param ce
	 * @return
	 */
	public List<IConstantEntity> getProductTypeSuppliers(IConstantEntity ce);
	
	public List<IConstantEntity> getProductTypeSuppliers(String ceValue);
	
	public List<IConstantEntity> getProductTypeConsumers(IConstantEntity ce);
	
	public List<IConstantEntity> getProductTypeConsumers(String ceValue);
	
	public void addProductTypeSuppliers(SupplierRelationshipImpl relation);
	
	public void removeProductTypeSuppliers(SupplierRelationshipImpl relation);
	
	public List<IOrganization> getPossibleProductSuppliers(IProduct product, 
			String orgName, AMemberType memberType, boolean isSupplier, int offset, int lenght);
	
	public List<IOrganization> getPossibleProductWithoutSuppliers(IProduct product, 
			String orgName, AMemberType memberType, int offset, int lenght);
}

package org.shaolin.vogerp.productmodel;

import java.util.List;
import java.util.Map;

import org.shaolin.vogerp.productmodel.be.IProductPrice;
import org.shaolin.vogerp.productmodel.be.IProductTemplate;

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
}

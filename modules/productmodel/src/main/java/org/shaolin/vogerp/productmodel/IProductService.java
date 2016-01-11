package org.shaolin.vogerp.productmodel;

import java.util.List;

import org.shaolin.vogerp.productmodel.be.IProductTemplate;

public interface IProductService {

	public void reload();
	
	public List getPriceTree();
	
	public List getCostTree();
	
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
	 * Get the constant name of user product root.
	 * 
	 * @return
	 */
	public String getUserProductRoot();
}

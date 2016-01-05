package org.shaolin.vogerp.productmodel;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.vogerp.productmodel.be.IProductTemplate;

public interface IProductService {

	public void reload();
	
	public ArrayList getPriceTree();
	
	public ArrayList getCostTree();
	
	/**
	 * Get product template from Master node.
	 * 
	 * @param productType
	 * @return
	 */
	public List<IProductTemplate> getProductTemplate(String productType);
	
}

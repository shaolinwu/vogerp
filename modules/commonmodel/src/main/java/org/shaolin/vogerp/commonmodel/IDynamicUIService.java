package org.shaolin.vogerp.commonmodel;

import java.util.List;


public interface IDynamicUIService {

	/**
	 * reload all configured ui widget items.
	 * 
	 */
	public void reloadAllItems();
	
	/**
	 * reload one dynamic ui widget.
	 * 
	 * @param uiformName
	 */
	public void reloadItems(String uiformName);
	
	/**
	 * reload all dynamic page links.
	 * 
	 */
	public void reloadPageLinks();
	
	/**
	 * Get all defined entities.
	 * 
	 * @return values, display values
	 */
	public List[] getAllEntities();
	
	/**
	 * 
	 * @param name
	 * @param arentCE
	 */
	public void createCE(String name, String arentCE);
}

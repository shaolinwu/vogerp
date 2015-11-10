package org.shaolin.vogerp.commonmodel;


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
}

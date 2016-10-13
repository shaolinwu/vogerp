package org.shaolin.vogerp.commonmodel;

import java.util.List;

import org.shaolin.vogerp.commonmodel.be.UIDyanimcPageHintsImpl;
import org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl;


public interface IDynamicUIService {

	/**
	 * reload all configured ui widget items.
	 * 
	 */
	public void reloadAllItems();
	
	public void reloadAllHints();
	
	public void updateDynamicLink(UIDyanimcPageLinkImpl link);
	
	public void updateDynamicHints(UIDyanimcPageHintsImpl hints);
	
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
	
	public void deleteCENode(String ceName, int intValue);
}

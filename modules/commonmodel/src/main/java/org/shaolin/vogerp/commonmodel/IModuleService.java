package org.shaolin.vogerp.commonmodel;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.uimaster.page.widgets.HTMLMatrixType.DataMode;
import org.shaolin.vogerp.commonmodel.be.IModuleGroup;

/**
 * Modularity Service.
 * 
 * @author wushaol
 *
 */
public interface IModuleService {

	public final static String ADMIN_MODULES = "uimaster";
	
	public final static String DEFAULT_USER_MODULES = "jounioruser";
	
	public void reload();

	public void newAppModules(String reference, Long orgId, String orgCode);

	public IModuleGroup getModuleRootByOrgCode(String orgCode);
	
	public long getModuleId(String chunkName, String nodeName);

	/**
	 * Get the main page modules.
	 * @return
	 */
	public List getModuleGroupToJson();
	
	public IModuleGroup getModule(long id);
	
	public IModuleGroup getModule(String name);

	public List<IModuleGroup> getModuleGroupTree(final String type);
	
	public ArrayList[] getModuleListInOptions();

	public List<List<DataMode>> getModulesInMatrix(String orgCode, int columns);
}

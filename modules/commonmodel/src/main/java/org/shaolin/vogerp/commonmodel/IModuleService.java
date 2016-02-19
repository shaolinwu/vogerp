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

	public void reload();

	public void newAppModules(String appName, String reference);

	public long getModuleId(String chunkName, String nodeName);

	public List<IModuleGroup> getModuleGroupTree(String appName);
	
	public IModuleGroup getModule(long id);
	
	public IModuleGroup getModule(String name);

	public ArrayList[] getModuleListInOptions();

	public List<List<DataMode>> getModulesInMatrix(String appName, int columns);
}

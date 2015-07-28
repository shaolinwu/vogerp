package org.shaolin.vogerp.commonmodel.internal;

import java.util.List;

import org.apache.log4j.Logger;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.vogerp.commonmodel.be.ModuleGroupImpl;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;
import org.shaolin.vogerp.commonmodel.util.ModularityUtil;

public class ModuleServiceImpl implements IServiceProvider {

	private final ICache<String, Long> modules;
	
	public ModuleServiceImpl() {
		modules = CacheManager.getInstance().getCache(AppContext.get().getAppName() 
				+ "_modules_cache", String.class, Long.class);
		init();
	}
	
	private void init() {
		ModuleGroupImpl condition = new ModuleGroupImpl();
		condition.setEnabled(true);
        List<ModuleGroupImpl> all = ModularityModel.INSTANCE.searchModuleGroup(condition, null, 0, -1);
        for (ModuleGroupImpl module: all) {
        	String accessURL = module.getAccessURL();
        	if (accessURL != null && !"#".equals(accessURL)) {
            	int chunkNameIndex = accessURL.indexOf("_chunkname=");
            	int _nodenameIndex = accessURL.indexOf("_nodename=");
            	int _framenameIndex = accessURL.indexOf("_framename=");
            	if (chunkNameIndex != -1) {
	            	String path = accessURL.substring(chunkNameIndex + "_chunkname=".length(), _nodenameIndex - 1);
	            	path += "." + accessURL.substring(_nodenameIndex + "_nodename=".length(), _framenameIndex -1);
	            	modules.put(path, module.getGroupId());
            	}
        	}
        }
        
        /**
        try {
        //TODO:
			ModularityUtil.updateWebFlowLinks(all);
		} catch (ParsingException e) {
			Logger.getLogger(ModuleServiceImpl.class).error("Failed to sync all modules links: " + e.getMessage(), e);
		}
		*/
	}
	
	public void reload() {
		modules.clear();
		init();
	}
	
	public long getModuleId(String chunkName, String nodeName) {
		String path = chunkName + "." + nodeName;
		if (modules.containsKey(path)) {
			return modules.get(path);
		}
		return -1;
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return ModuleServiceImpl.class;
	}

}

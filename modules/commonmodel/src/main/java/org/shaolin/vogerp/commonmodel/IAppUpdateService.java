package org.shaolin.vogerp.commonmodel;

import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.ajax.json.JSONObject;

public interface IAppUpdateService extends IServiceProvider {

	public void update(int version, String description);
	
	public JSONObject getInfo();
	
}

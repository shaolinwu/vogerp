package org.shaolin.vogerp.commonmodel;

import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;

public interface IAppUpdateService extends IServiceProvider {

	public void update(int version, String description);
	
	public JSONObject getInfo();
	
}

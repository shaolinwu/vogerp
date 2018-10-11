package com.vogerp.monitor.stats;

import org.json.JSONObject;

public interface SingleKPI {

	public String getKpiName();
	
	public void reset();
	
	public JSONObject toJson();
}

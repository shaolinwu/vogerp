package com.vogerp.monitor.stats;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONObject;

public class TimeMarkerStats implements SingleKPI {

	private final String kpiName;
	
	private long lastStartTime;
	
	public TimeMarkerStats(String kpiName) {
		this.kpiName = kpiName;
		this.lastStartTime = System.currentTimeMillis();
	}
	
	public TimeMarkerStats(String kpiName, long lastStartTime) {
		this.kpiName = kpiName;
		this.lastStartTime = lastStartTime;
	}
	
	@Override
	public String getKpiName() {
		return kpiName;
	}

	@Override
	public void reset() {
		this.lastStartTime = System.currentTimeMillis();
	}
	
	public long getStartTime() {
		return this.lastStartTime;
	}
	
	public String toString() {
        return toJson().toString();
    }
	
	public JSONObject toJson() {
    	JSONObject json = new JSONObject();
        try {
        	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        	json.put("KPIName", this.getKpiName());
        	json.put("StartTime", sdf.format(new Date(this.lastStartTime)));
        } catch (Exception e) {}
        return json;
    }
}

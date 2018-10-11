package com.vogerp.monitor.stats;

import java.util.Queue;

import org.json.JSONObject;

public class QueueStats implements SingleKPI {

	private final String kpiName;
	
	private final Queue<?> queue;
	
	public QueueStats(String kpiName, Queue<?> queue) {
		this.kpiName = kpiName;
		this.queue = queue;
	}
	
	@Override
	public String getKpiName() {
		return kpiName;
	}

	@Override
	public void reset() {
		
	}
	
	public int getQueueSize() {
		return this.queue.size();
	}
	
	public String toString() {
        return toJson().toString();
    }
	
	public JSONObject toJson() {
    	JSONObject json = new JSONObject();
        try {
        	json.put("KPIName", this.getKpiName());
        	json.put("QueueSize", this.queue.size());
        	json.put("QueueType", this.queue.getClass().getSimpleName());
        } catch (Exception e) {}
        return json;
    }
}

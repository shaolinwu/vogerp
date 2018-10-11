package com.vogerp.monitor;

import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class PerfMonitor {
	
	private static Map<String, KPICollector> collectors = new ConcurrentHashMap<String, KPICollector>();
	
	private static KPICollector defaultCollector = new KPICollector("default");
	
	public static KPICollector getDefaultKPICollector() {
		return defaultCollector;
	}
	
	public static void addKPICollector(String name, KPICollector collector) {
		if (collectors.containsKey(name)) {
			throw new RuntimeException(name + " has already existing!");
		}
		collectors.put(name, collector);
	}
	
	public static KPICollector getKPICollector(String name) {
		return collectors.get(name);
	}
	
	public static Set<String> getKPICollectorKeys() {
		return collectors.keySet();
	}
	
}
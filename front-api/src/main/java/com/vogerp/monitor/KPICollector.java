package com.vogerp.monitor;

import java.util.SortedMap;
import java.util.TreeMap;

import com.vogerp.monitor.stats.APIConcludeStats;
import com.vogerp.monitor.stats.ConcludeStats;
import com.vogerp.monitor.stats.SingleKPI;
import com.vogerp.monitor.stats.ThroughputStats;
import com.vogerp.monitor.stats.TimeRangeStats;

public class KPICollector {

	private final String kpiSetName;
	
	private final SortedMap<String, SingleKPI> kpis = new TreeMap<String, SingleKPI>();
	
	public KPICollector(String kpiSetName) {
		this.kpiSetName = kpiSetName;
	}
	
	public void addKPI(String kipName, SingleKPI kipInfo) {
		this.kpis.put(kipName, kipInfo);
	}
	
	public void addAPI(String kipName) {
		this.kpis.put(kipName, new APIConcludeStats(kipName));
	}
	
	public boolean hasKPI(String kipName) {
		return this.kpis.containsKey(kipName);
	}
	
	public void updateKPI(String kipName, long value) {
		if (this.kpis.containsKey(kipName)) {
			SingleKPI kip = this.kpis.get(kipName);
			if (kip instanceof ConcludeStats) {
				((ConcludeStats)kip).addNew(value);
			} else if (kip instanceof TimeRangeStats) {
				((TimeRangeStats)kip).arrange(value);
			} else if (kip instanceof ThroughputStats) {
				((ThroughputStats)kip).increment();
				((ThroughputStats)kip).updateAndGetThroughput();
			} 
		}
	}
	
	public void updateAPI(String kipName, long value) {
		if (this.kpis.containsKey(kipName)) {
			APIConcludeStats kpi = (APIConcludeStats)this.kpis.get(kipName);
			kpi.addNew(value, false);
		}
	}
	
	public void updateAPIWithFail(String kipName, long value) {
		if (this.kpis.containsKey(kipName)) {
			APIConcludeStats kpi = (APIConcludeStats)this.kpis.get(kipName);
			kpi.addNew(value, true);
		}
	}
	
	
	/**
	 * Get all information.
	 * 
	 * @return
	 */
	public SortedMap<String, SingleKPI> getAllKIPs() {
		return this.kpis;
	}
	
	public SingleKPI getKPI(String kpiName) {
		return this.kpis.get(kpiName);
	}
	
	public String getKpiSetName() {
		return this.kpiSetName;
	}
	
	@Override
	public String toString() {
		return this.kpiSetName;
	}
}

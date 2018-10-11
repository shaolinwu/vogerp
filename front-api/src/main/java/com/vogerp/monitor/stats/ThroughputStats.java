package com.vogerp.monitor.stats;

import java.util.concurrent.atomic.AtomicLong;

import org.json.JSONObject;

public class ThroughputStats implements SingleKPI {
	
	private final String kpiName;

    private double throughput;

    private double largestThroughput;

    private long last;

    private final AtomicLong total = new AtomicLong();

    private long lastThroughputCalculationTime;

    public ThroughputStats(String kpiName) {
    	this.kpiName = kpiName;
        lastThroughputCalculationTime = System.currentTimeMillis();
    }

    public void increment() {
        total.incrementAndGet();
    }

//    public void increment(long num) {
//        total.addAndGet(num);
//    }

    public synchronized double updateAndGetThroughput() {
        long now = this.total.get();
        long currentTime = System.currentTimeMillis();
        if ((currentTime - lastThroughputCalculationTime) < 1000) {
            // update tps must be more then 1 second.
            // we don't use scheduler to update TPS periodically 
            // which reduces the system resources.
            return throughput;
        }
        
        throughput = (now - last) * 1000.0 / (currentTime - lastThroughputCalculationTime);

        if (Double.isInfinite(throughput)) {
            throughput = 0;
        }
        lastThroughputCalculationTime = currentTime;
        
        if (throughput > largestThroughput) {
            largestThroughput = throughput;
        }
        last = now;

        return throughput;
    }

    public long getTotal() {
        return total.get();
    }

    public void setTotal(long newTotal) {
        total.set(newTotal);
    }

    public double getThroughput() {
        return throughput;
    }

    public double getLargestThroughput() {
        return largestThroughput;
    }
    
    public void setLargestThroughput(double maxtps) {
        if (maxtps > this.largestThroughput) {
            this.largestThroughput = maxtps;
        }
    }

    public void reset() {
        throughput = 0;
        largestThroughput = 0;
        last = 0;
        total.set(0);
        lastThroughputCalculationTime = System.currentTimeMillis();
    }
    
    public String getKpiName() {
		return kpiName;
	}
    
    public String toString() {
        return toJson().toString();
    }

    public JSONObject toJson() {
    	JSONObject json = new JSONObject();
        try {
        	json.put("KPIName", this.getKpiName());
        	json.put("tps", (long)this.getThroughput());
        	json.put("maxtps", (long)this.getLargestThroughput());
        } catch (Exception e) {}
        return json;
    }
}
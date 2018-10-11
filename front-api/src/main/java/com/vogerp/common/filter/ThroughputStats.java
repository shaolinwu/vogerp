package com.vogerp.common.filter;

import java.math.BigDecimal;
import java.util.concurrent.atomic.AtomicLong;

import org.json.JSONObject;

public class ThroughputStats {
	
    private double throughput;

    private double largestThroughput;

    private long last;

    private final AtomicLong total = new AtomicLong();

    private long lastThroughputCalculationTime;

    public ThroughputStats() {
        lastThroughputCalculationTime = System.currentTimeMillis();
    }

    public void increment() {
        total.incrementAndGet();
    }

    public synchronized double updateAndGetThroughput() {
        long now = this.total.get();
        long currentTime = System.currentTimeMillis();
        
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

    public long getThroughput() {
    		try {
    			return BigDecimal.valueOf(throughput).setScale(0, BigDecimal.ROUND_HALF_UP).longValue();
    		} catch (java.lang.NumberFormatException e) {
    			return (long)throughput;
    		}
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
    
    public String toString() {
        return toJson().toString();
    }

    public JSONObject toJson() {
    	JSONObject json = new JSONObject();
        try {
        	json.put("tps", (long)this.getThroughput());
        	json.put("maxtps", (long)this.getLargestThroughput());
        } catch (Exception e) {}
        return json;
    }
}
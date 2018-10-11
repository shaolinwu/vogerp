package com.vogerp.monitor.stats;

import java.util.concurrent.atomic.AtomicLong;

import org.json.JSONObject;

public class URLConcludeStats implements SingleKPI {

	private final String url;
	private final String description;
	private final AtomicLong total;
    private final AtomicLong calls;
    private final AtomicLong failedCalls;
    private final AtomicLong minimum;
    private final AtomicLong maximum;

    private final ThroughputStats tpsCalculator;
    
    /**
     * Creates a new instance.
     * 
     */
    public URLConcludeStats(String kpiName, String description) {
    	this.url = kpiName;
    	this.description = description;
        total = new AtomicLong();
        calls = new AtomicLong();
        failedCalls = new AtomicLong();
        minimum = new AtomicLong();
        maximum = new AtomicLong();
        tpsCalculator = new ThroughputStats(kpiName);
    }

    public void reset() {
        total.set(0);
        calls.set(0);
        failedCalls.set(0);
        minimum.set(0);
        maximum.set(0);
        tpsCalculator.reset();
    }

    /**
     * Add a new to this class. Total is updated and calls is incremented
     * 
     * @param newValue
     *            The newValue
     */
    public void addNew(long newValue, boolean isFailed) {
	    	if (isFailed) {
	    		failedCalls.incrementAndGet();
	    	}
        long no = calls.incrementAndGet();
        total.addAndGet(newValue);
        tpsCalculator.increment();
        tpsCalculator.updateAndGetThroughput();
        if (no == 1) {
            minimum.set(newValue);
            maximum.set(newValue);
            return;
        }

        if (newValue <= 0) {
            // minimum can't be zero, skip it.
            return;
        } else if (newValue < minimum.longValue()) {
            minimum.set(newValue);
        } else if (newValue > maximum.longValue()) {
            maximum.set(newValue);
        }
    }
    
    /**
     * Gets the average reading for this event
     * 
     * @return Gets the average reading for this event
     */
    public double getAverage() {
        if (calls.longValue() == 0) {
            return 0;
        }
        return 1d * total.longValue() / calls.longValue();
    }

    /**
     * Returns the total number of readings
     * 
     * @return total number of readings
     */
    public long getCalls() {
        return calls.longValue();
    }

    /**
     * Returns the total time
     * 
     * @return the total time
     */
    public long getTotal() {
        return total.longValue();
    }

    /**
     * Returns the minimum value
     * 
     * @return the minimum value
     */
    public long getMinimum() {
        return minimum.longValue();
    }

    /**
     * Returns the maximum value
     * 
     * @return the maximum value
     */
    public long getMaximum() {
        return maximum.longValue();
    }

    public double getThroughput() {
    	return tpsCalculator.getThroughput();
    }
    
    public double getLargestThroughput() {
        return tpsCalculator.getLargestThroughput();
    }
    
    public String getKpiName() {
		return url;
	}
    
    @Override
    public String toString() {
        return toJson().toString();
    }

    public JSONObject toJson() {
    		JSONObject json = new JSONObject();
        try {
	        	json.put("KPIName", this.getKpiName());
	        	json.put("total", this.getCalls());
	        	json.put("failed", this.failedCalls.longValue());
	        	json.put("min", (long)this.getMinimum());
	        	json.put("max", (long)this.getMaximum());
	        	json.put("ave", (long)this.getAverage());
	        	json.put("tps", (long)this.getThroughput());
	        	json.put("maxtps", (long)this.getLargestThroughput());
	        	json.put("description", this.description);
        } catch (Exception e) {}
        return json;
    }
}
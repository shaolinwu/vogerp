package com.vogerp.monitor.stats;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.StringTokenizer;
import java.util.concurrent.atomic.AtomicLong;

import org.json.JSONObject;

/**
 * Time Ranges for Statistics information
 */
public class TimeRangeStats implements SingleKPI {

    //the default time ranges.
    public static final String RULE = "32,128,256,512,1024";

    private final AtomicLong totalAmount = new AtomicLong();

    private Range[] ranges;

    private StatisticUnit unit = StatisticUnit.Milliseconds;
    
    private String rulePattern = null;
    
    private final String kpiName;
    
    /**
     * Creates a new instance.
     * 
     */
    public TimeRangeStats(String kpiName, StatisticUnit unit) {
        this.kpiName = kpiName;
        this.unit = unit;
        init(RULE);
    }
    
    private void init(String rule) {
        this.rulePattern = rule;
        StringTokenizer st = new StringTokenizer(rule, ",");
        long[] values = new long[st.countTokens()];
        int i = 0;
        while (st.hasMoreTokens()) {
            String token = st.nextToken();
            values[i++] = Long.parseLong(token);
        }

        ranges = new Range[values.length + 1];
        ranges[0] = new Range(0, values[0]);
        for (i = 0; i < values.length; i++) {
            ranges[i + 1] = new Range((values[i]), 
                    ((i + 1 < values.length) ? (values[i + 1]) : Long.MAX_VALUE));
        }
    }

    public String getRulePattern() {
        return this.rulePattern;
    }
    
    public synchronized void updateRanges(String rule) {
        this.reset();
        init(rule);
    }
    
    public synchronized void updateTimeUnit(StatisticUnit unit) {
        this.reset();
        this.unit = unit;
    }
    
    protected long formatTimeUnit(long value) {
        if (value <= 0) {
            return 0;
        }
        return value / this.unit.getValue();
    }
    
    public void arrange(long nanotime) {
        totalAmount.incrementAndGet();
        long v = formatTimeUnit(nanotime);
        for (int i = 0; i < ranges.length; i++) {
            if (ranges[i].getThresholdLowValue() <= v && v < ranges[i].getThresholdHighValue()) {
                ranges[i].hit();
                break;
            }
        }
    }

    @Override
    public void reset() {
        totalAmount.set(0);
        for (int i = 0; i < ranges.length; i++) {
            ranges[i].reset();
        }
    }

    public int length() {
        return ranges.length;
    }

    public int getPercentage(int index) {
        return calculate(index);
    }

    public long getRange(int index) {
        if (ranges.length > index) {
            return ranges[index].getAmount();
        }
        return 0;
    }
    
    public Range getRangeObject(int index) {
        if (ranges.length > index) {
            return ranges[index];
        }
        return null;
    }
    
    private int calculate(int index) {
        if (totalAmount.intValue() > 0 && ranges.length > index && ranges[index].getAmount() != 0) {
            BigDecimal big = new BigDecimal(ranges[index].getAmount() / totalAmount.doubleValue() * 100);
            return big.intValue();
        }
        return 0;
    }

    @Override
    public String getKpiName() {
		return kpiName;
	}

    @Override
    public String toString() {
        return toJson().toString();
    }

    public JSONObject toJson() {
    		JSONObject json = new JSONObject();
    		try {
        		json.put("KPIName", this.getKpiName());
        		json.put("Unit", this.unit);
	        for (int i = 0; i < ranges.length; i++) {
	        	json.put(ranges[i].getName(), ranges[i].getAmount());
	        }
        } catch (Exception e) {}
        return json;
    }
    
    public class Range implements Serializable {

        private static final long serialVersionUID = 1L;

        protected final long threshold_low_value;

        protected final long threshold_high_value;

        private final AtomicLong amount = new AtomicLong();

        public Range(long minValue, long maxValue) {
            this.threshold_low_value = minValue;
            this.threshold_high_value = maxValue;
        }

        public long getThresholdLowValue() {
            return threshold_low_value;
        }

        public long getThresholdHighValue() {
            return threshold_high_value;
        }

        public long getAmount() {
            return amount.get();
        }

        public void reset() {
            amount.set(0);
        }

        public void hit() {
            amount.incrementAndGet();
        }

        @Override
        public String toString() {
            return "[interval:(" + threshold_low_value + " -- " + 
                    ((threshold_high_value == Long.MAX_VALUE) ? "Infinite" : threshold_high_value) + ")]";
        }
        
        public String getName() {
        	return "[interval:(" + threshold_low_value + " -- " + threshold_high_value + ")";
        }
        
    }

}
package com.vogerp.monitor.stats;

public enum StatisticUnit {
    Minute(1000*60), Second(1000), Milliseconds(1);
    
    private int value;
    private StatisticUnit(int value) {
        this.value = value;
    }
    
    public int getValue() {
        return value;
    }
}

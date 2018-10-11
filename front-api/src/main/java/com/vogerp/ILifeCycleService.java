package com.vogerp;

/**
 * 
 * @author wushaolin
 *
 */
public interface ILifeCycleService {

	int getRunLevel();
	
	boolean isReady();
	
	boolean isStop();
	
	void init();
	
	void start();
	
	void stop();
	
	void distroy();
	
}

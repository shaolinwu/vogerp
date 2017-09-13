package org.shaolin.vogerp.ecommercial.dao;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.SpringBootTestRoot;
import org.shaolin.bmdp.runtime.internal.AppServiceManagerImpl;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.util.OrderUtil;

public class OrderModelTest extends SpringBootTestRoot {

    @Test
    public void testsearchGoldenOrder() {
    		AppContext.register(new AppServiceManagerImpl("test", OrderModelTest.class.getClassLoader()));
		Registry.getInstance().initRegistry();
		
		GoldenOrderImpl order = new GoldenOrderImpl();
	    	System.out.println(order.toString());
	    	
	    	Logger.getLogger(OrderModelTest.class.getClass()).info(order);
	    	
	    	System.out.println(OrderUtil.genSerialNumber());
	    	System.out.println(OrderUtil.genSerialNumber());
	    	System.out.println(OrderUtil.genSerialNumber());
	    	System.out.println(OrderUtil.genSerialNumber());
    }
    
    @Test
    public void createMachiningOrder() {
    	
    }

    @Test
    public void createGoldenOrder() {
    	
    }
    
    @Test
    public void createRentOrder() {
    	
    }
}


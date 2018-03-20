package org.shaolin.vogerp.ecommercial.internal;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import org.hibernate.Session;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.ecommercial.IOrderService;
import org.springframework.stereotype.Service;

@Service
public class ModuleLifeCycleService implements ILifeCycleProvider, IOrderService {

	// we need to refresh this map in every minute.
    private static ConcurrentHashMap<Long, AtomicInteger> accessedGOrderRecords = new ConcurrentHashMap<Long, AtomicInteger>();
    private static ConcurrentHashMap<Long, AtomicInteger> accessedROrderRecords = new ConcurrentHashMap<Long, AtomicInteger>();
    private static ConcurrentHashMap<Long, AtomicInteger> accessedMOrderRecords = new ConcurrentHashMap<Long, AtomicInteger>();
	
    private ScheduledExecutorService scheduler;
    
	@Override
	public void configService() {
		
	}
	
	@Override
	public void startService() {
		scheduler = IServerServiceManager.INSTANCE.getSchedulerService()
				.createScheduler("system", "eorder", 1);
		
		IPaymentService payService = AppContext.get().getService(IPaymentService.class);
		payService.addListener(new OrderPaymentListener());
		
		scheduler.scheduleAtFixedRate(new RecordFreshingTask(), 1, 1, TimeUnit.MINUTES);
	}

	private static class RecordFreshingTask implements Runnable {

		@Override
		public void run() {
			//TODO:
		}
		
	}
	
	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
		if (scheduler != null) {
			scheduler.shutdown();
		}
	}

	@Override
	public void reload() {
	}

	@Override
	public int getRunLevel() {
		return 15;
	}

    /**
     * TODO save the access counter for order.
     * 
     * @param orderId
     */
    public void accessedGOrder(long orderId) {
    	if (!accessedGOrderRecords.contains(orderId)) {
    		accessedGOrderRecords.put(orderId, new AtomicInteger(1));
    	} else {
    		accessedGOrderRecords.get(orderId).incrementAndGet();
    	}
    }
	
    /**
     * 
     * @param orderId
     */
    public void accessedROrder(long orderId) {
    	if (!accessedROrderRecords.contains(orderId)) {
    		accessedROrderRecords.put(orderId, new AtomicInteger(1));
    	} else {
    		accessedROrderRecords.get(orderId).incrementAndGet();
    	}
    }

    /**
     * 
     * @param orderId
     */
    public void accessedMOrder(long orderId) {
    	if (!accessedMOrderRecords.contains(orderId)) {
    		accessedMOrderRecords.put(orderId, new AtomicInteger(1));
    	} else {
    		accessedMOrderRecords.get(orderId).incrementAndGet();
    	}
    }
    
}

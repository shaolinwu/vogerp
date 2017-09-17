package org.shaolin.vogerp.commonmodel.internal;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.spi.IConstantService;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.runtime.spi.IAppServiceManager.Env;
import org.shaolin.bmdp.utils.HttpSender;
import org.shaolin.vogerp.commonmodel.IExpressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ExpressServiceImpl implements IExpressService, IServiceProvider {
	
	private static final Logger logger = LoggerFactory.getLogger(ExpressServiceImpl.class);

	private HttpSender send = new HttpSender();
	
	private final HashMap<Integer, String> venderList = new HashMap<Integer, String>();
	
	/**
	 * as agreement required, only 2000 queries per day.
	 */
	private final AtomicInteger counter = new AtomicInteger(2000);
	
	private int today;
	
	private String url;
	
	public ExpressServiceImpl() {
		today = Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
		url = Registry.getInstance().getValue("/System/Vogerp/Express/ThirdPartyURL");
		url = url + Registry.getInstance().getValue("/System/Vogerp/Express/ThirdPartyKey");
		if (IServerServiceManager.INSTANCE.getRunningEnv() == Env.Production) {
			IConstantService ceService = AppContext.get().getConstantService();
			IConstantEntity venders = ceService.getConstantEntity("ExpressVendor");
			Map<Integer, String> list = venders.getAllConstants(false);
			venderList.putAll(list);
		}
	}
	
	@Override
	public Class getServiceInterface() {
		return IExpressService.class;
	}

	public Map<Integer, String> queryVendorsList() {
		return venderList;
	}
	
	//id=[]&com=[]&nu=[]&valicode=[]&show=[0|1|2|3]&muti=[0|1]&order=[desc|asc]
	public synchronized String query(String vendorId, String expressNumber) {
		if (counter.get() < 1 && today == Calendar.getInstance().get(Calendar.DAY_OF_MONTH)) {
			logger.warn("Express queries are excceded today, tomorrow will be avariable!");
			return "";
		}
		if (today != Calendar.getInstance().get(Calendar.DAY_OF_MONTH)) {
			today = Calendar.getInstance().get(Calendar.DAY_OF_MONTH); // update date.
		}
		try {
			counter.decrementAndGet();
			return send.get(url + "&com=" + vendorId + "&nu=" + expressNumber);
		} catch (Exception e) {
			logger.warn("Failed to query Express number from third party: " + e.getMessage(), e);
		}
		return "";
	}
	

}

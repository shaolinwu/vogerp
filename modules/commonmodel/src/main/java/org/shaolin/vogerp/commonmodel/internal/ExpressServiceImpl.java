package org.shaolin.vogerp.commonmodel.internal;

import java.util.Map;

import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.commonmodel.IExpressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ExpressServiceImpl implements IExpressService, IServiceProvider {
	
	private static final Logger logger = LoggerFactory.getLogger(ExpressServiceImpl.class);

	public ExpressServiceImpl() {
	}
	
	@Override
	public Class getServiceInterface() {
		return IExpressService.class;
	}

	public Map<String, String> queryVendorsList() {
		return null;
	}
	
	public void query(String vendorId, String expressNumber) {
	}
	

}

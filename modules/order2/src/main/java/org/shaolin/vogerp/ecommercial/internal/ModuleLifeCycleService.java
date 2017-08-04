package org.shaolin.vogerp.ecommercial.internal;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.springframework.stereotype.Service;

@Service
public class ModuleLifeCycleService implements ILifeCycleProvider {

	@Override
	public void configService() {
		
	}
	
	@Override
	public void startService() {
		IPaymentService payService = AppContext.get().getService(IPaymentService.class);
		payService.addListener(new OrderPaymentListener());
	}

	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
		
	}

	@Override
	public void reload() {
	}

	@Override
	public int getRunLevel() {
		return 15;
	}

}

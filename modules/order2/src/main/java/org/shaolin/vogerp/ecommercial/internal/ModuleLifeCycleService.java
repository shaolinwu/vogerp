package org.shaolin.vogerp.ecommercial.internal;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.vogerp.accounting.IAccountingService;

public class ModuleLifeCycleService implements ILifeCycleProvider {

	@Override
	public void startService() {
		IAccountingService payService = AppContext.get().getService(IAccountingService.class);
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

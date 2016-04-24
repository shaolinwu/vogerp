package org.shaolin.vogerp.coupon.internal;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.vogerp.commonmodel.IUserService;
import  org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;

public class CouponLifeServiceProviderImpl implements ILifeCycleProvider {

	@Override
	public void startService() {
		IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
		UserActionListener listener = new CouponUserActionListener();
		userService.addListener(listener);
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
		startService();
	}

	@Override
	public int getRunLevel() {
		return 0;
	}

}

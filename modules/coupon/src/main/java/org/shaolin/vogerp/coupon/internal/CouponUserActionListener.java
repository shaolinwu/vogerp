package org.shaolin.vogerp.coupon.internal;

import org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;

public class CouponUserActionListener implements UserActionListener {
	
	@Override
	public void loggedIn(IPersonalAccount account, IPersonalInfo userInfo) {
		
	}

	@Override
	public void registered(IPersonalInfo userInfo) {
	}

	/**
	 * generate default coupon type
	 */
	private void generateDefaultCouponTypes(Long orgId) {
	}

}

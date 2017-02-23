package org.shaolin.vogerp.commonmodel.internal;

import java.util.Date;

import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;

public class NewUserListener implements UserActionListener{

	@Override
	public void loggedIn(IPersonalAccount account, IPersonalInfo userInfo) {
		if (account.getLoginedCount() == 1) {
			ICoordinatorService service = (ICoordinatorService)
					IServerServiceManager.INSTANCE.getService(ICoordinatorService.class);
			NotificationImpl welcomeNew = new NotificationImpl();
			welcomeNew.setPartyId(userInfo.getId());
			welcomeNew.setSubject(Registry.getInstance().getValue("/System/Vogerp/Notification/Common/UserRegister_SUB"));
			welcomeNew.setDescription(Registry.getInstance().getValue("/System/Vogerp/Notification/Common/UserRegister_DESC"));
			welcomeNew.setCreateDate(new Date());
			service.addNotification(welcomeNew, false);
		}
	}

	@Override
	public void registered(IPersonalInfo userInfo) {
		
	}

}

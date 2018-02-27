package org.shaolin.vogerp.ecommercial.internal;

import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.workflow.be.INotification;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;

public class OrderBroadcastService {

	public void broadcast(INotification message) {
		if (message.getNeedBroadcast()) {
			message.getCity();
			message.getPartyType();
			
			PersonalAccountImpl account = new PersonalAccountImpl();
			account.setLocationInfo(message.getCity());
			List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
			for (IPersonalAccount acc: result) {
				NotificationImpl msg = new NotificationImpl();
				msg.setPartyId(acc.getPersonalId());
				msg.setDescription(message.getDescription());
				
				ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
                service.addNotification(message, true);
			}
		}
	}

}

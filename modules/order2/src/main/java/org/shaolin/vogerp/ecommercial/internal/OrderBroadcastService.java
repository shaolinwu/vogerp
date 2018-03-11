package org.shaolin.vogerp.ecommercial.internal;

import java.util.List;

import org.shaolin.bmdp.workflow.be.INotification;
import org.shaolin.vogerp.commonmodel.be.IOrganization;
import org.shaolin.vogerp.commonmodel.be.OrganizationImpl;
import org.shaolin.vogerp.commonmodel.ce.OrgType;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;

public class OrderBroadcastService {

	/**
	 * TODO: R tree algorithem.
	 * 
	 * @param message
	 */
	public void broadcast(INotification message) {
		if (message.getNeedBroadcast()) {
			
			OrganizationImpl scFlow = new OrganizationImpl();
			scFlow.setOrgType(OrgType.COMPANY);
			scFlow.setType("");
			List<IOrganization> result = CommonModel.INSTANCE.searchOrganization(scFlow, null, 0, 1);
			if (result != null && result.size() > 0) {
				
			}
			
			
//			PersonalAccountImpl account = new PersonalAccountImpl();
//			account.setLocationInfo(message.getCity());
//			List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, -1);
//			for (IPersonalAccount acc: result) {
//				NotificationImpl msg = new NotificationImpl();
//				msg.setPartyId(acc.getPersonalId());
//				msg.setDescription(message.getDescription());
//				
//				ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
//                service.addNotification(message, true);
//			}
		}
	}

}

package org.shaolin.vogerp.productmodel.internal;

import org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.productmodel.be.WarehouseImpl;
import org.shaolin.vogerp.productmodel.ce.StorageContainerType;
import org.shaolin.vogerp.productmodel.dao.ProductModel;

public class NewUserListener implements UserActionListener{

	@Override
	public void loggedIn(IPersonalAccount account, IPersonalInfo userInfo) {
		if (account.getLoginedCount() == 1) {
			WarehouseImpl defaultWareHouse = new WarehouseImpl();
			defaultWareHouse.setContainerType(StorageContainerType.NORMAL);
			defaultWareHouse.setName("Default");
			defaultWareHouse.setDescription("Default Warehouse");
			defaultWareHouse.setOrgId(userInfo.getOrgId());
			ProductModel.INSTANCE.create(defaultWareHouse);
		}
	}

	@Override
	public void registered(IPersonalInfo userInfo) {
		
	}

}

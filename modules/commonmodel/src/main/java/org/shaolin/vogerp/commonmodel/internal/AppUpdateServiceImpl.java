package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.criterion.Order;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.vogerp.commonmodel.IAppUpdateService;
import org.shaolin.vogerp.commonmodel.be.AppUpdateRecordImpl;
import org.shaolin.vogerp.commonmodel.be.IAppUpdateRecord;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;

public class AppUpdateServiceImpl implements IAppUpdateService {

	private IAppUpdateRecord newestRecord = new AppUpdateRecordImpl();
	
	public AppUpdateServiceImpl() {
		List<Order> orders = new ArrayList<Order>();
		orders.add(Order.desc("createDate"));
		List<IAppUpdateRecord> result = ModularityModel.INSTANCE.searchAppUpdate(new AppUpdateRecordImpl(), orders, 0, 1);
		if (result != null && result.size() > 0) {
			newestRecord = result.get(0);
		}
	}
	
	@Override
	public void update(int version, String description) {
		IAppUpdateRecord record = new AppUpdateRecordImpl();
		record.setVersion(version);
		record.setDescription(description);
		record.setEnabled(true);
		record.setCreateDate(new Date());
		ModularityModel.INSTANCE.create(record);
		
		newestRecord = record;
	}
	
	@Override
	public JSONObject getInfo() {
		JSONObject item = new JSONObject(newestRecord);
		return item;
	}

	@Override
	public Class getServiceInterface() {
		return IAppUpdateService.class;
	}
}

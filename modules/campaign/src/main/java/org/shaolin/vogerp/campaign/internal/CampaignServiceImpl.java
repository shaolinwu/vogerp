package org.shaolin.vogerp.campaign.internal;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.campaign.ICampaignService;
import org.shaolin.vogerp.campaign.be.CampaignImpl;
import org.shaolin.vogerp.campaign.be.ICampaign;
import org.shaolin.vogerp.campaign.ce.CampaignType;
import org.shaolin.vogerp.campaign.dao.CampaignModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CampaignServiceImpl implements ICampaignService, ILifeCycleProvider, IServiceProvider {
	
	private static final Logger logger = LoggerFactory.getLogger(CampaignServiceImpl.class);

	public int today = Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
	
	public HashMap<CampaignType, List<ICampaign>> todays = new HashMap<CampaignType, List<ICampaign>>();
	
	public CampaignServiceImpl() {
	}
	
	@Override
	public Class getServiceInterface() {
		return ICampaignService.class;
	}
	
	public List<ICampaign> getTodaysCampaign(final CampaignType type, final List<IConstantEntity> userRoles) {
		if (today != Calendar.getInstance().get(Calendar.DAY_OF_WEEK)
				|| !todays.containsKey(type)) {
			today = Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
			List<ICampaign> result = getCampaign(new Date(), type);
			todays.put(type, result);
		}
		List<ICampaign> items = todays.get(type);
		List<ICampaign> result = new ArrayList<ICampaign>();
		for (ICampaign camp : items) {
			if (userRoles != null && userRoles.size() > 0 
					&& camp.getPartyRoles() != null && camp.getPartyRoles().trim().length() > 0) {
				String[] definedRoles = camp.getPartyRoles().split(";");
				for (String role : definedRoles) {
					if (userRoles.contains(CEUtil.toCEValue(role))) {
						result.add(camp);
						break;
					}
				}
			} else {
				result.add(camp);
			}
		}
		return result;
	}
	
	public List<ICampaign> getCampaign(Date today, CampaignType type) {
		CampaignImpl camp = new CampaignImpl();
		camp.setType(type);
		camp.setStartCreateDate(today);
		camp.setEndCreateDate(today);
		return CampaignModel.INSTANCE.searchCampaign(camp, null, 0, -1);
	}
	
	public void checkPolicy(ICampaign campaign, Object object) {
		//TODO:
	}

	@Override
	public void startService() {
		AppContext.get().register(this);
		
		reload();
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
		today = Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
		todays.clear();
		today = Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
		List<ICampaign> result = getCampaign(new Date(), CampaignType.FESTIVAL);
		todays.put(CampaignType.FESTIVAL, result);
		List<ICampaign> result1 = getCampaign(new Date(), CampaignType.ADV);
		todays.put(CampaignType.ADV, result1);
		List<ICampaign> result2 = getCampaign(new Date(), CampaignType.DAILY);
		todays.put(CampaignType.DAILY, result2);
		
		logger.info("Reloaded all campaign activities.");
	}

	@Override
	public int getRunLevel() {
		return 10;
	}

}

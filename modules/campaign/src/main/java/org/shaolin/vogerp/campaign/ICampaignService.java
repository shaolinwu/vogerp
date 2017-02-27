package org.shaolin.vogerp.campaign;

import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.vogerp.campaign.be.ICampaign;
import org.shaolin.vogerp.campaign.ce.CampaignType;

public interface ICampaignService {

	public List<ICampaign> getTodaysCampaign(CampaignType type, List<IConstantEntity> userRoles);
	
	public List<ICampaign> getCampaign(Date today, CampaignType type);
	
	public void checkPolicy(ICampaign campaign, Object object);
}

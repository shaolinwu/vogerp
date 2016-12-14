package org.shaolin.vogerp.commonmodel.internal;

import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.runtime.cache.CacheManager;
import org.shaolin.bmdp.runtime.cache.ICache;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.commonmodel.IMemberService;
import org.shaolin.vogerp.commonmodel.be.AssignedMemberImpl;
import org.shaolin.vogerp.commonmodel.be.AssignedMemberServiceUsedImpl;
import org.shaolin.vogerp.commonmodel.be.IAssignedMember;
import org.shaolin.vogerp.commonmodel.be.IAssignedMemberServiceUsed;
import org.shaolin.vogerp.commonmodel.be.IMemberServiceRule;
import org.shaolin.vogerp.commonmodel.be.MemberServiceRuleImpl;
import org.shaolin.vogerp.commonmodel.ce.AMemberType;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;

public class MemberServiceImpl implements IMemberService, IServiceProvider {

	private static ICache<String, IMemberServiceRule> cache;
	
	public MemberServiceImpl() {
		cache = CacheManager.getInstance().getCache("app_memberservice", String.class, 
				IMemberServiceRule.class);
		
		MemberServiceRuleImpl service = new MemberServiceRuleImpl();
		List<IMemberServiceRule> list = CommonModel.INSTANCE.searchMemberService(service, null, 0, 1);
		for (IMemberServiceRule rule: list) {
			cache.put(rule.getType().getValue() + "." +rule.getFunctionId(), rule);
		}
	}
	
	public void createMember(AssignedMemberImpl member) {
		if (member.getId() == 0) {
            CommonModel.INSTANCE.create(member);
        } else {
            CommonModel.INSTANCE.update(member);
        }
	}
	
	@Override
	public IAssignedMember getUserMember(long orgId) {
		AssignedMemberImpl member = new AssignedMemberImpl();
		member.setOrgId(orgId);
		List list = CommonModel.INSTANCE.searchAssignedMember(member, null, 0, 1);
		if (list != null && list.size() > 0) {
			AssignedMemberImpl item = (AssignedMemberImpl)list.get(0);
			return item;
		} 
		return null;
	}
	
	@Override
	public IAssignedMember getUserMember() {
		return getUserMember(UserContext.getUserContext().getOrgId());
	}
	
	@Override
	public AMemberType checkUserHasAMember(long orgId) {
		AssignedMemberImpl member = new AssignedMemberImpl();
		member.setOrgId(orgId);
		List list = CommonModel.INSTANCE.searchAssignedMember(member, null, 0, 1);
		if (list != null && list.size() > 0) {
			AssignedMemberImpl item = (AssignedMemberImpl)list.get(0);
			//Check whether is expired! item.getEndtime();
			if (item.getEndtime().getTime() > System.currentTimeMillis()) {
				return item.getType();
			}
		} 
		return AMemberType.NOT_SPECIFIED;
	}
	
	@Override
	public AMemberType checkUserHasAMember() {
		return checkUserHasAMember(UserContext.getUserContext().getOrgId());
	}
	
	@Override
	public int getMemeberServiceRemainingCount(String memberType, String functionId) {
		return getMemeberServiceRemainingCount(UserContext.getUserContext().getOrgId(), memberType, functionId);
	}
	
	@Override
	public int getMemeberServiceRemainingCount(long orgId, String memberType, String functionId) {
		AMemberType type = checkUserHasAMember();
		if (type == AMemberType.NOT_SPECIFIED) {
			return -1;
		}
		IMemberServiceRule rule = cache.get(memberType + "." + functionId);
		if (rule == null) {
			return -1;
		}
		
		//MemberServiceRuleImpl
		AssignedMemberServiceUsedImpl member = new AssignedMemberServiceUsedImpl();
		member.setOrgId(orgId);
		member.setFunctionId(functionId);
		
		List<IAssignedMemberServiceUsed> result = CommonModel.INSTANCE.searchMemberServiceUsed(member, null, 0, 1);
		if (result != null && result.size() > 0) {
			return rule.getOverloadNumber() - result.get(0).getUsedCount();
		} else {
			AssignedMemberServiceUsedImpl newMember = new AssignedMemberServiceUsedImpl();
			newMember.setOrgId(orgId);
			newMember.setFunctionId(functionId);
			newMember.setUsedCount(1);
			newMember.setCreateDate(new Date());
			newMember.setEnabled(true);
			CommonModel.INSTANCE.create(newMember, true);
			return rule.getOverloadNumber() - 1;
		}
	}
	
	@Override
	public int updateUserMemeberServiceCount(String memberType, String functionId) {
		return updateUserMemeberServiceCount(UserContext.getUserContext().getOrgId(), memberType, functionId);
	}
	
	@Override
	public int updateUserMemeberServiceCount(long orgId, String memberType, String functionId) {
		AMemberType type = checkUserHasAMember();
		if (type == AMemberType.NOT_SPECIFIED) {
			return -1;
		}
		IMemberServiceRule rule = cache.get(memberType + "." + functionId);
		if (rule == null) {
			return -1;
		}
		
		//MemberServiceRuleImpl
		AssignedMemberServiceUsedImpl member = new AssignedMemberServiceUsedImpl();
		member.setOrgId(orgId);
		member.setFunctionId(functionId);
		
		List<IAssignedMemberServiceUsed> result = CommonModel.INSTANCE.searchMemberServiceUsed(member, null, 0, 1);
		if (result != null && result.size() > 0) {
			IAssignedMemberServiceUsed item = result.get(0);
			if ((rule.getOverloadNumber() - item.getUsedCount()) > 0) {
				item.setUsedCount(item.getUsedCount() + 1);
				CommonModel.INSTANCE.update(item);
			}
			return rule.getOverloadNumber() - item.getUsedCount();
		} else {
			AssignedMemberServiceUsedImpl newMember = new AssignedMemberServiceUsedImpl();
			newMember.setOrgId(orgId);
			newMember.setFunctionId(functionId);
			newMember.setCreateDate(new Date());
			newMember.setUsedCount(1);
			newMember.setEnabled(true);
			CommonModel.INSTANCE.create(newMember, true);
			return rule.getOverloadNumber() - 1;
		}
	}
	
	public void reload() {
		cache.clear();
		MemberServiceRuleImpl service = new MemberServiceRuleImpl();
		List<IMemberServiceRule> list = CommonModel.INSTANCE.searchMemberService(service, null, 0, 1);
		for (IMemberServiceRule rule: list) {
			cache.put(rule.getType().getValue() + "." +rule.getFunctionId(), rule);
		}
	}
	
	public int getServiceOverloadNumber(String memberType, String functionId) {
		IMemberServiceRule rule = cache.get(memberType + "." + functionId);
		if (rule != null) {
			return rule.getOverloadNumber();
		}
		return -1;
	}
	
	public double getServicePrice(IAssignedMember member) {
		String memberType = member.getType().getValue();
		return cache.get(memberType).getPrice();
	}
	
	@Override
	public Class getServiceInterface() {
		return IMemberService.class;
	}

}

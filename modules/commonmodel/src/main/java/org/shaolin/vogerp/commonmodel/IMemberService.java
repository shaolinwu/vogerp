package org.shaolin.vogerp.commonmodel;

import org.shaolin.vogerp.commonmodel.be.IAssignedMember;
import org.shaolin.vogerp.commonmodel.ce.AMemberFunctionType;
import org.shaolin.vogerp.commonmodel.ce.AMemberType;

public interface IMemberService {

	public void reload();
	
	public IAssignedMember getUserMember(long orgId);
	
	public IAssignedMember getUserMember();
	
	public AMemberType checkUserHasAMember(long orgId);
	
	public AMemberType checkUserHasAMember();
	
	public double getServicePrice(IAssignedMember member, AMemberFunctionType functionId);
	
	public int getServiceOverloadNumber(AMemberType memberType, AMemberFunctionType functionId);
	
	public int getMemeberServiceRemainingCount(AMemberType memberType, AMemberFunctionType functionId);
	
	public int getMemeberServiceRemainingCount(long orgId, AMemberType memberType, AMemberFunctionType functionId);
	
	public int updateUserMemeberServiceCount(AMemberType memberType, AMemberFunctionType functionId);
	
	public int updateUserMemeberServiceCount(long orgId, AMemberType memberType, AMemberFunctionType functionId);
}

package org.shaolin.vogerp.commonmodel;

import org.shaolin.vogerp.commonmodel.be.IAssignedMember;
import org.shaolin.vogerp.commonmodel.ce.AMemberType;

public interface IMemberService {

	public void reload();
	
	public IAssignedMember getUserMember();
	
	public AMemberType checkUserHasAMember();
	
	public int getServiceOverloadNumber(String memberType, String functionId);
	
	public int getMemeberServiceRemainingCount(String memberType, String functionId);
	
	public int updateUserMemeberServiceCount(String memberType, String functionId);
	
}

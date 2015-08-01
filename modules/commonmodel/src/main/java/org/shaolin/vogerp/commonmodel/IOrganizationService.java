package org.shaolin.vogerp.commonmodel;

import java.util.List;

import org.shaolin.vogerp.commonmodel.be.ILegalOrganizationInfo;
import org.shaolin.vogerp.commonmodel.be.IOrganization;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.ce.PartyRoleType;

public interface IOrganizationService {

	public IOrganization getOrganizationInfo();
	
	public ILegalOrganizationInfo getLegalInfo();
	
	public List<IOrganization> getSubOrganization(String orgCode);
	
	public List<IPersonalInfo> getEmployeese(String orgCode);
	
	public List<PartyRoleType> getOrganizationRoles();
	
	/**
	 * The role-permission is managed in the system configuration.
	 * 
	 * @return
	 */
	public List<PartyRoleType> getEmployeeseRoles();
	
}

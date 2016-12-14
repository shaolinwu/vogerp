package org.shaolin.vogerp.commonmodel;

import java.util.List;

import org.shaolin.vogerp.commonmodel.be.ILegalOrganizationInfo;
import org.shaolin.vogerp.commonmodel.be.IOrganization;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;

public interface IOrganizationService {
	
	/**
	 * Send a message to this organization.
	 * 
	 * @param subject
	 * @param message
	 * @param org
	 */
	public void notifyOrganizer(String subject, String message, IOrganization org);

	/**
	 * 
	 * @param offset
	 * @param count
	 * @return
	 */
	public List[] getAllOrganizations(int offset, int count);
	
	/**
	 * Get admin organization.
	 * 
	 * @return
	 */
	public IOrganization getAdminOrganization();
	
	/**
	 * Get organization information of current login user.
	 * 
	 * @return
	 */
	public IOrganization getOrganizationInfo();
	
	/**
	 * Get organization information by the party id.
	 * 
	 * @param partyId
	 * @return
	 */
	public IOrganization getOrganizationByPartyId(long partyId);
	
	/**
	 * Get organization id by the party id.
	 * 
	 * @param partyId
	 * @return
	 */
	public long getOrgIdByPartyId(long partyId);
	
	/**
	 * Get organization illegal information of current login user.
	 * 
	 * @return
	 */
	public ILegalOrganizationInfo getLegalInfo();
	
	/**
	 * Specify an organization id.
	 * 
	 * @param orgId
	 * @return
	 */
	public ILegalOrganizationInfo getLegalInfo(long orgId);
	
	public List<IOrganization> getSubOrganization(long orgId);
	
	public List<IPersonalInfo> getEmployeese(long orgId);
	
	/**
	 * Get all employeese of current organization.
	 * 
	 * @return
	 */
	public List<IPersonalInfo> getEmployeese();
	
	public List<String> getOrganizationRoles();
	
	/**
	 * The role-permission is managed in the system configuration.
	 * 
	 * @return
	 */
	public List<String> getEmployeeseRoles();
	
	public List<String> getEmployeeseByRole();
	
}

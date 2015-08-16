package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.commonmodel.IOrganizationService;
import org.shaolin.vogerp.commonmodel.be.ILegalOrganizationInfo;
import org.shaolin.vogerp.commonmodel.be.IOrganization;
import org.shaolin.vogerp.commonmodel.be.LegalOrganizationInfoImpl;
import org.shaolin.vogerp.commonmodel.be.OrganizationImpl;
import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;

public class OrganizationServiceImpl implements IOrganizationService, IServiceProvider {

	private final List<OrganizationImpl> allItems;
	
	private IOrganization root;
	
	private ILegalOrganizationInfo legalInfo;
	
	public OrganizationServiceImpl() {
		OrganizationImpl searchCriteria = new OrganizationImpl();
		this.allItems = CommonModel.INSTANCE.searchSubOrganizationInfo(searchCriteria, null, 0, -1);
		for (OrganizationImpl item : allItems) {
			if (item.getParentId() == 0) {
				this.root = item;
				break;
			}
		}
		LegalOrganizationInfoImpl searchCondition1 = new LegalOrganizationInfoImpl();
		searchCondition1.setOrgId(this.root.getId());
		List list = CommonModel.INSTANCE.searchOrgaLegalInfo(searchCondition1, null, 0, 1);
		if (list.size() > 0) {
			this.legalInfo = (ILegalOrganizationInfo)list.get(0);
		}
	}
	
	public void reload() {
		this.allItems.clear();
		
		OrganizationImpl searchCriteria = new OrganizationImpl();
		this.allItems.addAll(CommonModel.INSTANCE.searchSubOrganizationInfo(searchCriteria, null, 0, -1));
		for (OrganizationImpl item : allItems) {
			if (item.getParentId() == 0) {
				this.root = item;
				break;
			}
		}
		LegalOrganizationInfoImpl searchCondition1 = new LegalOrganizationInfoImpl();
		searchCondition1.setOrgId(this.root.getId());
		List list = CommonModel.INSTANCE.searchOrgaLegalInfo(searchCondition1, null, 0, 1);
		if (list.size() > 0) {
			this.legalInfo = (ILegalOrganizationInfo)list.get(0);
		}
	}
	
	@Override
	public IOrganization getOrganizationInfo() {
		return this.root;
	}

	@Override
	public ILegalOrganizationInfo getLegalInfo() {
		return this.legalInfo;
	}

	@Override
	public List<IOrganization> getSubOrganization(String orgCode) {
		List<IOrganization> subList = new ArrayList<IOrganization>();
		for (OrganizationImpl org: this.allItems) {
			if (org.getOrgCode().equals(orgCode)) {
				subList.add(org);
			}
		}
		return subList;
	}

	@Override
	public List<PersonalInfoImpl> getEmployeese(String orgCode) {
		PersonalInfoImpl condition = new PersonalInfoImpl();
		condition.setOrgCode(orgCode);
		return CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, -1);
	}
	
	@Override
	public PersonalInfoImpl getEmployee(int id) {
		PersonalInfoImpl condition = new PersonalInfoImpl();
		condition.setId(id);
		List<PersonalInfoImpl> list = CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, -1);
		if (list != null && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}
	
	@Override
	public List<PersonalInfoImpl> getEmployeese() {
		PersonalInfoImpl condition = new PersonalInfoImpl();
		return CommonModel.INSTANCE.searchPersonInfo(condition, null, 0, -1);
	}
		
	@Override
	public List<String> getOrganizationRoles() {
		return null;
	}

	@Override
	public List<String> getEmployeeseRoles() {
		return null;
	}

	@Override
	public List<String> getEmployeeseByRole() {
		return null;
	}

	@Override
	public Class getServiceInterface() {
		return IOrganizationService.class;
	}

}

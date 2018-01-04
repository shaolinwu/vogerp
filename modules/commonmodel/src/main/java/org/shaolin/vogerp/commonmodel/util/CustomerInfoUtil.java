package org.shaolin.vogerp.commonmodel.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.vogerp.commonmodel.IOrganizationService;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.IAddressInfo;
import org.shaolin.vogerp.commonmodel.be.IContactInfo;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.ce.OrgType;
import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;

public class CustomerInfoUtil {

	public static String getCustomerBasicInfo(IPersonalInfo customer) {
		return customer.getLastName() + customer.getFirstName();
	}
	
	public static String getCustomerBasicInfo(long userId) {
		IUserService service = (IUserService)AppContext.get().getService(IUserService.class);
	    return CustomerInfoUtil.getCustomerBasicInfo(service.getPersonalInfo(userId));
	}
	
	public static String getCustomerEnterpriseBasicInfo(long userId) {
		IUserService service = (IUserService)AppContext.get().getService(IUserService.class);
	    return CustomerInfoUtil.getCustomerEnterpriseBasicInfo(service.getPersonalInfo(userId));
	}
	
	public static String getCustomerEnterpriseBasicInfo(IPersonalInfo customer) {
		if (customer == null) {
			return "";
		}
		if (customer.getOrganization() != null) {
			if (customer.getOrganization().getOrgType() == OrgType.INDIVIDUAL) {
				return getCustomerBasicInfo(customer) + "[\u4E2A\u4EBA\u7528\u6237]";
			}
			return customer.getOrganization().getDescription() + 
					(customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED?"[\u8BA4\u8BC1\u7528\u6237]":"");
		} else {
			return getCustomerBasicInfo(customer);
		}
	}
	
	public static boolean isVerfiedUser(IPersonalInfo customer) {
		if (customer == null || customer.getOrganization() == null) {
			return false;
		}
		if (customer.getOrganization().getOrgType() == OrgType.COMPANY
				&& customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED) {
			return true;
		}
		return false;
	}
	
	public static String getSecureCustomerBasicInfo(long userId) {
		IUserService service = (IUserService)AppContext.get().getService(IUserService.class);
	    return CustomerInfoUtil.getSecureCustomerBasicInfo(service.getPersonalInfo(userId));
	}
	
	public static String getSecureCustomerBasicInfo(IPersonalInfo customer) {
		if (customer == null) {
			return "";
		}
		if (customer.getOrganization() != null) {
			if (customer.getOrganization().getOrgType() == OrgType.INDIVIDUAL) {
				return getCustomerBasicInfo(customer) + "[\u4E2A\u4EBA\u7528\u6237]";
			}
			return StringUtil.truncateString(customer.getOrganization().getName(), 5, "...") + 
					(customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED?"[\u8BA4\u8BC1\u7528\u6237]":"");
		} else {
			return getCustomerBasicInfo(customer);
		}
	}
	
	public static String getCustomerCity(IPersonalInfo customer) {
		try {
			IUserService userService = AppContext.get().getService(IUserService.class);
			return CEUtil.getValue(userService.getPersonalAccount(customer.getId()).getLocationInfo());
		} catch (Exception e){}
		return "";
	}
	
	public static List<ArrayList<String>>[] getAddressInfo(Set<IAddressInfo> list) {
    	if (list == null || list.isEmpty()) {
    		return new List[] {new ArrayList<String>(), new ArrayList<String>()};
    	}
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	ArrayList<String> displayResult = new ArrayList<String>();
    	for (IAddressInfo address : list) {
    		valueResult.add(String.valueOf(address.getId()));
    		displayResult.add(addressToString(address));
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public static List<ArrayList<String>>[] getContactInfo(Set<IContactInfo> list) {
    	if (list == null || list.isEmpty()) {
    		//Don't use Collections.emptyList.
    		return new List[] {new ArrayList<String>(), new ArrayList<String>()};
    	}
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	ArrayList<String> displayResult = new ArrayList<String>();
    	for (IContactInfo contact : list) {
    		valueResult.add(String.valueOf(contact.getId()));
    		if (contact.getMobile() != null) {
    			displayResult.add(contact.getMobile());
    		} else {
    			displayResult.add(contact.getTelephone());
    		}
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public static String contactToString(IContactInfo contact) {
    	if (contact.getMobile() != null) {
			return contact.getMobile();
		} else {
			return contact.getTelephone();
		}
    }
    
    public static String addressToString(IAddressInfo address) {
    	StringBuffer sb = new StringBuffer();
    	sb.append(CEUtil.toCEValue(address.getProvince()).getValue()).append(" ");
    	sb.append(CEUtil.toCEValue(address.getCity()).getValue()).append(" ");
    	if (address.getDistrict() != null && address.getDistrict().trim().length() > 0
    			&& !"-1".equals(address.getDistrict()) && !"null".equals(address.getDistrict())) {
    		sb.append(CEUtil.toCEValue(address.getDistrict()).getValue()).append(" ");
    	}
    	sb.append(address.getStreet()).append(" ");
    	if (address.getBlock() != null && address.getBlock().trim().length() > 0) {
    		sb.append(address.getBlock()).append(" ");
    	}
    	if (address.getDescription() != null && address.getDescription().trim().length() > 0) {
    		sb.append("(").append(address.getDescription()).append(")");
    	}
    	return sb.toString();
    }
    
    public static String addressToString2(long orgId) {
    	IOrganizationService orgService = (IOrganizationService)AppContext.get().getService(IOrganizationService.class);
    	IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
    	List<IPersonalInfo> personalInfoList = orgService.getEmployeese(orgId);
    	if (personalInfoList == null || personalInfoList.size() == 0) {
    		return null;
    	}
    	Set<IAddressInfo> list = userService.getPersonalInfo(personalInfoList.get(0).getId()).getAddresses();
    	if (list != null && list.size() > 0) {
    		IAddressInfo defaultAddress = null;
    		for (IAddressInfo a : list) {
    			if (a.getDefaultAddress()) {
    				defaultAddress = a;
    				break;
    			}
    		}
    		IAddressInfo info = defaultAddress != null? defaultAddress : list.iterator().next();
    		return CustomerInfoUtil.addressToString(info);
    	}
    	return null;
    }
    
}

package org.shaolin.vogerp.commonmodel.util;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
import org.shaolin.vogerp.commonmodel.be.IAddressInfo;
import org.shaolin.vogerp.commonmodel.be.IContactInfo;
import org.shaolin.vogerp.commonmodel.be.IDeliveryInfo;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.commonmodel.ce.OrgVerifyStatusType;

public class CustomerInfoUtil {

	public static String getCustomerBasicInfo(IPersonalInfo customer) {
		return customer.getFirstName() + customer.getLastName();
	}
	
	public static String getCustomerEnterpriseBasicInfo(IPersonalInfo customer) {
		if (customer.getOrganization() != null) {
			return customer.getOrganization().getDescription() + 
					(customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED?"[\u8BA4\u8BC1\u7528\u6237]":"");
		} else {
			return getCustomerBasicInfo(customer) + 
					(customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED?"[\u8BA4\u8BC1\u7528\u6237]":"");
		}
	}
	
	public static String getSecureCustomerBasicInfo(IPersonalInfo customer) {
		if (customer.getOrganization() != null) {
			return StringUtil.truncateString(customer.getOrganization().getName(), 5, "...") + 
					(customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED?"[\u8BA4\u8BC1\u7528\u6237]":"");
		} else {
			return getCustomerBasicInfo(customer) + 
					(customer.getOrganization().getVeriState()==OrgVerifyStatusType.VERIFIED?"[\u8BA4\u8BC1\u7528\u6237]":"");
		}
	}
	
	public static String getCustomerCity(IPersonalInfo customer) {
		try {
			IUserService userService = AppContext.get().getService(IUserService.class);
			return CEUtil.getValue(userService.getPersonalAccount(customer.getId()).getLocationInfo());
		} catch (Exception e){}
		return "";
	}
	
	public static List<ArrayList<String>>[] getAddressInfo(List<IAddressInfo> list) {
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
    
    public static List<ArrayList<String>>[] getContactInfo(List<IContactInfo> list) {
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
    	sb.append(address.getName()).append("--");
    	sb.append(CEUtil.toCEValue(address.getProvince()).getValue()).append(" ");
    	sb.append(CEUtil.toCEValue(address.getCity()).getValue()).append(" ");
    	if (address.getDistrict() != null && address.getDistrict().length() > 0
    			&& !address.getDistrict().equals(""+IConstantEntity.CONSTANT_DEFAULT_INT_VALUE)
    			&& !address.getDistrict().equals(""+IConstantEntity.CONSTANT_DEFAULT_VALUE)) {
    		sb.append(CEUtil.toCEValue(address.getDistrict()).getValue()).append(" ");
    	}
    	sb.append(address.getStreet()).append(" ");
    	if (address.getBlock() != null) {
    		sb.append(address.getBlock()).append(" ");
    	}
    	if (address.getDescription() != null && address.getDescription().length() > 0) {
    		sb.append("(").append(address.getDescription()).append(")");
    	}
    	return sb.toString();
    }
    
    public static IDeliveryInfo createDeliveryInfo(long userId) {
    	DeliveryInfoImpl deliveryInfo = new DeliveryInfoImpl();
    	IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
    	List<IAddressInfo> list = userService.getPersonalInfo(userId).getAddresses();
    	if (list != null && list.size() > 0) {
    		IAddressInfo defaultAddress = null;
    		for (IAddressInfo a : list) {
    			if (a.getDefaultAddress()) {
    				defaultAddress = a;
    				break;
    			}
    		}
    		IAddressInfo info = defaultAddress != null? defaultAddress : list.get(0);
    		deliveryInfo.setName(info.getName());
    		deliveryInfo.setAddress(addressToString(info));
    		deliveryInfo.setMobileNumber(info.getMobile());
    		deliveryInfo.setComment(info.getDescription());
    	}
    	return deliveryInfo;
    }
    
    public static IDeliveryInfo createDeliveryInfo(long userId, long addressId) {
    	DeliveryInfoImpl deliveryInfo = new DeliveryInfoImpl();
    	IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
    	List<IAddressInfo> list = userService.getPersonalInfo(userId).getAddresses();
    	if (list != null && list.size() > 0) {
    		for (IAddressInfo address: list) {
    			if (address.getId() == addressId) {
		    		IAddressInfo info = list.get(0);
		    		deliveryInfo.setName(info.getName());
		    		deliveryInfo.setAddress(addressToString(info));
		    		deliveryInfo.setMobileNumber(info.getMobile());
		    		deliveryInfo.setComment(info.getDescription());
		    		break;
    			}
    		}
    	}
    	return deliveryInfo;
    }
}

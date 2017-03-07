package org.shaolin.vogerp.commonmodel;

import java.util.Map;

public interface IExpressService {

	public Map<Integer, String> queryVendorsList();
	
	public String query(String vendorId, String expressNumber);
	
}

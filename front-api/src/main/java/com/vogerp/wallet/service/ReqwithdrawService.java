package com.vogerp.wallet.service;

import java.util.List;
import java.util.Map;

import com.vogerp.wallet.domain.ReqwithdrawDO;

/**
 * 钱包提币申请
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2018-08-27 13:31:53
 */
public interface ReqwithdrawService {
	
	ReqwithdrawDO get(Long id);
	
	List<ReqwithdrawDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(ReqwithdrawDO reqwithdraw);
}

package com.vogerp.wallet.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.vogerp.wallet.domain.PlatformAccountDO;
import com.vogerp.wallet.domain.PlatformAccountTransferDto;

/**
 * 钱包账号
 * @date 2018-08-27 13:12:30
 */
@Mapper
public interface PlatformAccountDao {

	PlatformAccountDO get(Long id);
	
	PlatformAccountDO getByAccId(String accid);
	
	List<PlatformAccountDO> list(Map<String,Object> map);
	
	int count(Map<String,Object> map);
	
	int save(PlatformAccountDO account);
	
	int update(PlatformAccountDO account);
	
	int personalTransfer(PlatformAccountDO update);
	
	int platToPlatTransfer(PlatformAccountTransferDto update);
}

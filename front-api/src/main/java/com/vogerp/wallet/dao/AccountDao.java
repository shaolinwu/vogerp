package com.vogerp.wallet.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.vogerp.wallet.domain.AccountDO;

/**
 * 钱包账号
 * @date 2018-08-27 13:12:30
 */
@Mapper
public interface AccountDao {

	AccountDO get(Long id);
	
	AccountDO getByUserId(@Param("id")Long id, @Param("tokenId")int tokenId);
	
	AccountDO getByAccId(String accid);
	
	List<AccountDO> list(Map<String,Object> map);
	
	List<AccountDO> getAllByUserId(Long userId);
	
	int count(Map<String,Object> map);
	
	int save(AccountDO account);
	
	int update(AccountDO account);
	
	int personalTransfer(AccountDO update);
	
	int remove(Long id);
	
}

package com.vogerp.wallet.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vogerp.wallet.dao.TokenmgmtDao;
import com.vogerp.wallet.domain.TokenmgmtDO;
import com.vogerp.wallet.service.TokenMgmtService;

@Service
public class TokenMgmtServiceImpl implements TokenMgmtService {
	@Autowired
	private TokenmgmtDao tokenmgmtDao;
	
	@Override
	public TokenmgmtDO get(Long id){
		return tokenmgmtDao.get(id);
	}
	
	@Override
	public List<TokenmgmtDO> list(Map<String, Object> map){
		return tokenmgmtDao.list(map);
	}
	
	@Override
	public List<TokenmgmtDO> getAllTokens(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("enable", "1");
		return tokenmgmtDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return tokenmgmtDao.count(map);
	}
}

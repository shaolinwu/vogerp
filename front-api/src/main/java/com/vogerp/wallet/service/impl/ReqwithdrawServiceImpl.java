package com.vogerp.wallet.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vogerp.wallet.dao.ReqwithdrawDao;
import com.vogerp.wallet.domain.ReqwithdrawDO;
import com.vogerp.wallet.service.ReqwithdrawService;



@Service
public class ReqwithdrawServiceImpl implements ReqwithdrawService {
	@Autowired
	private ReqwithdrawDao reqwithdrawDao;
	
	@Override
	public ReqwithdrawDO get(Long id){
		return reqwithdrawDao.get(id);
	}
	
	@Override
	public List<ReqwithdrawDO> list(Map<String, Object> map){
		return reqwithdrawDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return reqwithdrawDao.count(map);
	}
	
	@Override
	public int save(ReqwithdrawDO reqwithdraw){
		return reqwithdrawDao.save(reqwithdraw);
	}
	
}

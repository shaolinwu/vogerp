package com.vogerp.wallet.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vogerp.wallet.dao.TransactionDao;
import com.vogerp.wallet.domain.TransactionDO;
import com.vogerp.wallet.service.TransactionService;



@Service
public class TransactionServiceImpl implements TransactionService {
	@Autowired
	private TransactionDao transactionDao;
	
	@Override
	public TransactionDO get(Long id){
		return transactionDao.get(id);
	}
	
	@Override
	public List<TransactionDO> list(Map<String, Object> map){
		return transactionDao.list(map);
	}
	
	@Override
	public List<TransactionDO> list2Flow(Map<String, Object> map){
		return transactionDao.list2Flow(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return transactionDao.count(map);
	}
	
	@Override
	public int count2Flow(Map<String, Object> map){
		return transactionDao.count2Flow(map);
	}
	
	@Override
	public int save(TransactionDO transaction){
		return transactionDao.save(transaction);
	}
}

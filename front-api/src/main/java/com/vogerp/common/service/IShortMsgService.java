package com.vogerp.common.service;

import com.vogerp.common.domain.SMSMessageDO;

public interface IShortMsgService {
	
	public boolean sendRegistrySMSCode(String phoneNumber, String code);

	public boolean sendRegistryEmailCode(String email, String code);
	
	public boolean sendMsgToPhone(String message, String tempId, String phoneNumber);
	
	public boolean sendMsgToEmail(String message, String tempId, String email);
	
	public boolean sendFindCNPassword(String phoneNumber, String password);
	
	public SMSMessageDO getMessage(String phoneNumber, String type);
}

package com.vogerp.common.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.vogerp.common.dao.SMSMessageMapper;
import com.vogerp.common.domain.SMSMessageDO;
import com.vogerp.common.service.IShortMsgService;
import com.vogerp.common.utils.MailUtils;

@Service
public class ShortMsgServiceImpl implements IShortMsgService {

	private static final String REGISTRATION_EMAIL_CONTENT = "Dear user, \n\n  Welcome to register Hash official community online, your verification code for this registration is ";

	private static final String REGISTRATION_EMAIL_CONTENT_END = "\n\nYours sincerely.";

	private static final String REGISTRATION_EMAIL_CODE = "Hash User Registration Code";

	private static final Logger logger = LoggerFactory.getLogger(ShortMsgServiceImpl.class);

	//产品名称:云通信短信API产品,开发者无需替换
	private static final String product = "Dysmsapi";
    //产品域名,开发者无需替换
	private static final String domain = "dysmsapi.aliyuncs.com";
    // 此处需要替换成开发者自己的AK(在阿里云访问控制台寻找)
	
	@Value("${aliyun.msg.accessKeyId}")
    private String accessKeyId;
	@Value("${aliyun.msg.accessKeySecret}")
    private String accessKeySecret;
	@Value("${aliyun.msg.signName}")
    private String signName;
	
	@Autowired
	SMSMessageMapper mapper;
    
	public ShortMsgServiceImpl() {
	}
	
	public SMSMessageDO getMessage(String phoneNumber, String type) {
		Map<String, Object> condition = new HashMap<String, Object>();
		condition.put("mobile", phoneNumber);
		condition.put("type", type);
		List<SMSMessageDO> result = mapper.list(condition);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		return null;
	}

	public boolean sendMsgToEmail(String content, String tempId, String email) {
		return false;
	}

	public boolean sendFindCNPassword(String phoneNumber, String code) {
		if (sendMsgToPhone("SMS_142949690", "{'code':'"+code+"'}", phoneNumber)) {
			SMSMessageDO msg = new SMSMessageDO();
			msg.setType(2);
			msg.setMobile(phoneNumber);
			msg.setCode(code);
			msg.setCreateDate(new Date());
			mapper.save(msg);
			return true;
		}
		return false;
	}
	
	public boolean sendFindGlobalPassword(String phoneNumber, String password) {
		if (sendMsgToPhone("SMS_142954569", "{'code':'"+password+"'}", phoneNumber)) {
			SMSMessageDO msg = new SMSMessageDO();
			msg.setType(3);
			msg.setMobile(phoneNumber);
			msg.setCode(password);
			msg.setCreateDate(new Date());
			mapper.save(msg);
			return true;
		}
		return false;
	}

	public boolean sendRegistrySMSCode(String phoneNumber, String code) {
		if (sendMsgToPhone("SMS_143714127", "{'code':'"+code+"'}", phoneNumber)) {
			SMSMessageDO msg = new SMSMessageDO();
			msg.setType(1);
			msg.setMobile(phoneNumber);
			msg.setCode(code);
			msg.setCreateDate(new Date());
			mapper.save(msg);
			return true;
		}
		return false;
	}
	
	public boolean sendRegistryEmailCode(String email, String code) {
		try {
			MailUtils.sendSSLEmil(email, REGISTRATION_EMAIL_CODE, REGISTRATION_EMAIL_CONTENT + code + REGISTRATION_EMAIL_CONTENT_END);
			SMSMessageDO msg = new SMSMessageDO();
			msg.setType(1);
			msg.setMobile(email);
			msg.setCode(code);
			msg.setCreateDate(new Date());
			mapper.save(msg);
			return true;
		} catch (Exception e) {
			logger.warn("Failed to send email to : " + email + ", message: " + e.getMessage(), e);
			return false;
		}
	}

	public boolean sendMsgToPhone(String tempId, String jsonParam, String phoneNumber) {
		try {
			//logger.info("accessKeyId: " + accessKeyId + ", accessKeySecret: " + accessKeySecret + ", signName: " + signName);
			//初始化acsClient,暂不支持region化
	        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId, accessKeySecret);
	        DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
	        IAcsClient acsClient = new DefaultAcsClient(profile);

	        //组装请求对象-具体描述见控制台-文档部分内容
	        SendSmsRequest request = new SendSmsRequest();
	        //必填:待发送手机号
	        request.setPhoneNumbers(phoneNumber);
	        //必填:短信签名-可在短信控制台中找到
	        request.setSignName(signName);
	        //必填:短信模板-可在短信控制台中找到
	        request.setTemplateCode(tempId);
	        //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为
	        request.setTemplateParam(jsonParam);
	        //request.setMethod(MethodType.POST);
	        //选填-上行短信扩展码(无特殊需求用户请忽略此字段)
	        //request.setSmsUpExtendCode("90997");
	        //可选:outId为提供给业务方扩展字段,最终在短信回执消息中将此值带回给调用者
	        //request.setOutId("yourOutId");

	        //hint 此处可能会抛出异常，注意catch
	        SendSmsResponse response = acsClient.getAcsResponse(request);
	        logger.info("SendSmsResponse Code=" + response.getCode() + ", Message=" + response.getMessage() +", RequestId="
	        		+ response.getRequestId() + ", BizId=" + response.getBizId());
	        if(response.getCode() != null && response.getCode().equals("OK")) {
	        		return true;
	        }
		} catch (Exception e) {
			logger.warn(e.getMessage(), e);
		}
		return false;
	}
	
}

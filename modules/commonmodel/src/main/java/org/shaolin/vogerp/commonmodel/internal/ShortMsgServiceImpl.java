package org.shaolin.vogerp.commonmodel.internal;

import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.runtime.spi.IShortMsgService;

import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;

public class ShortMsgServiceImpl implements IShortMsgService, IServiceProvider {

	private final String url, appkey, secret;
	
	public ShortMsgServiceImpl() {
		url = Registry.getInstance().getValue("/System/Vogerp/sms/url", "http://gw.api.taobao.com/router/rest");
		appkey = Registry.getInstance().getValue("/System/Vogerp/sms/appkey");
		secret = Registry.getInstance().getValue("/System/Vogerp/sms/appsecret");
	}
	
	@Override
	public boolean sendMsgToEmail(String content, String tempId, String email) {
		return false;
	}

	@Override
	public boolean sendMsgToPhone(String content, String tempId, String phoneNumber) {
		TaobaoClient client = new DefaultTaobaoClient(url, appkey, secret);
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend("");
		req.setSmsType("normal");
		// TODO:
		req.setSmsFreeSignName("");
		req.setSmsParamString(content);
		req.setRecNum(phoneNumber);
		req.setSmsTemplateCode(tempId);
		try {
			AlibabaAliqinFcSmsNumSendResponse rsp = client.execute(req);
			System.out.println(rsp.getBody());
			return true;
		} catch (ApiException e) {
		}
		return false;
	}

	@Override
	public Class getServiceInterface() {
		return IShortMsgService.class;
	}

}

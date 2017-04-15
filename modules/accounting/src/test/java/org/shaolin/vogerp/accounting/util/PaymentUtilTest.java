package org.shaolin.vogerp.accounting.util;

import java.util.Date;
import java.util.HashMap;

import org.junit.Test;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.internal.AppServiceManagerImpl;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.vogerp.accounting.PaymentException;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.internal.WepayHandler;

import com.alipay.api.AlipayApiException;
import com.alipay.api.internal.util.AlipaySignature;

public class PaymentUtilTest {

	@Test
	public void test() {
		System.out.println(PaymentUtil.genPayOrderSerialNumber());
		System.out.println(PaymentUtil.genPayOrderSerialNumber());
		System.out.println(PaymentUtil.genPayOrderSerialNumber());
		System.out.println(PaymentUtil.genPayOrderSerialNumber());
		System.out.println(PaymentUtil.genPayOrderSerialNumber());
		System.out.println(PaymentUtil.genPayOrderSerialNumber());
	}

	@Test
	public void test1() throws PaymentException {
		AppContext.register(new AppServiceManagerImpl("test", PaymentUtilTest.class.getClassLoader()));
		Registry.getInstance().initRegistry();
		UserContext userContext = new UserContext();
		userContext.setUserRequestIP("211.161.242.69");
		UserContext.register(null, userContext, null, null, true);
		
		PayOrderImpl payOrder = new PayOrderImpl();
		payOrder.setCreateDate(new Date());
		payOrder.setOrgId(3450);
		payOrder.setUserId(3462);
		payOrder.setEndUserId(3);
		payOrder.setOrderSerialNumber("GOSN-2017-02-22-1000335-1971");
		payOrder.setSerialNumber("PayO2017031317008598372");
		payOrder.setDescription("aaaa");
		payOrder.setAmount(2000);
		payOrder.setPayBusinessType(PayBusinessType.GOLDENPORDERBUSI);
		payOrder.setStatus(PayOrderStatusType.NOTPAYED);
		payOrder.setCustomerAPaymentMethod(SettlementMethodType.WEIXI);
		
		WepayHandler wepay = new WepayHandler("", "", "");
		wepay.prepay(payOrder);
	}
	
	@Test
	public void test2 () {
		HashMap<String, String> param = new HashMap<String, String>(); 
		param.put("gmt_create", "2017-03-25 14:42:19");
		param.put("charset", "UTF-8");
		param.put("seller_email", "373854572@qq.com");
		param.put("subject", "[\u6DF1\u5733\u5E02\u9F99\u5C97\u533A\u91D1\u94C2\u8BFA\u4E94\u91D1\u5236\u54C1\u5382...");
		param.put("sign", "HNbGPbMz5++xwcZbKXR4eocfB2lBmCoHhQKVuZRDQBTDQ/iDkjQ6ieZSFndPcMT7/HeORamhy7cb1tFRpHSmcoCLxW1d3AKq4yI5l3h7VakHhjJAQbYwHBxc3oSgHMRVFYFTmh6DRXEDHYTheHs9OUIUyylzUCWjf8i+d5oJXCSocS5oqF51iWc9lY9cvEooIKk1z3i1eYeZMTbW2DBZXCQPly3+PHAD86D7takqbL9Ja+fpXjjB0wnAeksEQeQXqCZ+nEWeEEartSU2UfHVJ1FjJ8SE8wIhFHlGqJJIOnFTzhwP886OHu59GAIZAksiaIb8cgHufzu9EbVHy99e/w==");
		param.put("buyer_id", "2088002729099754");
		param.put("body", "[\u6DF1\u5733\u5E02\u9F99\u5C97\u533A\u91D1\u94C2\u8BFA\u4E94\u91D1\u5236\u54C1\u5382]\u673A\u52A0\u5DE5\u5B9A\u505A");
		param.put("invoice_amount", "2.00");
		param.put("notify_id", "5f47bd0274befc308b3d7def156e136lse");
		param.put("fund_bill_list", "[{\"amount\":\"2.00\",\"fundChannel\":\"ALIPAYACCOUNT\"}]");
		param.put("notify_type", "trade_status_sync");
		param.put("trade_status", "TRADE_SUCCESS");
		param.put("receipt_amount", "2.00");
		param.put("sign_type", "RSA2");
		param.put("buyer_pay_amount", "2.00");
		param.put("app_id", "2016040601272495");
		param.put("seller_id", "2088221201883663");
		param.put("notify_time", "2017-03-25 14:42:20");
		param.put("gmt_payment", "2017-03-25 14:42:20");
		param.put("version", "1.0");
		param.put("out_trade_no", "OTN201703251400531730");
		param.put("total_amount", "2.00");
		param.put("trade_no", "2017032521001004750281383641");
		param.put("auth_app_id", "2016040601272495");
		param.put("buyer_logon_id", "sha***@live.com");
		param.put("point_amount", "0.00");
		String ALIPAY_PUBLIC_KEY = "";
		
		try {
			System.out.println(AlipaySignature.rsaCheckV1(param, ALIPAY_PUBLIC_KEY, "UTF-8", "RSA2"));
		} catch (AlipayApiException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}

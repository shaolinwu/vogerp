package org.shaolin.vogerp.accounting.util;

import java.util.Date;

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
		userContext.setUserRequestIP("120.25.146.49");
		UserContext.register(null, userContext, null, null, true);
		
		PayOrderImpl payOrder = new PayOrderImpl();
		payOrder.setCreateDate(new Date());
		payOrder.setOrgId(3450);
		payOrder.setUserId(3462);
		payOrder.setEndUserId(3);
		payOrder.setOrderSerialNumber("GOSN-2017-02-22-1000335-1971");
		payOrder.setSerialNumber("PayO2017031317008598572");
		payOrder.setDescription("[吴更申]四组圆盘自动磨砂机LC-ZP904A 颜色: 橙,单位: 张");
		payOrder.setAmount(2000.0);
		payOrder.setPayBusinessType(PayBusinessType.GOLDENPORDERBUSI);
		payOrder.setStatus(PayOrderStatusType.NOTPAYED);
		payOrder.setCustomerAPaymentMethod(SettlementMethodType.WEIXI);
		
		WepayHandler wepay = new WepayHandler("", "", "");
		wepay.prepay(payOrder);
	}
	
}

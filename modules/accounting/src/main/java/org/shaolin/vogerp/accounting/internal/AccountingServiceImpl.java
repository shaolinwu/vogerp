package org.shaolin.vogerp.accounting.internal;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.beecloud.BCPay;
import cn.beecloud.BeeCloud;
import cn.beecloud.bean.BCRefund;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.uimaster.page.ajax.json.JSONException;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.be.AccountVoucherImpl;
import org.shaolin.vogerp.accounting.be.CustomerAccountImpl;
import org.shaolin.vogerp.accounting.be.DoubleEntryImpl;
import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.ce.VoucherType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.slf4j.LoggerFactory;

/**
 * 
 * @author wushaol
 *
 */
public class AccountingServiceImpl implements ILifeCycleProvider, IServiceProvider, IAccountingService, UserActionListener {

	@Override
	public void loggedIn(IPersonalAccount account, IPersonalInfo userInfo) {
		CustomerAccountImpl scObject = new CustomerAccountImpl();
		scObject.setOrgId(userInfo.getOrgId());
		List<ICustomerAccount> result = AccountingModel.INSTANCE.searchAccount(scObject, null, 0, 1);
		if (result.size() == 0) {
//			throw new IllegalStateException("No Account ");
			return;
		}
		UserContext.addUserData("CustAccountId", result.get(0).getAccountId());
	}

	@Override
	public void registered(IPersonalInfo userInfo) {
		CustomerAccountImpl newAccount = new CustomerAccountImpl();
		newAccount.setAccountId(genAccountNumber());
		newAccount.setOrgId(userInfo.getOrgId());
		
		AccountingModel.INSTANCE.create(newAccount);
	}	
	
	public static String genAccountNumber() {
		DateParser parse = new DateParser(new Date());
		return "ACCN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}
	
	public static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "ACCV-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}
	
	public static String genPayOrderSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "PayO-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}
	
	public IPayOrder createPayOrder(PayBusinessType type, long origOrderId, double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setPayBusinessType(type);
//		order.setCustomerAPayAccount(customerAPayAccount);
//		order.setCustomerAPaymentMethod(customerAPayAccount);
		order.setOrgId(UserContext.getUserContext().getOrgId());
		order.setSerialNumber(genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.CREATED);
		order.setOrderId(origOrderId);
		order.setAmount(amount);
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	/**
	 * for all receiving money orders.
	 */
	public IAccountVoucher createIncomingVoucher(String incomingCOAType, double amount, String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(genSerialNumber());
		item.setVoucherType(VoucherType.RECEIVER);
		item.setComment(comment);
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setCreditAmount(amount);
		entry.setGeneralLedger(ClassifyOfAccounts.PROFIT);
		entry.setSubLedger(incomingCOAType);
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}
	
	/**
	 * for all pay orders
	 */
	public IAccountVoucher createOutgoingVoucher(String outgoingCOAType, double amount, String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(genSerialNumber());
		item.setVoucherType(VoucherType.PAYMENT);
		item.setComment(comment);;
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setDebitAmount(amount);
		entry.setGeneralLedger(ClassifyOfAccounts.COST);
		entry.setSubLedger(outgoingCOAType);
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}
	
	/**
	 * before pay to system.
	 * 
	 */
	public String prepay(IPayOrder order) {
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			Map<String, String> attributes = new HashMap<String, String>(Registry.getInstance().getNodeItems("/System/payment/beecloud/buttonPay"));
			attributes.put("out_trade_no", order.getSerialNumber());
			String title = "(" + order.getPayBusinessType().getDescription() + ")" + order.getDescription();
			attributes.put("title", title);
			attributes.put("amount", ((int)(order.getAmount() * 100)) + "");//it's fen unit.
			String sign = PaymentUtil.beeCloudSign(attributes.get("app_id"),
					attributes.get("title"), 
					attributes.get("amount"), 
					order.getSerialNumber(), 
					attributes.get("app_secret"));
			attributes.put("sign", sign);
			JSONObject json = new JSONObject(attributes); 
			return json.toString();
		}
		return "";
	}
	
	public String queryforPayStatus(IPayOrder order) {
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			Map<String, String> attributes = new HashMap<String, String>(Registry.getInstance().getNodeItems("/System/payment/beecloud/queryBills"));
			attributes.put("out_trade_no", order.getSerialNumber());
			attributes.put("amount", ((int)(order.getAmount() * 100)) + "");//it's fen unit.
			String sign = PaymentUtil.sign(attributes.get("app_id"), 
					attributes.get("title"), 
					attributes.get("amount"), 
					order.getSerialNumber(), 
					attributes.get("app_secret"));
			attributes.put("sign", sign);
			
			JSONObject optional = new JSONObject();
			try {
				optional.put("out_trade_no", order.getSerialNumber());
			} catch (JSONException e) {
				e.printStackTrace();
			}
			attributes.put("optional", optional.toString());
			JSONObject json = new JSONObject(attributes); 
			return json.toString();
		}
		return "";
	}
	
	/**
	 * Ensure the payment to the end customer.
	 * 
	 * @param order
	 */
	public void ensurePayment(IPayOrder order) {
		
	}

	/**
	 * refund
	 *
	 * @param order
	 * @return
     */
	public String refund(IPayOrder order) {
		registeBeeCloudApp();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String billNo = order.getSerialNumber();
		String refundNo = sdf.format(new Date()) + "222" + System.currentTimeMillis();

		BCRefund bcRefund = new BCRefund(billNo, refundNo, Double.valueOf(order.getAmount() * 100).intValue());
		try {
			BCRefund refund = BCPay.startBCRefund(bcRefund);
			if (refund.getAliRefundUrl() != null) {//直接退款（支付宝）
				return refund.getAliRefundUrl();
			} else {
				//TODO refund result
				if (refund.isNeedApproval() != null && refund.isNeedApproval()) {//预退款
					System.out.println("预退款成功！");
					System.out.println(refund.getObjectId());
				} else {//直接退款
					System.out.println("退款成功！易宝、百度、快钱渠道还需要定期查询退款结果！");
					System.out.println(refund.getObjectId());
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			//TODO deal exception
		}
		return null;
	}
	
	public void cancelPayment(IPayOrder order) {

	}

	/**
	 * BeeCloud live register
	 */
	private void registeBeeCloudApp() {
		Map<String, String> attributes = new HashMap<String, String>(Registry.getInstance().getNodeItems("/System/payment/beecloud/common"));
		String appId = attributes.get("app_id");
		String appSecret = attributes.get("app_secret");
		String masterSecret = attributes.get("master_secret");
		//live模式
		BeeCloud.registerApp(appId, null, appSecret, masterSecret);
	}

	@Override
	public Class getServiceInterface() {
		return IAccountingService.class;
	}

	@Override
	public void startService() {
		String isDisabled = Registry.getInstance().getValue("/System/modules/disable/accounting");
		if (isDisabled != null && "true".equals(isDisabled)) {
			LoggerFactory.getLogger(AccountingServiceImpl.class).info("Disable the accounting module by setting.");
			return;
		}
		
		AppContext.get().register(this);
		IUserService userService = (IUserService) AppContext.get().getService(
				IUserService.class);
		userService.addListener(this);
	}

	@Override
	public boolean readyToStop() {
		return true;
	}

	@Override
	public void stopService() {
		
	}

	@Override
	public void reload() {
		
	}

	@Override
	public int getRunLevel() {
		return 10;
	}

}

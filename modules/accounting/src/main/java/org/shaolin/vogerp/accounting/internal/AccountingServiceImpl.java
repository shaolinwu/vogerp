package org.shaolin.vogerp.accounting.internal;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.uimaster.page.AjaxFactory;
import org.shaolin.uimaster.page.ajax.json.JSONException;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.IAccountingService;
import org.shaolin.vogerp.accounting.PaymentException;
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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cn.beecloud.BCEumeration;
import cn.beecloud.BCPay;
import cn.beecloud.BeeCloud;
import cn.beecloud.bean.BCRefund;
import cn.beecloud.bean.TransferParameter;

/**
 * 
 * @author wushaol
 *
 */
public class AccountingServiceImpl implements ILifeCycleProvider, IServiceProvider, IAccountingService, UserActionListener {

	private static final Logger logger = LoggerFactory.getLogger(AccountingServiceImpl.class);
	
	private boolean registered = false;

	private Map<String, String> paymentKeyInfo;
	
	public AccountingServiceImpl() {
		this.registeBeeCloudApp();
	}
	
	/**
	 * BeeCloud live register
	 */
	private void registeBeeCloudApp() {
		if (registered) {
			return;
		}
		
		paymentKeyInfo = new HashMap<String, String>(
				Registry.getInstance().getNodeItems("/System/payment/beecloud/common"));
		String appId = paymentKeyInfo.get("app_id");
		String appSecret = paymentKeyInfo.get("app_secret");
		String masterSecret = paymentKeyInfo.get("master_secret");
		//live model
		BeeCloud.registerApp(appId, null, appSecret, masterSecret);
		registered = true;
	}
	
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
		newAccount.setOrgId(userInfo.getOrgId());
		
		AccountingModel.INSTANCE.create(newAccount);
	} 
	
	public IPayOrder createSelfPayOrder(final PayBusinessType type, long endUserId, String orderSerialNumber, 
			final double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setPayBusinessType(type);
		order.setOrgId(UserContext.getUserContext().getOrgId());
		order.setUserId(UserContext.getUserContext().getUserId());
		order.setEndUserId(endUserId);
		order.setSerialNumber(PaymentUtil.genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.NOTPAYED);
		order.setOrderSerialNumber(orderSerialNumber);
		order.setAmount(Double.valueOf(amount * 100).intValue() / 100); //round up to fen as required.
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	public IPayOrder createPayOrder(final PayBusinessType type, final long orgId, final long userId, 
			final long endUserId, final String orderSerialNumber, final double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setPayBusinessType(type);
		order.setOrgId(orgId);
		order.setUserId(userId);
		order.setEndUserId(endUserId);
		order.setSerialNumber(PaymentUtil.genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.NOTPAYED);
		order.setOrderSerialNumber(orderSerialNumber);
		order.setAmount(Double.valueOf(amount * 100).intValue() / 100); //round up fen.
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	/**
	 * for all receiving money orders.
	 */
	public IAccountVoucher createIncomingVoucher(final String incomingCOAType, final double amount, final String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(PaymentUtil.genSerialNumber());
		item.setVoucherType(VoucherType.RECEIVER);
		item.setComment(comment);
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setCreditAmount(Double.valueOf(amount * 100).intValue() / 100); //round up fen.
		entry.setGeneralLedger(ClassifyOfAccounts.PROFIT);
		entry.setSubLedger(incomingCOAType);
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}
	
	/**
	 * for all pay orders
	 */
	public IAccountVoucher createOutgoingVoucher(final String outgoingCOAType, final double amount, final String comment) {
		AccountVoucherImpl item = new AccountVoucherImpl();
		item.setSeqNumber(PaymentUtil.genSerialNumber());
		item.setVoucherType(VoucherType.PAYMENT);
		item.setComment(comment);;
		item.setOrgId(UserContext.getUserContext().getOrgId());
		item.setEntered(UserContext.getUserContext().getUserId());
		item.setSettlementMethod(SettlementMethodType.ALIPAY);
		DoubleEntryImpl entry = new DoubleEntryImpl();
		entry.setDebitAmount(Double.valueOf(amount * 100).intValue() / 100); //round up fen.
		entry.setGeneralLedger(ClassifyOfAccounts.COST);
		entry.setSubLedger(outgoingCOAType);
		item.getDoubleEnties().add(entry);
		AccountingModel.INSTANCE.create(item);
		return item;
	}
	
	public PayOrderStatusType queryForPayOrderState(String orderSeriaNumber) {
		return null;
	}
	
	public String queryForPayStatus(final IPayOrder order) throws PaymentException {
		Map<String, String> attributes = new HashMap<String, String>(
				Registry.getInstance().getNodeItems("/System/payment/beecloud/queryBills"));
		attributes.putAll(paymentKeyInfo);
		attributes.put("amount", Double.valueOf(order.getAmount() * 100).intValue() + "");//it's fen unit.
		attributes.put("out_trade_no", order.getSerialNumber());
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
		try {
			json.put("amount", Double.valueOf(order.getAmount() * 100).intValue() + "");
		} catch (JSONException e) {
		}
		
		return json.toString();
	}
	
	public IPayOrder queryForIPayOrder(final String orderSerialNumber) {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSerialNumber);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		return null;
	}

	/**
	 * This is an async operation which generates the sign string then 
	 * invoking BC.click(" + json + ")" to BeeCloud server.
	 * After finishing this operation, BC will notify us from Web hook 
	 * http service once it has been done.
	 * 
	 * {@link BCWebHookHandler}
	 */
	public String prepay(final IPayOrder order) throws PaymentException {
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			try {
				Map<String, String> attributes = new HashMap<String, String>(
						Registry.getInstance().getNodeItems("/System/payment/beecloud/buttonPay"));
				attributes.putAll(paymentKeyInfo);
				attributes.put("out_trade_no", order.getSerialNumber());
				String title = "(" + order.getPayBusinessType().getDescription() + ")" + order.getDescription();
				attributes.put("title", title);
				attributes.put("amount", ((int)(order.getAmount() * 100)) + "");//it's fen unit.
				String sign = PaymentUtil.beeCloudSign(attributes.get("app_id"),
						attributes.get("title"), 
						attributes.get("amount"), 
						attributes.get("out_trade_no"), 
						attributes.get("app_secret"));
				attributes.put("sign", sign);
				JSONObject json = new JSONObject(attributes); 
				return json.toString();
			} catch (Exception e) {
				throw new PaymentException("Pay error: " + e.getMessage(), e);
			}
		}
		throw new PaymentException("Order is not in NOT Payed state!");
	}
	
	/**
	 * Ensure the payment to the end customer.
	 * 
	 * @param order
	 */
	public String ensurePayment(final IPayOrder order) throws PaymentException {
		return transfer(order);
	}

	/**
	 * refund
	 *
	 * @param order
	 * @return
     */
	public String refund(final IPayOrder order) throws PaymentException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String billNo = order.getSerialNumber();
		String refundNo = sdf.format(new Date()) + "222" + System.currentTimeMillis();

		BCRefund bcRefund = new BCRefund(billNo, refundNo, Double.valueOf(order.getAmount() * 100).intValue());
		try {
			BCRefund refund = BCPay.startBCRefund(bcRefund);
			if (refund.getAliRefundUrl() != null) {//Alipay
				return refund.getAliRefundUrl();
			} else {
				//TODO refund result
				if (refund.isNeedApproval() != null && refund.isNeedApproval()) {//Pre refund
					System.out.println("Pre refund suuccessful!");
					System.out.println(refund.getObjectId());
				} else {//refund directly
					System.out.println("refund directly");
					System.out.println(refund.getObjectId());
				}
				return "";
			}
		} catch (Exception e) {
			throw new PaymentException("Refund error: " + e.getMessage(), e);
		}
	}

	public String transfer(final IPayOrder order) throws PaymentException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		TransferParameter param = new TransferParameter();
		param.setChannel(BCEumeration.TRANSFER_CHANNEL.ALI_TRANSFER);
		param.setChannelUserId("");
		param.setChannelUserName("");
		param.setTotalFee(1);
		param.setDescription("");
		param.setAccountName("");
		param.setTransferNo("transfer" + sdf.format(new Date()));
		try {
			String url = BCPay.startTransfer(param);
//			response.sendRedirect(url);
			return url;
		} catch (Exception e) {
			throw new PaymentException("Transfer error: " + e.getMessage(), e);
		}
	}
	
	public void cancelPayment(final IPayOrder order) throws PaymentException {
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			order.setStatus(PayOrderStatusType.CANCELLED);
			AccountingModel.INSTANCE.update(order);
		}
	}
	
	static void updatePayState(String transactionId, TransactionType transType, PayOrderImpl payOrder) {
		if (transType == TransactionType.PAY && payOrder.getStatus() == PayOrderStatusType.NOTPAYED) {
			payOrder.setStatus(PayOrderStatusType.PAYED);
			payOrder.setThirdGenSerialNumber(transactionId);
		} else if (transType == TransactionType.REFUND && payOrder.getStatus() == PayOrderStatusType.PAYED) {
			payOrder.setStatus(PayOrderStatusType.REFUND);
			payOrder.setThirdGenSerialNumber2(transactionId);
		} else if (transType == TransactionType.TRANSFER && payOrder.getStatus() == PayOrderStatusType.PAYED) {
			payOrder.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
			payOrder.setThirdGenSerialNumber2(transactionId);
		} else {
			logger.warn("Unsupported state of payment order: " + payOrder.getId() 
				+ "(" + payOrder.getStatus().getDisplayName() 
				+ "), transactionId: " + transactionId
				+ ",transType: " + transType);
		}
	}
	
	/**
	 * @param payOrder
	 * @param formId
	 * @return
	 */
	public static String getPayOperations(IPayOrder payOrder, String formId) {
		StringBuffer sb = new StringBuffer();
		if (payOrder.getStatus() == PayOrderStatusType.NOTPAYED) {
            sb.append("<button type='pay' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
            sb.append(formId).append("pay(this, event);'>\u652F\u4ED8</button>");
//            sb.append("<button type='cancel' class='uimaster_button ui-btn-inline onclick='javascript:defaultname.");
//            sb.append(formId).append("cancelPayment(this, event);'>\u53D6\u6D88</button>");
		} else if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
			sb.append("<button type='agreedpaytoend' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
            sb.append(formId).append("ensurePayment(this, event);'>\u786E\u8BA4\u4ED8\u6B3E</button>");
			sb.append("<button type='refund' class='uimaster_button ui-btn-inline' onclick='javascript:defaultname.");
            sb.append(formId).append("refund(this, event);'>\u7533\u8BF7\u9000\u6B3E</button>");
		} else if (payOrder.getStatus() == PayOrderStatusType.REFUND) {
			//no actions
		} else if (payOrder.getStatus() == PayOrderStatusType.AGREEDPAYTOEND) {
			//no actions
		} else if (payOrder.getStatus() == PayOrderStatusType.CANCELLED) {
			//no actions
		} 
		return sb.toString();
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
		
		AjaxFactory.register("BCWebHook", new BCWebHookHandler());
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

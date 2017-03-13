package org.shaolin.vogerp.accounting.internal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.uimaster.page.AjaxFactory;
import org.shaolin.uimaster.page.ajax.json.JSONException;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.accounting.PayOrderStatusListener;
import org.shaolin.vogerp.accounting.PaymentException;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.be.PayOrderRequestImpl;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderRequestType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.RequestStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * @author wushaol
 *
 */
public class PaymentServiceImpl implements ILifeCycleProvider, IServiceProvider, IPaymentService {

	private static final Logger logger = LoggerFactory.getLogger(PaymentServiceImpl.class);
	
	private List<PayOrderStatusListener> listeners = new ArrayList<PayOrderStatusListener>();
	
	public PaymentServiceImpl() {
	}
	
	public static Logger getLogger() {
		return logger;
	}
	
	public void addListener(PayOrderStatusListener listener) {
		if (!listeners.contains(listener)) {
			listeners.add(listener);
		}
	}
	
	public void notifyPaySuccess(IPayOrder payOrder) {
		for (PayOrderStatusListener listener: listeners) {
			listener.notifySuccess(payOrder);
		}
	}
	
	public void notifyPayFail(IPayOrder payOrder) {
		for (PayOrderStatusListener listener: listeners) {
			listener.notifyFail(payOrder);
		}
	}
	
	public IPayOrder createSelfPayOrder(final PayBusinessType type, long endUserId, String orderSerialNumber, 
			final double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSerialNumber);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		order.setPayBusinessType(type);
		order.setOrgId(UserContext.getUserContext().getOrgId());
		order.setUserId(UserContext.getUserContext().getUserId());
		order.setEndUserId(endUserId);
		order.setSerialNumber(PaymentUtil.genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.NOTPAYED);
		order.setOrderSerialNumber(orderSerialNumber);
		order.setAmount(amount * 100); //round up to fen as required.
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	public IPayOrder createPayOrder(final PayBusinessType type, final long orgId, final long userId, 
			final long endUserId, final String orderSerialNumber, final double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSerialNumber);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		order.setPayBusinessType(type);
		order.setOrgId(orgId);
		order.setUserId(userId);
		order.setEndUserId(endUserId);
		order.setSerialNumber(PaymentUtil.genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.NOTPAYED);
		order.setOrderSerialNumber(orderSerialNumber);
		order.setAmount(amount * 100); //round up fen.
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	public IPayOrder createPayAdminOrder(final PayBusinessType type, final long endUserId, 
			final String orderSerialNumber, final double amount) {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSerialNumber);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		
		order.setPayBusinessType(type);
		order.setOrgId(1); // fixed id here.
		order.setUserId(1);
		order.setEndUserId(endUserId);
		order.setSerialNumber(PaymentUtil.genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.NOTPAYED);
		order.setOrderSerialNumber(orderSerialNumber);
		order.setAmount(amount * 100); //round up fen.
		
		AccountingModel.INSTANCE.create(order);
		return order;
	}
	
	public PayOrderStatusType queryForPayOrderState(String orderSeriaNumber) {
		PayOrderImpl order = new PayOrderImpl();
		order.setSerialNumber(orderSeriaNumber);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0).getStatus();
		}
		return null;
	}
	
	public String queryForPayStatus(final IPayOrder order) throws PaymentException {
		return "";
	}
	
	public IPayOrder queryForPayOrder(final String orderSerialNumber) {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSerialNumber);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		return null;
	}
	
	public void requestForPayOrder(final IPayOrder order, final RequestStatusType state, final PayOrderRequestType type) {
		PayOrderRequestImpl request = new PayOrderRequestImpl();
		request.setPayOrderId(order.getId());
		request.setState(state);
		request.setType(type);
		request.setCreateDate(new Date());
		AccountingModel.INSTANCE.create(request);
		
		if (PayOrderRequestType.WITHDRAW == type) {
			order.setStatus(PayOrderStatusType.WITHDRAWING);
		} else if (PayOrderRequestType.REFUND == type) {
			order.setStatus(PayOrderStatusType.REFUNDING);
		}
		AccountingModel.INSTANCE.create(order);
		
		//notify admin
		ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
		NotificationImpl message = new NotificationImpl();
		message.setSubject("\u7533\u8BF7: " + type.getDisplayName());
		message.setDescription(order.getSerialNumber());
		message.setCreateDate(new Date());
		coorService.addNotificationToAdmin(message, false);
	}

	/**
	 * Make a pre-payment order to our system account.
	 * 
	 * This is an async operation which generates the sign string then 
	 * invoking BC.click(" + json + ")" to BeeCloud server.
	 * After finishing this operation, BC will notify us from Web hook 
	 * http service once it has been done.
	 * 
	 * {@link BCpayHandler}
	 */
	public String prepay(final IPayOrder order) throws PaymentException {
		if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
			return alipayHandler.prepay(order);
		} else if (SettlementMethodType.WEIXI == order.getCustomerAPaymentMethod()) {
			return wepayHandler.prepay(order);
		} else if (SettlementMethodType.BEECLOUD == order.getCustomerAPaymentMethod()) {
			return behandler.prepay(order);
		} else {
			throw new PaymentException("Unsupported payment method: " + order.getCustomerAPaymentMethod());
		}
	}
	
	/**
	 * Transfer the money to End customer from our account. 
	 * 
	 * Support WeiXi and Alipay.
	 * 
	 * This method only supposed done by Admin user.
	 * 
	 * @param order
	 * @param paymethod
	 * @param thirdUserId
	 * @param thirdUserName
	 * @return
	 * @throws PaymentException
	 */
	public String transfer(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException {
		//TODO:
		throw new PaymentException("Unsupported payment method: " + order.getCustomerAPaymentMethod());
	}
	
	/**
	 * refund
	 *
	 * This method only allowed by Admin user.
	 * @param order
	 * @return
	 */
	public String refund(final IPayOrder order) throws PaymentException {
		if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
			return alipayHandler.refund(order);
		} else if (SettlementMethodType.WEIXI == order.getCustomerAPaymentMethod()) {
			return wepayHandler.refund(order);
		} else if (SettlementMethodType.BEECLOUD == order.getCustomerAPaymentMethod()) {
			return behandler.refund(order);
		} else {
			throw new PaymentException("Unsupported payment method: " + order.getCustomerAPaymentMethod());
		}
	}

	public void cancelPayment(final IPayOrder order) throws PaymentException {
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			order.setStatus(PayOrderStatusType.CANCELLED);
			AccountingModel.INSTANCE.update(order);
		}
	}
	
	public void updatePayState(final JSONObject jsonObj, final IPayOrder payOrder) throws PaymentException {
		TransactionType transType;
		String transactionId;
		try {
			transType = TransactionType.valueOf(jsonObj.getString("transaction_type").toUpperCase());
			transactionId = jsonObj.getString("transaction_id");
		} catch (JSONException e) {
			throw new PaymentException("Error to get transaction_type! payment order: " + payOrder.getSerialNumber());
		}
		if (transType == TransactionType.PAY && payOrder.getStatus() == PayOrderStatusType.NOTPAYED) {
			payOrder.setStatus(PayOrderStatusType.PAYED);
			payOrder.setThirdGenSerialNumber(transactionId);
			AccountingModel.INSTANCE.update(payOrder, true);
		} else if (transType == TransactionType.REFUND && payOrder.getStatus() == PayOrderStatusType.PAYED) {
			payOrder.setStatus(PayOrderStatusType.REFUND);
			payOrder.setThirdGenSerialNumber2(transactionId);
			AccountingModel.INSTANCE.update(payOrder, true);
		} else if (transType == TransactionType.TRANSFER && payOrder.getStatus() == PayOrderStatusType.PAYED) {
			payOrder.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
			payOrder.setThirdGenSerialNumber2(transactionId);
			AccountingModel.INSTANCE.update(payOrder, true);
		} else {
			logger.warn("Unsupported state of payment order: " + payOrder.getSerialNumber() 
				+ "(" + payOrder.getStatus().getDisplayName() 
				+ "), transactionId: " + transactionId
				+ ",transType: " + transType);
		}
	}
	
	@Override
	public Class getServiceInterface() {
		return IPaymentService.class;
	}

	private BCpayHandler behandler;
	private AlipayHandler alipayHandler;
	private WepayHandler wepayHandler;
	
	@Override
	public void startService() {
		String isDisabled = Registry.getInstance().getValue("/System/modules/disable/accounting");
		if (isDisabled != null && "true".equals(isDisabled)) {
			LoggerFactory.getLogger(PaymentServiceImpl.class).info("Disable the accounting module by setting.");
			return;
		}
		
		AppContext.get().register(this);
		AppContext.get().register(new AccountingServiceImpl());
		
		this.behandler = new BCpayHandler();
		this.alipayHandler = new AlipayHandler();
		this.wepayHandler = new WepayHandler();
		
		AjaxFactory.register("BCWebHook", behandler);
		AjaxFactory.register("AlipayWebHook", alipayHandler);
		AjaxFactory.register("WepayWebHook", wepayHandler);
		
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
		return 8;
	}

}

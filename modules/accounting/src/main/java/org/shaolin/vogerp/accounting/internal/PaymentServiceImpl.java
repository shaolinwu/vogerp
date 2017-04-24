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
	
	private BCpayHandler behandler;
	private AlipayHandler alipayHandler;
	private WepayHandler wepayHandler;
	
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
		order.setEnabled(true);
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
		order.setEnabled(true);
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
		order.setEnabled(true);
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
		order.setEnabled(true);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0).getStatus();
		}
		return null;
	}
	
	public PayOrderStatusType queryForPayStatus(final String busiOrderSerialNumber) throws PaymentException {
		PayOrderImpl order0 = new PayOrderImpl();
		order0.setOrderSerialNumber(busiOrderSerialNumber);
		order0.setEnabled(true);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order0, null, 0, 1);
		if (result == null || result.size() == 0) {
			return PayOrderStatusType.NOTPAYED;
		}
		IPayOrder order = result.get(0);
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			String state = "";
			if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
				state = alipayHandler.query(order);
			} else if (SettlementMethodType.WEIXI == order.getCustomerAPaymentMethod()) {
				state = wepayHandler.query(order);
			} else if (SettlementMethodType.NOT_SPECIFIED.getIntValue() == order.getCustomerAPaymentMethod().getIntValue()) {
				return PayOrderStatusType.NOTPAYED;
			} else {
				throw new PaymentException("Unsupported query method: " + order.getCustomerAPaymentMethod());
			}
			
			if (WepayHandler.SUCCESS.equalsIgnoreCase(state)) {
				PayOrderImpl a = AccountingModel.INSTANCE.get(order.getId(), PayOrderImpl.class);
				return a.getStatus();
			}
		}
		return order.getStatus();
	}
	
	public PayOrderStatusType queryForPayStatus(final IPayOrder oldorder) throws PaymentException {
		if (oldorder.getCustomerAPaymentMethod().getIntValue() == SettlementMethodType.NOT_SPECIFIED.getIntValue()) {
			return PayOrderStatusType.NOTPAYED;
		}
		PayOrderImpl order = AccountingModel.INSTANCE.get(oldorder.getId(), PayOrderImpl.class);
		if (order.getStatus() == PayOrderStatusType.NOTPAYED) {
			String state = "";
			if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
				state = alipayHandler.query(order);
			} else if (SettlementMethodType.WEIXI == order.getCustomerAPaymentMethod()) {
				state = wepayHandler.query(order);
			} else if (SettlementMethodType.NOT_SPECIFIED.getIntValue() == order.getCustomerAPaymentMethod().getIntValue()) {
				return PayOrderStatusType.NOTPAYED;
			}  else {
				throw new PaymentException("Unsupported query method: " + order.getCustomerAPaymentMethod());
			}
			
			if (WepayHandler.SUCCESS.equalsIgnoreCase(state)) {
				PayOrderImpl a = AccountingModel.INSTANCE.get(order.getId(), PayOrderImpl.class);
				return a.getStatus();
			}
		}
		return order.getStatus();
	}
	
	public IPayOrder queryForPayOrder(final String orderSerialNumber) {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSerialNumber);
		order.setEnabled(true);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			return result.get(0);
		}
		return null;
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
		if (order.getStatus() != PayOrderStatusType.NOTPAYED) {
			throw new PaymentException("PayOrder is not in NOTPAY state! current state: " + order.getStatus());
		}
		
		if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
			return alipayHandler.prepay(order);
		} else if (SettlementMethodType.WEIXI == order.getCustomerAPaymentMethod()) {
			return wepayHandler.prepay(order);
		} else {
			throw new PaymentException("Unsupported payment method: " + order.getCustomerAPaymentMethod());
		}
	}
	
	/**
	 * Confirms payment order to end user.
	 */
	public void ensurePay(final String orderSNumber) throws PaymentException {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSNumber);
		order.setEnabled(true);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			result.get(0).setStatus(PayOrderStatusType.AGREEDPAYTOEND);
			AccountingModel.INSTANCE.update(result.get(0));
		} else {
			throw new PaymentException("Unable to find order number: " + orderSNumber);
		}
	}
	
	public boolean isRequestedForWithdraw(final IPayOrder order) {
		PayOrderRequestImpl request = new PayOrderRequestImpl();
		request.setPayOrderId(order.getId());
		request.setType(PayOrderRequestType.WITHDRAW);
		return AccountingModel.INSTANCE.searchPayOrderRequestCount(request) == 1;
	}
	
	/**
	 * Transfer the money to End customer from our account. 
	 * 
	 * Support WeiXi and Alipay.
	 * 
	 * This method only supposed done by Admin user.
	 * 
	 * @param orderSNumber
	 * @return
	 * @throws PaymentException
	 */
	public void withdraw(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException{
		if (order.getStatus() == PayOrderStatusType.AGREEDPAYTOEND && !order.getWithdrawn()) {
			if (isRequestedForWithdraw(order)) {
				return;
			}
			
			PayOrderRequestImpl request = new PayOrderRequestImpl();
			request.setPayOrderId(order.getId());
			request.setState(RequestStatusType.REQUEST);
			request.setType(PayOrderRequestType.WITHDRAW);
			request.setCreateDate(new Date());
			request.setUserId(customerAccount.getUserId());
			request.setThirdPartyAccount(customerAccount.getThirdPartyAccount());
			request.setThirdPartyAccountName(customerAccount.getThirdPartyAccountName());
			request.setThirdPartyAccountType(customerAccount.getThirdPartyAccountType());
			AccountingModel.INSTANCE.create(request);
			
			//notify admin
			ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
			NotificationImpl message = new NotificationImpl();
			message.setSubject("\u63D0\u73B0\u7533\u8BF7: " + order.getSerialNumber());
			message.setDescription(order.getDescription());
			message.setCreateDate(new Date());
			coorService.addNotificationToAdmin(message, false);
		} else {
			throw new PaymentException("Illegal order state for withdrawing: " + order.getStatus().getDescription());
		}
	}
	
	/**
	 * Request for Refund or Withdraw.
	 */
	public void requestForRefund(final IPayOrder order) throws PaymentException {
		 if (order.getStatus() == PayOrderStatusType.PAYED) {
			if (isRequestedForRefund(order)) {
				return;
			}
			PayOrderRequestImpl request = new PayOrderRequestImpl();
			request.setUserId(UserContext.getUserContext().getOrgId());
			request.setPayOrderId(order.getId());
			request.setState(RequestStatusType.REQUEST);
			request.setType(PayOrderRequestType.REFUND);
			request.setCreateDate(new Date());
			AccountingModel.INSTANCE.create(request);
			
			//notify admin
			ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
			NotificationImpl message = new NotificationImpl();
			message.setSubject("\u9000\u6B3E\u7533\u8BF7: " + order.getSerialNumber());
			message.setDescription(order.getDescription());
			message.setCreateDate(new Date());
			coorService.addNotificationToAdmin(message, false);
		} else {
			throw new PaymentException("Illegal order state for refunding: " + order.getStatus().getDescription());
		}
	}
	
	public boolean isRequestedForRefund(final IPayOrder order) {
		PayOrderRequestImpl request = new PayOrderRequestImpl();
		request.setPayOrderId(order.getId());
		request.setType(PayOrderRequestType.REFUND);
		return AccountingModel.INSTANCE.searchPayOrderRequestCount(request) == 1;
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
	
	@Override
	public Class getServiceInterface() {
		return IPaymentService.class;
	}

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

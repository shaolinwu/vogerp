package org.shaolin.vogerp.accounting.internal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.Registry;
import org.shaolin.bmdp.runtime.Registry.RunningMode;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.ILifeCycleProvider;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.accounting.PayOrderStatusListener;
import org.shaolin.vogerp.accounting.PaymentException;
import org.shaolin.vogerp.accounting.be.DoubleEntryImpl;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.IPayOrderRequest;
import org.shaolin.vogerp.accounting.be.IServiceChargeTemplate;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.be.PayOrderRequestImpl;
import org.shaolin.vogerp.accounting.be.ServiceChargeTemplateImpl;
import org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.accounting.ce.PayOrderRequestType;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.RequestStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * 
 * @author wushaol
 *
 */
@Service
public class PaymentServiceImpl implements ILifeCycleProvider, IServiceProvider, IPaymentService {

	private static final Logger logger = LoggerFactory.getLogger(PaymentServiceImpl.class);
	
	private List<PayOrderStatusListener> listeners = new ArrayList<PayOrderStatusListener>();
	
	private BCpayHandler behandler;
	private AlipayHandler alipayHandler;
	private WepayHandler wepayHandler;
	private DevTestHandler devTestHandler;
	
	// the super account of us.
	public static final String SUPER_ACCOUNT = "1";
	public static final Long SUPER_ORGIG = 1L;
	
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
			listener.notifyPaySuccess(payOrder);
		}
	}
	
	@Override
	public void notifyPayRefund(IPayOrder payOrder) {
		for (PayOrderStatusListener listener: listeners) {
			listener.notifyPayRefund(payOrder);
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
			//mideng.
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
		if (amount >= 50000) { // single payment order must be less then 50000 RMB.
			throw new IllegalArgumentException("Single payment order must be less then 50000 RMB. current amount is " + amount);
		}
		ServiceChargeTemplateImpl scObject = new ServiceChargeTemplateImpl();
		scObject.setPayBusinessType(type);
		scObject.setVersion(0);//get the newest version.
		List<IServiceChargeTemplate> result1 = AccountingModel.INSTANCE.searchServiceCharge(scObject, null, 0, 1);
		if (result1 != null && result1.size() > 0) {
			order.setServiceChargeAAmount(Math.abs(order.getAmount() * result1.get(0).getChargeARate()));
			order.setServiceChargeBAmount(Math.abs(order.getAmount() * result1.get(0).getChargeBRate()));
			order.setServiceChargeId(result1.get(0).getId());
		}
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
		if (amount >= 50000) { // single payment order must be less then 50000 RMB.
			throw new IllegalArgumentException("Single payment order must be less then 50000 RMB. current amount is " + amount);
		}
		ServiceChargeTemplateImpl scObject = new ServiceChargeTemplateImpl();
		scObject.setPayBusinessType(type);
		scObject.setVersion(0);//get the newest version.
		List<IServiceChargeTemplate> result1 = AccountingModel.INSTANCE.searchServiceCharge(scObject, null, 0, 1);
		if (result1 != null && result1.size() > 0) {
			order.setServiceChargeAAmount(Math.abs(order.getAmount() * result1.get(0).getChargeARate()));
			order.setServiceChargeBAmount(Math.abs(order.getAmount() * result1.get(0).getChargeBRate()));
			order.setServiceChargeId(result1.get(0).getId());
		}
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
			//mideng
			return result.get(0);
		}
		
		order.setPayBusinessType(type);
		order.setOrgId(SUPER_ORGIG); // fixed id here.
		order.setUserId(SUPER_ORGIG);
		order.setEndUserId(endUserId);
		order.setSerialNumber(PaymentUtil.genPayOrderSerialNumber());
		order.setStatus(PayOrderStatusType.NOTPAYED);
		order.setOrderSerialNumber(orderSerialNumber);
		order.setAmount(amount * 100); //round up fen.
		if (amount >= 50000) { // single payment order must be less then 50000 RMB.
			throw new IllegalArgumentException("Single payment order must be less then 50000 RMB. current amount is " + amount);
		}
		ServiceChargeTemplateImpl scObject = new ServiceChargeTemplateImpl();
		scObject.setPayBusinessType(type);
		scObject.setVersion(0);//get the newest version.
		List<IServiceChargeTemplate> result1 = AccountingModel.INSTANCE.searchServiceCharge(scObject, null, 0, 1);
		if (result1 != null && result1.size() > 0) {
			order.setServiceChargeAAmount(Math.abs(order.getAmount() * result1.get(0).getChargeARate()));
			order.setServiceChargeBAmount(Math.abs(order.getAmount() * result1.get(0).getChargeBRate()));
			order.setServiceChargeId(result1.get(0).getId());
		}
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
			if (Registry.getAppRunningMode() == RunningMode.Dev) {
				state = devTestHandler.query(order);
			} else if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
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
			if (Registry.getAppRunningMode() == RunningMode.Dev) {
				state = devTestHandler.query(order);
			} else if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
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
		if (Registry.getAppRunningMode() == RunningMode.Dev) {
			return devTestHandler.prepay(order);
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
	 * Confirms payment order to the end user.
	 */
	public void ensurePay(final String orderSNumber) throws PaymentException {
		PayOrderImpl order = new PayOrderImpl();
		order.setOrderSerialNumber(orderSNumber);
		order.setEnabled(true);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(order, null, 0, 1);
		if (result != null && result.size() > 0) {
			IPayOrder payOrder = result.get(0);
			payOrder.setStatus(PayOrderStatusType.AGREEDPAYTOEND);
			AccountingModel.INSTANCE.update(payOrder);
			//differential accounting supported: record pay to double entry's table.
			//so, we are able to track all profits from it.
			//charge the service fee from the published user.
			if(payOrder.getServiceChargeAAmount() > 0) {
				DoubleEntryImpl entry = new DoubleEntryImpl();
				entry.setCreditAccount(SUPER_ACCOUNT);
				entry.setCreditAmount(payOrder.getServiceChargeAAmount());
				entry.setDebitAccount(payOrder.getCustomerAPayAccount());
				entry.setDebitAmount(payOrder.getServiceChargeAAmount());
				entry.setVoucherNumber(payOrder.getSerialNumber());
				entry.setSettlementMethod(payOrder.getCustomerAPaymentMethod());
				entry.setSettlementNumber(payOrder.getCustomerAPayAccount());
				entry.setGeneralLedger(ClassifyOfAccounts.PROFIT);
				entry.setSubLedger(payOrder.getPayBusinessType().getDisplayName());
				AccountingModel.INSTANCE.create(entry);
			}
			//charge the service fee from the end user.
			if(payOrder.getServiceChargeBAmount() > 0) {
				DoubleEntryImpl entry = new DoubleEntryImpl();
				entry.setCreditAccount(SUPER_ACCOUNT);
				entry.setCreditAmount(payOrder.getServiceChargeBAmount());
				entry.setDebitAccount(payOrder.getCustomerBPayAccount());
				entry.setDebitAmount(payOrder.getServiceChargeBAmount());
				entry.setVoucherNumber(payOrder.getSerialNumber());
				entry.setSettlementMethod(payOrder.getCustomerBPaymentMethod());
				entry.setSettlementNumber(payOrder.getCustomerBPayAccount());
				entry.setGeneralLedger(ClassifyOfAccounts.PROFIT);
				entry.setSubLedger(payOrder.getPayBusinessType().getDisplayName());
				AccountingModel.INSTANCE.create(entry);
			}
			NotificationImpl message = new NotificationImpl();
			message.setPartyId(payOrder.getEndUserId());
			message.setSubject("恭喜您有新的收入" + payOrder.getAmount()*100 + "元！");
			message.setCreateDate(new Date());
			
			ICoordinatorService service = (ICoordinatorService)AppContext.get().getService(ICoordinatorService.class);
			service.addNotification(message, true);
		} else {
			throw new PaymentException("Unable to find the pay order: " + orderSNumber);
		}
	}
	
	public boolean isRequestedForWithdraw(final long userId) {
		PayOrderRequestImpl request = new PayOrderRequestImpl();
		request.setUserId(userId);
		request.setType(PayOrderRequestType.WITHDRAW);
		request.setState(RequestStatusType.REQUEST);
		return AccountingModel.INSTANCE.searchPayOrderRequestCount(request) == 1;
	}
	
	/**
	 * Transfer the money to End customer from our account. 
	 * 
	 * Supported Alipay only.
	 * 
	 * @param orderSNumber
	 * @return
	 * @throws PaymentException
	 */
	public void requestForWithdraw(final List<IPayOrder> payOrders, final ICustomerAccount customerAccount) throws PaymentException {
		if (payOrders == null || payOrders.size() == 0) {
			return;
		}
		if (isRequestedForWithdraw(customerAccount.getUserId())) {
			return;
		}
		List<Long> ids = new ArrayList<Long>();
		double totalAmount = 0;
		for (IPayOrder order: payOrders) {
			ids.add(order.getId());
			totalAmount += (order.getAmount()/100);
		}
		if (totalAmount <= 0) {
			return;
		}
		
		PayOrderRequestImpl request = new PayOrderRequestImpl();
		request.setState(RequestStatusType.REQUEST);
		request.setType(PayOrderRequestType.WITHDRAW);
		request.setAmount(totalAmount);
		request.setPayOrderIds(ids.toString());
		request.setCreateDate(new Date());
		request.setUserId(customerAccount.getUserId());
		request.setSerialNumber(PaymentUtil.genWithdrawSerialNumber());
		AccountingModel.INSTANCE.create(request);
		
		//notify admin
		ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
		NotificationImpl message = new NotificationImpl();
		message.setSubject("\u63D0\u73B0\u7533\u8BF7: " + customerAccount.getUserId());
		message.setDescription("");
		message.setCreateDate(new Date());
		coorService.addNotificationToAdmin(message, false);
	}
	
	public String approveWithdraw(final IPayOrderRequest request0) throws PaymentException {
		if (Registry.getAppRunningMode() == RunningMode.Dev) {
			return devTestHandler.transfer(request0);
		}
		// unsupported Weixi withdraw.
		return alipayHandler.transfer(request0);
	}

	public String queryForWithdraw(final IPayOrderRequest request0) throws PaymentException {
		if (Registry.getAppRunningMode() == RunningMode.Dev) {
			return devTestHandler.queryTransferResult(request0);
		}
		return alipayHandler.queryTransferResult(request0);
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
	
	/**
	 * refund
	 *
	 * This method only allowed by Admin user.
	 * @param order
	 * @return
	 */
	public String refund(final IPayOrder order) throws PaymentException {
		if (Registry.getAppRunningMode() == RunningMode.Dev) {
			return devTestHandler.refund(order);
		}
		if (SettlementMethodType.ALIPAY == order.getCustomerAPaymentMethod()) {
			return alipayHandler.refund(order);
		} else if (SettlementMethodType.WEIXI == order.getCustomerAPaymentMethod()) {
			return wepayHandler.refund(order);
		} else {
			throw new PaymentException("Unsupported payment method: " + order.getCustomerAPaymentMethod());
		}
	}

	public boolean isRequestedForRefund(final IPayOrder order) {
		PayOrderRequestImpl request = new PayOrderRequestImpl();
		request.setPayOrderId(order.getId());
		request.setType(PayOrderRequestType.REFUND);
		request.setState(RequestStatusType.REQUEST);
		return AccountingModel.INSTANCE.searchPayOrderRequestCount(request) == 1;
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
	public void configService() {
		
	}

	@Override
	public void startService() {
		String isDisabled = Registry.getInstance().getValue("/System/modules/disable/accounting");
		if (isDisabled != null && "true".equals(isDisabled)) {
			LoggerFactory.getLogger(PaymentServiceImpl.class).info("Disable the accounting module by setting.");
			return;
		}
		
		AppContext.get().register(new AccountingServiceImpl());
		
		this.alipayHandler = new AlipayHandler();
		this.wepayHandler = new WepayHandler();
		this.devTestHandler = new DevTestHandler();
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

package org.shaolin.vogerp.accounting.internal;

import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.spi.EventProcessor;
import org.shaolin.bmdp.runtime.spi.FlowEvent;
import org.shaolin.bmdp.workflow.be.NotificationImpl;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.bmdp.workflow.internal.BuiltInAttributeConstant;
import org.shaolin.vogerp.accounting.IPaymentService;
import org.shaolin.vogerp.accounting.IPaymentService.TransactionType;
import org.shaolin.vogerp.accounting.PaymentException;
import org.shaolin.vogerp.accounting.PaymentHandler;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.be.PayOrderImpl;
import org.shaolin.vogerp.accounting.be.PayOrderTransactionLogImpl;
import org.shaolin.vogerp.accounting.ce.PayOrderStatusType;
import org.shaolin.vogerp.accounting.ce.SettlementMethodType;
import org.shaolin.vogerp.accounting.dao.AccountingModel;
import org.shaolin.vogerp.accounting.util.PaymentUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author wushaol
 *
 */
public class DevTestHandler implements PaymentHandler {

	private static final Logger logger = LoggerFactory.getLogger(DevTestHandler.class);
	
	public DevTestHandler() {
	}
	
	/**
	 * 
	 * @param payOrder
	 * @return
	 * @throws Exception
	 */
	public String prepay(final IPayOrder payOrder) throws PaymentException {
		if (payOrder.getStatus() != PayOrderStatusType.NOTPAYED) {
			return "";
		}
		payOrder.setCustomerAPaymentMethod(SettlementMethodType.ALIPAY);
		payOrder.setOutTradeNo(PaymentUtil.genOutTradeNumber());
		AccountingModel.INSTANCE.update(payOrder);
		
		PayOrderTransactionLogImpl translog = new PayOrderTransactionLogImpl();
        translog.setPaymentMethod(SettlementMethodType.ALIPAY);
        translog.setLog("test");
        translog.setCreateDate(new Date());
		translog.setIsCorrect(true);
		AccountingModel.INSTANCE.create(translog, true);
		
		logger.info("Test a callback payment: " + payOrder.getOutTradeNo());
		try {
			JSONObject json = new JSONObject();
			json.put("transaction_type", TransactionType.PAY.toString());
			json.put("transaction_id", payOrder.getOutTradeNo());
			
			return updatePayOrder(translog, payOrder.getOutTradeNo(), json);
		} catch (Throwable e) {
			throw new PaymentException("Test prepay error: " + e.getMessage(), e);
		}
	}
	
	public String transfer(final IPayOrder order, ICustomerAccount customerAccount) throws PaymentException {
		throw new UnsupportedOperationException();
	}
	
	public String refund(final IPayOrder order) throws PaymentException {
		order.setStatus(PayOrderStatusType.REFUND);
        AccountingModel.INSTANCE.update(order, true);
		return SUCCESS;
	}
	
	public String query(final IPayOrder order) throws PaymentException {
		return SUCCESS;
	}

	private String updatePayOrder(PayOrderTransactionLogImpl translog, String out_trade_no, JSONObject jsonObj)
			throws Exception {
		PayOrderImpl payOrder = new PayOrderImpl();
		payOrder.setOutTradeNo(out_trade_no);
		List<IPayOrder> result = AccountingModel.INSTANCE.searchPaymentOrder(payOrder, null, 0, 1);
		if (result != null && result.size() > 0) {
			payOrder = (PayOrderImpl)result.get(0);
			if (payOrder.getStatus() == PayOrderStatusType.PAYED) {
				// already notified.
				return SUCCESS;
			}
			updatePayState(jsonObj, payOrder);
			// handle call back update.
			IPaymentService payService = AppContext.get().getService(IPaymentService.class);
			payService.notifyPaySuccess(payOrder);

			FlowEvent e = new FlowEvent("PayFlowConsumer");
			e.setAttribute("payOrder", payOrder);
			e.setAttribute("jsonObj", jsonObj);
			e.setAttribute(BuiltInAttributeConstant.KEY_AdhocNodeName, "PrepayCallBack");
			EventProcessor processor = (EventProcessor)AppContext.get().getService(
					Class.forName("org.shaolin.bmdp.workflow.internal.WorkFlowEventProcessor"));
			processor.process(e);
		} else {
			logger.warn("Payment order does not exist! id: " + out_trade_no);
			// send notification to admin!
			ICoordinatorService coorService = AppContext.get().getService(ICoordinatorService.class);
			NotificationImpl message = new NotificationImpl();
			message.setSubject("\u652F\u4ED8\u5F02\u5E38\u5355\u901A\u77E5\uFF01");
			message.setDescription("\u652F\u4ED8\u8BA2\u5355\u4E0D\u5B58\u5728. id: " + out_trade_no);
			message.setCreateDate(new Date());
			coorService.addNotificationToAdmin(message, false);
		}
		//we have to send a success string back to Alipay as required. 
		return SUCCESS;
	}
	
	private void updatePayState(final JSONObject jsonObj, final IPayOrder payOrder) throws PaymentException {
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
}

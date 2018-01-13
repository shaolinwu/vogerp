package org.shaolin.vogerp.ecommercial.internal;

import java.util.List;

import org.shaolin.vogerp.accounting.PayOrderStatusListener;
import org.shaolin.vogerp.accounting.be.IPayOrder;
import org.shaolin.vogerp.accounting.ce.PayBusinessType;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IGoldenOrder;
import org.shaolin.vogerp.ecommercial.be.IMachiningOrder;
import org.shaolin.vogerp.ecommercial.be.IRentOrLoanOrder;
import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
import org.shaolin.vogerp.ecommercial.dao.EOrderModel;

public class OrderPaymentListener implements PayOrderStatusListener {

	@Override
	public void notifyPaySuccess(final IPayOrder payOrder) {
		PayBusinessType type = payOrder.getPayBusinessType();
		String serialNumber = payOrder.getOrderSerialNumber();
		if (type == PayBusinessType.GOLDENPORDERBUSI || type == PayBusinessType.GOLDENSORDERBUSI) {
			GoldenOrderImpl order = new GoldenOrderImpl();
			order.setSerialNumber(serialNumber);
			List<IGoldenOrder> result = EOrderModel.INSTANCE.searchGoldenOrder(order, null, 0, 1);
			if (result != null && result.size() > 0) {
				result.get(0).setTakenStatus(OrderStatusType.TAKEN_PAYED);
				EOrderModel.INSTANCE.update(result.get(0));
			}
		} else if (type == PayBusinessType.EQUIPMENTRENTBUSI || type == PayBusinessType.EQUIPMENTRENTBUSI) {
			RentOrLoanOrderImpl order = new RentOrLoanOrderImpl();
			order.setSerialNumber(serialNumber);
			List<IRentOrLoanOrder> result = EOrderModel.INSTANCE.searchRentOrLoanOrder(order, null, 0, 1);
			if (result != null && result.size() > 0) {
				result.get(0).setTakenStatus(OrderStatusType.TAKEN_PAYED);
				EOrderModel.INSTANCE.update(result.get(0));
			}
		} else if (type == PayBusinessType.MACHININGBUSI) {
			MachiningOrderImpl order = new MachiningOrderImpl();
			order.setSerialNumber(serialNumber);
			List<IMachiningOrder> result = EOrderModel.INSTANCE.searchMachiningOrder(order, null, 0, 1);
			if (result != null && result.size() > 0) {
				result.get(0).setTakenStatus(OrderStatusType.TAKEN_PAYED);
				EOrderModel.INSTANCE.update(result.get(0));
			}
		}
	}

	@Override
	public void notifyFail(IPayOrder order) {
		//TODO:
	}

	@Override
	public void notifyPayRefund(IPayOrder payOrder) {
		PayBusinessType type = payOrder.getPayBusinessType();
		String serialNumber = payOrder.getOrderSerialNumber();
		if (type == PayBusinessType.GOLDENPORDERBUSI || type == PayBusinessType.GOLDENSORDERBUSI) {
			GoldenOrderImpl order = new GoldenOrderImpl();
			order.setSerialNumber(serialNumber);
			List<IGoldenOrder> result = EOrderModel.INSTANCE.searchGoldenOrder(order, null, 0, 1);
			if (result != null && result.size() > 0) {
				result.get(0).setTakenStatus(OrderStatusType.CANCELLED);
				EOrderModel.INSTANCE.update(result.get(0));
			}
		} else if (type == PayBusinessType.EQUIPMENTRENTBUSI || type == PayBusinessType.EQUIPMENTRENTBUSI) {
			RentOrLoanOrderImpl order = new RentOrLoanOrderImpl();
			order.setSerialNumber(serialNumber);
			List<IRentOrLoanOrder> result = EOrderModel.INSTANCE.searchRentOrLoanOrder(order, null, 0, 1);
			if (result != null && result.size() > 0) {
				result.get(0).setTakenStatus(OrderStatusType.CANCELLED);
				EOrderModel.INSTANCE.update(result.get(0));
			}
		} else if (type == PayBusinessType.MACHININGBUSI) {
			MachiningOrderImpl order = new MachiningOrderImpl();
			order.setSerialNumber(serialNumber);
			List<IMachiningOrder> result = EOrderModel.INSTANCE.searchMachiningOrder(order, null, 0, 1);
			if (result != null && result.size() > 0) {
				result.get(0).setTakenStatus(OrderStatusType.CANCELLED);
				EOrderModel.INSTANCE.update(result.get(0));
			}
		}
	}

}

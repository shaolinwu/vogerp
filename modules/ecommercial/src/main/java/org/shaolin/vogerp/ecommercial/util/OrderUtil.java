package org.shaolin.vogerp.ecommercial.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.be.IPersistentEntity;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.LockManager;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IEOrder;
import org.shaolin.vogerp.ecommercial.be.IGoldenOrder;
import org.shaolin.vogerp.ecommercial.be.IOfferPrice;
import org.shaolin.vogerp.ecommercial.be.IRentOrLoanOrder;
import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
import org.shaolin.vogerp.ecommercial.dao.OrderModel;

public class OrderUtil {
	
	private static LockManager<Long> lockManager = new LockManager<Long>();
	
	public synchronized static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "GOSN-" + parse.getCNDateString() + "-"
				+ parse.format(parse.getHours(), 2) + ""
				+ parse.format(parse.getSeconds(), 2);
	}
	
	public synchronized static String genConversationId() {
		return "TALKID-" + System.nanoTime();
	}
	
	public synchronized static String genResourceId() {
		return "r" + System.nanoTime();
	}
	
	public static boolean compareAPrice(IEOrder gorder,
			IOfferPrice newPrice) {
		if (gorder.getId() == 0) {
			return false;
		}
		//TODO: we need the distributed lock manager for all nodes here.
		lockManager.acquireLock(gorder.getId());
		try {
			GoldenOrderImpl condition = new GoldenOrderImpl();
			condition.setId(gorder.getId());
			List<IGoldenOrder> result = OrderModel.INSTANCE.searchGoldenOrder(
					condition, null, 0, 1);
			gorder = result.get(0);
			if (gorder.getTakenCustomerId() > 0) {
				return false;
			}
			if (gorder.getOfferPrices() == null) {
				gorder.setOfferPrices(new ArrayList());
			}
			if (getLowestOfferPrice(gorder) < newPrice.getPrice()) {
				return false;
			}
			gorder.getOfferPrices().add(newPrice);
			OrderModel.INSTANCE.update((IPersistentEntity)gorder);
			// commit the update.
			HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
			return true;
		} finally {
			lockManager.releaseLock(gorder.getId());
		}
	}
	
	public static double getLowestOfferPrice(IEOrder gorder, boolean reload) {
		GoldenOrderImpl condition = new GoldenOrderImpl();
		condition.setId(gorder.getId());
		List<IGoldenOrder> result = OrderModel.INSTANCE.searchGoldenOrder(
				condition, null, 0, 1);
		gorder = result.get(0);
		return getLowestOfferPrice(gorder);
	}
	
	public static double getLowestOfferPrice(IEOrder gorder) {
		double lowestPrice = gorder.getEstimatedPrice();
		if (gorder.getOfferPrices() != null) {
			List<IOfferPrice> offerPrices = gorder.getOfferPrices();
			for (IOfferPrice p : offerPrices) {
				if (lowestPrice > p.getPrice()) {
					lowestPrice = p.getPrice();
				}
			}
		}
		return lowestPrice;
	}
	
	public static long getLowestOfferPriceCustId(IEOrder gorder) {
		long custId = 0;
		double lowestPrice = gorder.getEstimatedPrice();
		if (gorder.getOfferPrices() != null) {
			List<IOfferPrice> offerPrices = gorder.getOfferPrices();
			for (IOfferPrice p : offerPrices) {
				if (lowestPrice > p.getPrice()) {
					lowestPrice = p.getPrice();
					custId = p.getTakenCustomerId();
				}
			}
		}
		return custId;
	}
	
	public static String getOrderHTMLInfo(IEOrder order) {
		StringBuilder sb = new StringBuilder();
		sb.append("<div>");
		sb.append("<span class='vogerp_city'>\u6765\u81EA").append(CEUtil.getValue(order.getCity()));
		if (order instanceof IGoldenOrder) {
			if (((IGoldenOrder)order).getType() == GoldenOrderType.PURCHASE) {
				sb.append("\u7684\u91C7\u8D2D\u8BA2\u5355");
			} else {
				sb.append("\u7684\u9500\u552E\u8BA2\u5355");
			}
		} else if (order instanceof IRentOrLoanOrder) {
			if (((IRentOrLoanOrder)order).getType() == RentOrLoanOrderType.LOAN) {
				sb.append("\u7684\u79DF\u8D41\u8BA2\u5355");
			} else {
				sb.append("\u7684\u51FA\u79DF\u8BA2\u5355");
			}
		} 
		sb.append("</span>");
		sb.append("<span class='vogerp_desc'>").append(order.getDescription()).append("</span><a href='#' onclick=''>\u67E5\u770B</a>");
		sb.append("</div>");
		
		return sb.toString();
	}
	
	public static String getOrderTextInfo(IEOrder order) {
		StringBuilder sb = new StringBuilder();
		if (order instanceof IGoldenOrder) {
		} else if (order instanceof IRentOrLoanOrder) {
		} 
		sb.append("\u6765\u81EA").append(CEUtil.getValue(order.getCity())).append(": ");
		sb.append(order.getDescription());
		
		return sb.toString();
	}
	
}

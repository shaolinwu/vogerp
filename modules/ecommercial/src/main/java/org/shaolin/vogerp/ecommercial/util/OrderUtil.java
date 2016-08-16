package org.shaolin.vogerp.ecommercial.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.be.IPersistentEntity;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.LockManager;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IEOrder;
import org.shaolin.vogerp.ecommercial.be.IGoldenOrder;
import org.shaolin.vogerp.ecommercial.be.IOfferPrice;
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
	
}

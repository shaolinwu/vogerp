package org.shaolin.vogerp.ecommercial.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IGOOfferPrice;
import org.shaolin.vogerp.ecommercial.be.IGoldenOrder;
import org.shaolin.vogerp.ecommercial.dao.OrderModel;

public class OrderUtil {
	
	public static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "GOSN-" + parse.getCNDateString() + "-"
				+ parse.format(parse.getHours(), 2) + ""
				+ parse.format(parse.getSeconds(), 2);
	}
	
	public static synchronized boolean compareAPrice(IGoldenOrder gorder,
			IGOOfferPrice newPrice) {
		GoldenOrderImpl condition = new GoldenOrderImpl();
		condition.setId(gorder.getId());
		List<IGoldenOrder> result = OrderModel.INSTANCE.searchGoldenOrder(
				condition, null, 0, 1);
		gorder = result.get(0);
		if (gorder.getOfferPrices() == null) {
			gorder.setOfferPrices(new ArrayList<IGOOfferPrice>());
		}
		if (getLowestOfferPrice(gorder) < newPrice.getPrice()) {
			return false;
		}
		gorder.getOfferPrices().add(newPrice);
		OrderModel.INSTANCE.update(gorder);
		// commit the update.
		HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
		
		return true;
	}
	
	public static double getLowestOfferPrice(IGoldenOrder gorder, boolean reload) {
		GoldenOrderImpl condition = new GoldenOrderImpl();
		condition.setId(gorder.getId());
		List<IGoldenOrder> result = OrderModel.INSTANCE.searchGoldenOrder(
				condition, null, 0, 1);
		gorder = result.get(0);
		return getLowestOfferPrice(gorder);
	}
	
	public static double getLowestOfferPrice(IGoldenOrder gorder) {
		double lowestPrice = gorder.getEstimatedPrice();
		if (gorder.getOfferPrices() != null) {
			List<IGOOfferPrice> offerPrices = gorder.getOfferPrices();
			for (IGOOfferPrice p : offerPrices) {
				if (lowestPrice > p.getPrice()) {
					lowestPrice = p.getPrice();
				}
			}
		}
		return lowestPrice;
	}
	
}

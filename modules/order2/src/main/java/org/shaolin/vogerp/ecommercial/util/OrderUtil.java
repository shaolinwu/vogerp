package org.shaolin.vogerp.ecommercial.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.i18n.LocaleContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.LockManager;
import org.shaolin.uimaster.page.exception.FormatException;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.vogerp.commonmodel.be.DeliveryInfoImpl;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.util.CustomerInfoUtil;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.IEOrder;
import org.shaolin.vogerp.ecommercial.be.IGoldenOrder;
import org.shaolin.vogerp.ecommercial.be.IMachOrderComponent;
import org.shaolin.vogerp.ecommercial.be.IMachiningOrder;
import org.shaolin.vogerp.ecommercial.be.IOfferPrice;
import org.shaolin.vogerp.ecommercial.be.IRentOrLoanOrder;
import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
import org.shaolin.vogerp.ecommercial.dao.OrderModel;

public class OrderUtil {
	
	private static LockManager<Long> lockManager = new LockManager<Long>();
	
	public synchronized static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "GOSN-" + parse.getCNDateString() + "-"
				+ parse.format(parse.getHours(), 2) + ""
				+ parse.format(parse.getMilliSeconds(), 5)
				+ "-" + (int)(Math.random() * 10000);
	}
	
	public synchronized static String genConversationId() {
		return "TALKID-" + System.nanoTime();
	}
	
	public synchronized static String genResourceId() {
		return "r" + System.nanoTime();
	}
	
	/**
	 * 
	 * Add a price
	 * 
	 * @param eorder
	 * @param newPrice
	 * @return error code
	 *         1 successful
	 *         -1 order state changed
	 *         -2 already offered price
	 */
	public static int addAPrice(final IEOrder eorder,
			final IOfferPrice newPrice) {
		//TODO: we need the distributed lock manager for all nodes here since this is a competition.
		lockManager.acquireLock(eorder.getId());
		try {
			if (eorder instanceof GoldenOrderImpl) {
				GoldenOrderImpl gorder = OrderModel.INSTANCE.get(eorder.getId(), GoldenOrderImpl.class);
				if (gorder == null || eorder.getStatus() != OrderStatusType.PUBLISHED) {
					return -1;
				}
				if (gorder.getOfferPrices() == null) {
					gorder.setOfferPrices(new ArrayList());
				}
				// check whether has offered price already.
				List<IOfferPrice> priceList = gorder.getOfferPrices();
	            for (IOfferPrice price : priceList) {
	            	if (price.getTakenCustomerId() == newPrice.getTakenCustomerId()) {
	            		return -2;
	            	}
	            }
				gorder.getOfferPrices().add(newPrice);
				OrderModel.INSTANCE.update(gorder, true); // we have manually committed the transaction here since it's 1 to n mapping. otherwise, will be wrong!
			} else if (eorder instanceof RentOrLoanOrderImpl) {
				RentOrLoanOrderImpl rorder = OrderModel.INSTANCE.get(eorder.getId(), RentOrLoanOrderImpl.class);
				if (rorder == null || rorder.getStatus() != OrderStatusType.PUBLISHED) {
					return -1;
				}
				if (rorder.getOfferPrices() == null) {
					rorder.setOfferPrices(new ArrayList());
				}
				// check whether has offered price already.
				List<IOfferPrice> priceList = rorder.getOfferPrices();
	            for (IOfferPrice price : priceList) {
	            	if (price.getTakenCustomerId() == newPrice.getTakenCustomerId()) {
	            		return -2;
	            	}
	            }
				rorder.getOfferPrices().add(newPrice);
				OrderModel.INSTANCE.update(rorder, true);// we have manually committed the transaction here since it's 1 to n mapping. otherwise, will be wrong!
			} else if  (eorder instanceof MachiningOrderImpl) {
				MachiningOrderImpl rorder = OrderModel.INSTANCE.get(eorder.getId(), MachiningOrderImpl.class);
				if (rorder == null || rorder.getStatus() != OrderStatusType.PUBLISHED) {
					return -1;
				}
				if (rorder.getOfferPrices() == null) {
					rorder.setOfferPrices(new ArrayList());
				}
				// check whether has offered price already.
				List<IOfferPrice> priceList = rorder.getOfferPrices();
	            for (IOfferPrice price : priceList) {
	            	if (price.getTakenCustomerId() == newPrice.getTakenCustomerId()) {
	            		return -2;
	            	}
	            }
				rorder.getOfferPrices().add(newPrice);
				OrderModel.INSTANCE.update(rorder, true);// we have manually committed the transaction here since it's 1 to n mapping. otherwise, will be wrong!
			} 
			// commit the update.
			return 1;
		} finally {
			lockManager.releaseLock(eorder.getId());
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
	
	public static void markTakenStatus(IEOrder order) {
		if (order.getTakenCustomerId() <= 0) {
			return;
		}
		if (order.getOfferPrices() != null) {
			List<IOfferPrice> offerPrices = order.getOfferPrices();
			for (IOfferPrice p : offerPrices) {
				if (p.getTakenCustomerId() == order.getTakenCustomerId()) {
					p.setIsTaken(true);
					break;
				}
			}
		}
	}
	
	
	public static String getOrderHTMLInfo(IEOrder order) {
		StringBuilder sb = new StringBuilder();
		sb.append("<div class='vogerp_order'>");
		sb.append("<div class='vogerp_city'>\u6765\u81EA").append(CEUtil.getValue(order.getCity()));
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
		} else if (order instanceof IMachiningOrder) {
			sb.append("\u7684\u52A0\u5DE5\u8BA2\u5355");
		} 
		sb.append("</div>");
		sb.append("<div class='vogerp_desc'>").append(order.getDescription()).append("</div>");
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
	
	public static String getOfferPriceInfo(IOfferPrice offerPrice) {
		StringBuilder sb = new StringBuilder();
		sb.append("\u51FA\u4EF7: ");
		try {
			sb.append(FormatUtil.getCurrency(offerPrice.getPrice(), LocaleContext.getUserLocale(), false));
		} catch (FormatException e) {
			sb.append(offerPrice.getPrice());
		}
		//todo: add photos.
		return sb.toString();
	}
	
	public static double getMachiningOrderEstimatedPrice(final IMachiningOrder morder) {
		double totalPrice = 0;
		List<IMachOrderComponent> components = morder.getComponents();
		if (components != null && components.size() > 0) {
			for (IMachOrderComponent comp : components) {
				totalPrice += (comp.getPrice() * comp.getEstiWeight());
			}
		}
		totalPrice += morder.getTaxRate() * totalPrice;
		return totalPrice;
	}
	
	public static void setPublishedUserAddress(final IEOrder order) {
		if (order.getDeliveryInfoId() > 0) {
			DeliveryInfoImpl deliveryInfo = (DeliveryInfoImpl) CommonModel.INSTANCE.get(order.getDeliveryInfoId(),
					DeliveryInfoImpl.class);
			order.setDeliveryInfo(deliveryInfo);
		}
		if (order.getDeliveryInfo() == null) {
			order.setDeliveryInfo(
					(DeliveryInfoImpl) CustomerInfoUtil.createDeliveryInfo(UserContext.getUserContext().getUserId()));
			order.setDeliveryInfoId(order.getDeliveryInfo().getId());
		}
	}
	
	public static void setTakenUserAddress(final IEOrder order, final long userId) {
		if (order.getDeliveryToInfoId() > 0) {
			DeliveryInfoImpl deliveryInfo = (DeliveryInfoImpl) CommonModel.INSTANCE.get(order.getDeliveryToInfoId(),
					DeliveryInfoImpl.class);
			order.setDeliveryToInfo(deliveryInfo);
		}
		if (order.getDeliveryToInfo() == null) {
			order.setDeliveryToInfo(
					(DeliveryInfoImpl) CustomerInfoUtil.createDeliveryInfo(UserContext.getUserContext().getUserId()));
			order.setDeliveryToInfoId(order.getDeliveryToInfo().getId());
		}
	}
	
}

package org.shaolin.vogerp.ecommercial.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.i18n.LocaleContext;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.bmdp.utils.LockManager;
import org.shaolin.uimaster.page.AjaxContext;
import org.shaolin.uimaster.page.ajax.RadioButtonGroup;
import org.shaolin.uimaster.page.exception.FormatException;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
import org.shaolin.vogerp.ecommercial.be.IDeliveryInfo;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.IAddressInfo;
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
	
	public static int checkPriceOffered(final IEOrder eorder, final long userId) {
		if (eorder instanceof GoldenOrderImpl) {
			GoldenOrderImpl gorder = OrderModel.INSTANCE.get(eorder.getId(), GoldenOrderImpl.class);
			if (gorder == null || eorder.getStatus() != OrderStatusType.PUBLISHED
					|| gorder.getOfferPrices() == null) {
				return -1;
			}
			// check whether has offered price already.
			List<IOfferPrice> priceList = gorder.getOfferPrices();
            for (IOfferPrice price : priceList) {
            	if (price.getTakenCustomerId() == userId) {
            		return -2;
            	}
            }
		} else if (eorder instanceof RentOrLoanOrderImpl) {
			RentOrLoanOrderImpl rorder = OrderModel.INSTANCE.get(eorder.getId(), RentOrLoanOrderImpl.class);
			if (rorder == null || rorder.getStatus() != OrderStatusType.PUBLISHED
					|| rorder.getOfferPrices() == null) {
				return -1;
			}
			// check whether has offered price already.
			List<IOfferPrice> priceList = rorder.getOfferPrices();
            for (IOfferPrice price : priceList) {
            	if (price.getTakenCustomerId() == userId) {
            		return -2;
            	}
            }
		} else if  (eorder instanceof MachiningOrderImpl) {
			MachiningOrderImpl rorder = OrderModel.INSTANCE.get(eorder.getId(), MachiningOrderImpl.class);
			if (rorder == null || rorder.getStatus() != OrderStatusType.PUBLISHED
					|| rorder.getOfferPrices() == null) {
				return -1;
			}
			// check whether has offered price already.
			List<IOfferPrice> priceList = rorder.getOfferPrices();
            for (IOfferPrice price : priceList) {
            	if (price.getTakenCustomerId() == userId) {
            		return -2;
            	}
            }
		} 
		return 1;
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
			} else if (((IRentOrLoanOrder)order).getType() == RentOrLoanOrderType.FINDMASTER) {
				sb.append("\u7684\u627E\u5E08\u5085\u8BA2\u5355");
			} else {
				sb.append("\u7684\u51FA\u79DF\u8BA2\u5355");
			}
		} else if (order instanceof IMachiningOrder) {
			sb.append("\u7684\u52A0\u5DE5\u8BA2\u5355");
		} 
		
		String color = "black";
        if (order.getStatus() == OrderStatusType.PUBLISHED) {
           color = "blue";
        } else if (order.getStatus() == OrderStatusType.TAKEN) {
           color = "green";
        } else if (order.getStatus() == OrderStatusType.FORBIDDEN
        		|| order.getStatus() == OrderStatusType.CANCELLED) {
            color = "red";
        }
        String state = "<span style='color:"+color+";'>" + order.getStatus().getDisplayName() + "</span>";
        sb.append("(").append(state).append(")");
        
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
		sb.append("(").append(order.getStatus().getDisplayName()).append(")");
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
		if (order.getDeliveryInfoId() == 0) {
			order.setDeliveryInfo(
					(DeliveryInfoImpl) createDeliveryInfo(UserContext.getUserContext().getUserId()));
			CommonModel.INSTANCE.create(order.getDeliveryInfo());
			order.setDeliveryInfoId(order.getDeliveryInfo().getId());
		}
	}
	
	public static void setTakenUserAddress(final IEOrder order, final long userId) {
		if (order.getDeliveryInfoId() > 0 && order.getDeliveryInfo() == null) {
			DeliveryInfoImpl deliveryInfo = CommonModel.INSTANCE.get(order.getDeliveryInfoId(),
					DeliveryInfoImpl.class);
			order.setDeliveryInfo(deliveryInfo);
		}
		if (order.getDeliveryInfo() == null) {
			order.setDeliveryInfo(new DeliveryInfoImpl());
		}
		IDeliveryInfo endUser = createDeliveryInfo(userId);
		order.getDeliveryInfo().setToUserId(userId);
		order.getDeliveryInfo().setToAddress(endUser.getAddress());
		order.getDeliveryInfo().setToName(endUser.getName());
		order.getDeliveryInfo().setToMobileNumber(endUser.getMobileNumber());
		
		if (order.getDeliveryInfo().getId() == 0) {
			CommonModel.INSTANCE.create(order.getDeliveryInfo());
		} else {
			CommonModel.INSTANCE.update(order.getDeliveryInfo());
		}
	}
	
	public static void reverseDeliveryAddress(final IEOrder order) {
		if (order.getDeliveryInfoId() > 0 && order.getDeliveryInfo() == null) {
			DeliveryInfoImpl deliveryInfo = CommonModel.INSTANCE.get(order.getDeliveryInfoId(),
					DeliveryInfoImpl.class);
			order.setDeliveryInfo(deliveryInfo);
		}
		
		IDeliveryInfo info = order.getDeliveryInfo();
		
		long userId = info.getUserId();
		String address = info.getAddress();
		String name = info.getName();
		String mNumber = info.getMobileNumber();
		
		info.setUserId(info.getToUserId());
		info.setAddress(info.getToAddress());
		info.setName(info.getToName());
		info.setMobileNumber(info.getToMobileNumber());
		
		info.setToUserId(userId);
		info.setToAddress(address);
		info.setToName(name);
		info.setToMobileNumber(mNumber);
		
		CommonModel.INSTANCE.update(info);
	}
	
	public static String getOrderStatusInfo(final IEOrder order) {
		String color = "black";
        if (order.getStatus() == OrderStatusType.PUBLISHED) {
           color = "blue";
        } else if (order.getStatus() == OrderStatusType.TAKEN) {
           color = "green";
        } else if (order.getStatus() == OrderStatusType.FORBIDDEN
        		|| order.getStatus() == OrderStatusType.CANCELLED) {
            color = "red";
        }
        String state = "<span style='color:"+color+";'>" + order.getStatus().getDisplayName() + "</span>";
        if (order.getOfferPrices() != null && order.getOfferPrices().size() > 0) {
           return state + "(\u5DF2\u7ADE\u4EF7<span style='color:red;'>" +order.getOfferPrices().size()+ "</span>\u6B21)";
        }
        return state;
	}
	
	public static String getOrderLink(final IEOrder order) {
		StringBuilder sb = new StringBuilder();
		try {
			JSONObject param = new JSONObject();
			param.put("orderId", order.getId() + "");
			param.put("type", order.getClass().getSimpleName());
			sb.append("<a href='#' onclick=\"javascript:UIMaster.util.invokeWebService('org.shaolin.vogerp.ecommercial.page.AjaxService', 'openEOrderForDetail', \"").append(param.toString()).append("\");\">");
			sb.append(order.getSerialNumber()).append("</a>");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sb.toString();
	}
	
	public static String getOrderOfferPriceLink(final IEOrder order) {
		StringBuilder sb = new StringBuilder();
		try {
			JSONObject param = new JSONObject();
			param.put("orderId", order.getId() + "");
			param.put("type", order.getClass().getSimpleName());
			sb.append("<a href='#' onclick=\"javascript:UIMaster.util.invokeWebService('org.shaolin.vogerp.ecommercial.page.AjaxService', 'openPriceOfferingDetail', \"").append(param.toString()).append("\");\">");
			sb.append(order.getSerialNumber()).append("</a>");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sb.toString();
	}
	
	public static void updateSearchCriteria(AjaxContext page, IEOrder condition) {
		if (page != null) {
			RadioButtonGroup buttonGroup = page.getRadioBtnGroup("searchBar.selectFilterUI");
			if ("1".equals(buttonGroup.getValue())) {
				String city = page.getHidden("searchBar.citiesCbxUI").getValue();
				if (city != null && city.length() > 0) {
					condition.setCity(city);
					condition.setMaxLongitude(0);
					condition.setMaxLatitude(0);
					condition.setMinLongitude(0);
					condition.setMinLatitude(0);
				}
			} else if ("2".equals(buttonGroup.getValue()) && UserContext.getUserContext().getLongitude() > 0) {
				// $page.getHidden("searchBar.areaScopeUI").setValue(100);
				// 12 kilometres = 0.1
				double maxlong = UserContext.getUserContext().getLongitude() + 0.1;
				double maxlati = UserContext.getUserContext().getLatitude() + 0.1;
				double minlong = UserContext.getUserContext().getLongitude() - 0.1;
				double minlati = UserContext.getUserContext().getLatitude() - 0.1;

				condition.setCity(null);
				condition.setMaxLongitude(maxlong);
				condition.setMaxLatitude(maxlati);
				condition.setMinLongitude(minlong);
				condition.setMinLatitude(minlati);
			} else if ("3".equals(buttonGroup.getValue())) {
				condition.setCity(null);
				condition.setMaxLongitude(0);
				condition.setMaxLatitude(0);
				condition.setMinLongitude(0);
				condition.setMinLatitude(0);
			}
		} else {
			if (UserContext.getUserContext().getCity() != null 
					&& UserContext.getUserContext().getCity().trim().length() > 0) {
				condition.setCity(UserContext.getUserContext().getCity());
			}
		}
	}
	
	public static IDeliveryInfo createDeliveryInfo(long userId) {
    	DeliveryInfoImpl deliveryInfo = new DeliveryInfoImpl();
    	deliveryInfo.setUserId(userId);
    	IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
    	List<IAddressInfo> list = userService.getPersonalInfo(userId).getAddresses();
    	if (list != null && list.size() > 0) {
    		IAddressInfo defaultAddress = null;
    		for (IAddressInfo a : list) {
    			if (a.getDefaultAddress()) {
    				defaultAddress = a;
    				break;
    			}
    		}
    		IAddressInfo info = defaultAddress != null? defaultAddress : list.get(0);
    		deliveryInfo.setName(info.getName());
    		deliveryInfo.setAddress(CustomerInfoUtil.addressToString(info));
    		deliveryInfo.setMobileNumber(info.getMobile());
    		deliveryInfo.setComment(info.getDescription());
    	}
    	return deliveryInfo;
    }
    
    public static IDeliveryInfo createDeliveryInfo(long userId, long addressId) {
    	DeliveryInfoImpl deliveryInfo = new DeliveryInfoImpl();
    	deliveryInfo.setUserId(userId);
    	IUserService userService = (IUserService)AppContext.get().getService(IUserService.class);
    	List<IAddressInfo> list = userService.getPersonalInfo(userId).getAddresses();
    	if (list != null && list.size() > 0) {
    		for (IAddressInfo address: list) {
    			if (address.getId() == addressId) {
		    		IAddressInfo info = list.get(0);
		    		deliveryInfo.setName(info.getName());
		    		deliveryInfo.setAddress(CustomerInfoUtil.addressToString(info));
		    		deliveryInfo.setMobileNumber(info.getMobile());
		    		deliveryInfo.setComment(info.getDescription());
		    		break;
    			}
    		}
    	}
    	return deliveryInfo;
    }
	
}

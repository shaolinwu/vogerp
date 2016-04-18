package org.shaolin.vogerp.coupon.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.shaolin.vogerp.coupon.be.CouponImpl;
import org.shaolin.vogerp.coupon.be.CouponOperationImpl;
import org.shaolin.vogerp.coupon.be.DiscountProductImpl;
import org.shaolin.vogerp.coupon.ce.StatusType;
import org.shaolin.vogerp.coupon.dao.CouponModel;

public class CouponUtil {
	public static final String OPERATION_TYPE_LOTTERY = "1";
	
	public static final String OPERATION_TYPE_EXCHANGE = "2";
	
	public static final char[] CHAR_ARR = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
		'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};

	
	/**
	 * Generate coupon serial number
	 * @return
	 */
	public static String genCouponSerialNumber(Long orgId) {
		String orgIdStr = String.valueOf(orgId);
		int len = CHAR_ARR.length;
		int index = 0;
		StringBuffer couponSerialNumber = new StringBuffer();
		couponSerialNumber.append(orgIdStr);
		Random random = new Random();
		for (int i = 0; i < 8 - orgIdStr.length(); i++) {
			index = random.nextInt(len);
			couponSerialNumber.append(String.valueOf(CHAR_ARR[index]));
		}
		boolean isExist = true;
		while (isExist) {
			CouponImpl condition = new CouponImpl();
			condition.setSerialNumber(couponSerialNumber.toString());
			long count = CouponModel.INSTANCE.searchEffectedCouponCount(condition);
			if (count <= 0) {
				isExist = false;
			}
		}
		return couponSerialNumber.toString();
	}
	
	public static CouponImpl genCoupon(DiscountProductImpl discountProduct, Long orgId) {
		CouponImpl coupon = new CouponImpl();
		coupon.setName(discountProduct.getName());
		coupon.setSerialNumber(genCouponSerialNumber(orgId));
		coupon.setDiscountProductId(discountProduct.getId());
		coupon.setExpiredDate(addDays(new Date(), discountProduct.getValidity()));
		if (discountProduct.getCouponType().getIsImmediate()) {
			//TODO if add share function, need change to CREATE
			coupon.setStatus(StatusType.SENDOUT);
		} else {
			coupon.setStatus(StatusType.SENDOUT);
		}
		coupon.setCreateDate(new Date());
		return coupon;
	}

	/**
	 * add days
	 * @param date
	 * @param validity
	 * @return
	 */
	public static Date addDays(Date date, int day) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, day);
		return cal.getTime();
	}
	
	public static Date addTime(Date date, long millSeconds) {
		long time = date.getTime();
		return new Date(time + millSeconds);
	}
	
	/**
	 * format date
	 * @param date
	 * @param format
	 * @return
	 */
	public static String formatDate(Date date, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		return sdf.format(date);
	}
	
	/**
	 * compute between days
	 * @param smdate
	 * @param bdate
	 * @return
	 * @throws ParseException
	 */
	public static int daysBetween(Date smdate, Date bdate) throws ParseException {    
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");  
        smdate=sdf.parse(sdf.format(smdate));  
        bdate=sdf.parse(sdf.format(bdate));  
        Calendar cal = Calendar.getInstance();    
        cal.setTime(smdate);    
        long time1 = cal.getTimeInMillis();                 
        cal.setTime(bdate);
        long time2 = cal.getTimeInMillis();
        long dayMills = 1000 * 3600 * 24;
        long between_days=(time2-time1) % dayMills == 0 ? (time2-time1) / dayMills : (time2-time1) / dayMills + 1;  
            
       return Integer.parseInt(String.valueOf(between_days));
    }
	
	/**
	 * verify whether openid had lottery
	 * @param openId
	 * @param orgId
	 * @return
	 */
	public static boolean verifyOpenIdAndOrgId(String openId, Long orgId) throws ParseException {
		CouponOperationImpl condition = new CouponOperationImpl();
		condition.setOpenId(openId);
		condition.setType(OPERATION_TYPE_LOTTERY);
		condition.setOrgId(orgId);
		List couponOperations = CouponModel.INSTANCE.searchCouponOperation(condition, null, 0, 0);
		if (null != couponOperations && couponOperations.size() > 0) {
			CouponOperationImpl couponOperation = (CouponOperationImpl) couponOperations.get(0);
			if (compareDay(couponOperation.getOperateDate(), new Date()) == 0) {
				return true;
			}
		}
		return false;
	}
	
	public static long compareDay(Date date1, Date date2) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		Date d1 = sdf.parse(sdf.format(date1));
		Date d2 = sdf.parse(sdf.format(date2));
		return d1.getTime() - d2.getTime();
	}
	
}

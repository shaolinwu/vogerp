package org.shaolin.vogerp.coupon.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import org.shaolin.vogerp.coupon.be.CouponImpl;
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
	public static String genCouponSerialNumber() {
		int len = CHAR_ARR.length;
		int index = 0;
		StringBuffer couponSerialNumber = new StringBuffer();
		Random random = new Random();
		for (int i = 0; i < 8; i++) {
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
	
	public static CouponImpl genCoupon(DiscountProductImpl discountProduct) {
		CouponImpl coupon = new CouponImpl();
		coupon.setName(discountProduct.getName());
		coupon.setSerialNumber(genCouponSerialNumber());
		coupon.setDiscountProductId(discountProduct.getId());
		coupon.setExpiredDate(addDays(new Date(), discountProduct.getValidity()));
		coupon.setStatus(StatusType.SENDOUT);
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
}

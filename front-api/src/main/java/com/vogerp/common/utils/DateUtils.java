package com.vogerp.common.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * 日期处理
 */
public class DateUtils {
	private final static Logger logger = LoggerFactory.getLogger(DateUtils.class);
	/**
	 * 时间格式(yyyy-MM-dd)
	 */
	public final static String DATE_PATTERN = "yyyy-MM-dd";
	/**
	 * 时间格式(yyyy-MM-dd HH:mm:ss)
	 */
	public final static String DATE_TIME_PATTERN = "yyyy-MM-dd HH:mm:ss";

	public static String format(Date date) {
		return format(date, DATE_PATTERN);
	}

	public static String format(Date date, String pattern) {
		if (date != null) {
			SimpleDateFormat df = new SimpleDateFormat(pattern);
			return df.format(date);
		}
		return null;
	}

	/**
	 * 计算距离现在多久，非精确
	 *
	 * @param date
	 * @return
	 */
	public static String getTimeBefore(Date date) {
		Date now = new Date();
		long l = now.getTime() - date.getTime();
		long day = l / (24 * 60 * 60 * 1000);
		long hour = (l / (60 * 60 * 1000) - day * 24);
		long min = ((l / (60 * 1000)) - day * 24 * 60 - hour * 60);
		long s = (l / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);
		String r = "";
		if (day > 0) {
			r += day + "天";
		} else if (hour > 0) {
			r += hour + "小时";
		} else if (min > 0) {
			r += min + "分";
		} else if (s > 0) {
			r += s + "秒";
		}
		r += "前";
		return r;
	}

	/**
	 * 计算距离现在多久，精确
	 *
	 * @param date
	 * @return
	 */
	public static String getTimeBeforeAccurate(Date date) {
		Date now = new Date();
		long l = now.getTime() - date.getTime();
		long day = l / (24 * 60 * 60 * 1000);
		long hour = (l / (60 * 60 * 1000) - day * 24);
		long min = ((l / (60 * 1000)) - day * 24 * 60 - hour * 60);
		long s = (l / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);
		String r = "";
		if (day > 0) {
			r += day + "天";
		}
		if (hour > 0) {
			r += hour + "小时";
		}
		if (min > 0) {
			r += min + "分";
		}
		if (s > 0) {
			r += s + "秒";
		}
		r += "前";
		return r;
	}

	public static boolean isToday(Date date) {
		// 当前时间
		Date now = new Date();
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
		// 获取今天的日期
		String nowDay = sf.format(now);
		// 对比的时间
		String day = sf.format(date);
		return day.equals(nowDay);
	}

	public static String today(Date date) {
		// 当前时间
		Date now = new Date();
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
		// 获取今天的日期
		String nowDay = sf.format(now);
		return nowDay;
	}

	@SuppressWarnings("static-access")
	public static boolean isYeaterday(Date inDate) {
		// 当前时间
		Date today = new Date();
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(today);
		calendar.add(calendar.DATE, -1);// 把日期往后增加一天.整数往后推,负数往前移动
		today = calendar.getTime(); // 这个时间就是日期往后推一天的结果
		String yesterday = sf.format(today);
		String day = sf.format(inDate);
		return day.equals(yesterday);
	}

	public static Date stringToDate(String dates) {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			return sdf.parse(dates);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

	public static boolean greatThanNow(Date firstDate, Date secondDate) {
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
		String first = sf.format(firstDate);
		// 对比的时间
		String secode = sf.format(secondDate);
		try {
			Date fd = sf.parse(first);
			Date sc = sf.parse(secode);
			if (fd.getTime() > sc.getTime()) {
				System.out.println("dt1 在dt2前");
				return false;
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return true;
	}
}

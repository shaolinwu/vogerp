package org.shaolin.vogerp.commonmodel.util;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.jdbc.Work;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.utils.DateUtil;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.slf4j.LoggerFactory;

public class StatisticUtil {
 
	public static void sumOrgStatsPerDayFromByCity(final String startFrom) throws ParseException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date today = new java.util.Date();
		java.util.Date start = simpleDateFormat.parse(startFrom);
		while (start.getTime() <= today.getTime()) {
			sumOrgStatsPerDayByCity(start);
			DateUtil.increaseOneDay(start);
		}
	}
	
	public static void sumOrgStatsPerDayByCity() {
		sumOrgStatsPerDayByCity(new java.util.Date());
	}
	
	public static void sumOrgStatsPerDayByCity(java.util.Date today) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String day = simpleDateFormat.format(today);
		StringBuilder sb = new StringBuilder();

		sb.append("SELECT COUNT(b.CITY) as ORGCOUNT, b.CITY FROM comm_organization a, comm_addressinfo b where a.ADDRESSID=b.ID and CREATEDATE between '").append(day).append(" 00-00-00' and '");
		sb.append(day).append(" 23:59:59' GROUP BY b.CITY");
		Session session = HibernateUtil.getSession();
		final List<Object[]> rows = session.createSQLQuery(sb.toString()).list();
		if (rows == null || rows.size() == 0) {
			return;
		}
		StringBuilder insertSQL = new StringBuilder();
		insertSQL.append("INSERT INTO stats_comm_orgbycity (`CREATEDATE`,`CITY`,`ORGCODE`) VALUES (?,?,?);");
		final String insertSQL0 = insertSQL.toString();
		try {
			session.doWork(new Work() {
				public void execute(Connection connection)
						throws SQLException {
					for (Object[] row : rows) {
						if (((Number)row[0]).intValue() == 0) {
							continue;
						}
						PreparedStatement ps = connection.prepareStatement(insertSQL0);
						ps.setDate(1, new Date(System.currentTimeMillis()));
						ps.setString(2, row[1].toString());
						ps.setInt(3, ((Number)row[0]).intValue());
						ps.executeUpdate();
					}
				}
			});
			HibernateUtil.releaseSession(session, true);
		} catch (Exception e) {
			LoggerFactory.getLogger(StatisticUtil.class).warn("Error to execute Table Statistic: " + e.getMessage(), e);
			HibernateUtil.releaseSession(session, false);
		} 
	}
	
	public static void sumOrgStatsPerDayFromByProvince(final String startFrom) throws ParseException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date today = new java.util.Date();
		java.util.Date start = simpleDateFormat.parse(startFrom);
		while (start.getTime() <= today.getTime()) {
			sumOrgStatsPerDayByProvince(start);
			DateUtil.increaseOneDay(start);
		}
	}
	
	public static void sumOrgStatsPerDayByProvince() {
		sumOrgStatsPerDayByProvince(new java.util.Date());
	}
	
	public static void sumOrgStatsPerDayByProvince(java.util.Date today) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String day = simpleDateFormat.format(today);
		StringBuilder sb = new StringBuilder();

		sb.append("SELECT COUNT(b.PROVENCE) as ORGCOUNT, b.PROVENCE FROM comm_organization a, comm_addressinfo b where a.ADDRESSID=b.ID and CREATEDATE between '").append(day).append(" 00-00-00' and '");
		sb.append(day).append(" 23:59:59' GROUP BY b.PROVENCE");
		Session session = HibernateUtil.getSession();
		final List<Object[]> rows = session.createSQLQuery(sb.toString()).list();
		if (rows == null || rows.size() == 0) {
			return;
		}
		StringBuilder insertSQL = new StringBuilder();
		insertSQL.append("INSERT INTO stats_comm_orgbyprovince (`CREATEDATE`,`PROVINCE`,`ORGCODE`) VALUES (?,?,?);");
		final String insertSQL0 = insertSQL.toString();
		try {
			session.doWork(new Work() {
				public void execute(Connection connection)
						throws SQLException {
					for (Object[] row : rows) {
						if (((Number)row[0]).intValue() == 0) {
							continue;
						}
						PreparedStatement ps = connection.prepareStatement(insertSQL0);
						ps.setDate(1, new Date(System.currentTimeMillis()));
						ps.setString(2, row[1].toString());
						ps.setInt(3, ((Number)row[0]).intValue());
						ps.executeUpdate();
					}
				}
			});
			HibernateUtil.releaseSession(session, true);
		} catch (Exception e) {
			LoggerFactory.getLogger(StatisticUtil.class).warn("Error to execute Table Statistic: " + e.getMessage(), e);
			HibernateUtil.releaseSession(session, false);
		} 
	}
	
	public static String queryTotalOrgByProvince() {
		Session session = HibernateUtil.getSession();
		try {
			StringBuilder sb = new StringBuilder();
			sb.append("SELECT ORGCODE, PROVINCE FROM stats_comm_orgbyprovince GROUP BY PROVINCE");
			List<Object[]> result = session.createSQLQuery(sb.toString()).list();
			if (result != null && result.size() > 0) {
				int index = 0;
				int currColor = 0;
				JSONObject json = new JSONObject();
				for (Object[] row : result) {
					JSONObject item = new JSONObject();
					item.put("value", ((Number)row[0]).intValue());
					item.put("index", ++index);
					item.put("stateInitColor", currColor);
					if ((index%7) == 0) {
						currColor++;
					}
					String province = row[1].toString();
					json.put("p" + province.substring(province.indexOf(",") + 1), item);
				}
				return json.toString();
			}
			HibernateUtil.releaseSession(session, true);
		} catch (Exception e) {
			LoggerFactory.getLogger(StatisticUtil.class).warn("Error to execute Table Statistic: " + e.getMessage(), e);
			HibernateUtil.releaseSession(session, false);
		} 
		return "";
	}
	
	/**
	 * City does not have the correspondent map supported, we only show a list on the map.
	 * 
	 * @param tableName
	 * @return
	 */
	public static List<Object[]> queryTotalOrgByCity(String city) {
		Session session = HibernateUtil.getSession();
		try {
			StringBuilder sb = new StringBuilder();
			sb.append("SELECT ORGCODE, CITY FROM stats_comm_orgbycity where CITY like '").append(city).append("%' GROUP BY CITY");
			List<Object[]> result = session.createSQLQuery(sb.toString()).list();
			HibernateUtil.releaseSession(session, true);
			return result;
		} catch (Exception e) {
			LoggerFactory.getLogger(StatisticUtil.class).warn("Error to execute Table Statistic: " + e.getMessage(), e);
			HibernateUtil.releaseSession(session, false);
			return Collections.EMPTY_LIST;
		} 
	}
	
}

package com.vogerp.common.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.vogerp.common.utils.R;
  
/** 
 * 用户IP访问限流控制
 * @author shaolin 
 */  
public class IPCongestionFilter implements Filter, Runnable {  
	private static Logger logger = LoggerFactory.getLogger(IPCongestionFilter.class);

	/**
	 * 不限流IP
	 */
	public static ArrayList<String> ipwhitelist = new ArrayList<String>();
	public static ConcurrentHashMap<String, BlackIP> ipblacklist = new ConcurrentHashMap<String, BlackIP>();
	public static ConcurrentHashMap<String, ThroughputStats> ipthroughput = new ConcurrentHashMap<String, ThroughputStats>();
	
	private ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
	
	private static boolean isEnabled = true;
	
	public IPCongestionFilter(boolean ipCongestionEnabled) {
		isEnabled = ipCongestionEnabled;
	}
	
	@Override
	public void run() {
		if (!isEnabled) {
			return;
		}
		for (BlackIP ip : ipblacklist.values()) {
			if ((ip.blockTime + (1000 * 60 * 1)) < System.currentTimeMillis()) { 
				// blocked ip access in 1 minute.
				ipblacklist.remove(ip.ip);
				if (ipthroughput.containsKey(ip.ip)) {
					ipthroughput.remove(ip.ip);
				}
				logger.info("removed " + ip.ip + " from black list.");
			}
		}
		List<String> releaseIPList = new ArrayList<String>();
		for (Map.Entry<String, ThroughputStats>  entry : ipthroughput.entrySet()) {
			if (entry.getValue().getTotal() > 20 && entry.getValue().getThroughput() > 20 
					&& !ipblacklist.containsKey(entry.getKey())) { // 10 tps will reject this user.
				ipblacklist.put(entry.getKey(), new BlackIP(entry.getKey(), System.currentTimeMillis()));
				logger.info("added " + entry.getKey() + " into black list.");
			} else if (entry.getValue().getTotal() > 100 && entry.getValue().getThroughput() < 10) {
				//cleanup ipthroughput with lower values
				//can't remove here directly. modification exception occurred.
				releaseIPList.add(entry.getKey());
			}
		}
		for (String ip : releaseIPList) {
			ipthroughput.remove(ip);
		}
	}  
	
    @Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException,ServletException {
    		if (!isEnabled) {
    			filterChain.doFilter(request, response);
			return;
		}
    	
    		HttpServletRequest req = (HttpServletRequest) request;
		String userip = IPCongestionFilter.getIpAddress(req);
		if (handleExcludeIP(userip)) {
			filterChain.doFilter(request, response);
			return;
		}
		ThroughputStats tpsStat = ipthroughput.get(userip);
		if (tpsStat == null) {
			tpsStat = new ThroughputStats();
			ipthroughput.put(userip, tpsStat);
		} 
		tpsStat.increment();
		tpsStat.updateAndGetThroughput();
		
		if (ipblacklist.containsKey(userip) || (tpsStat.getTotal() > 20 && tpsStat.getThroughput() > 20)) {
			logger.warn(userip +" IP is congested. ---total: " + tpsStat.getTotal() + " ---tps: " + tpsStat.getThroughput());
			response.getWriter().write(R.error(userip + "访问过快，IP限流触发","Oops! you are in black list.").toString());
			return;
		} 
  		filterChain.doFilter(request, response);
    }
    
	public static String getIpAddress(HttpServletRequest request) {
		String ip = request.getHeader("X-Real-IP"); //从Nginx自定义配置获取
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("x-forwarded-for");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		return ip;
	}
	public static String getIpAddress2(HttpServletRequest request) {
		StringBuffer sb = new StringBuffer();
		sb.append("X-Real-IP=").append(request.getHeader("X-Real-IP")); //从Nginx自定义配置获取
		sb.append("x-real-ip=").append(request.getHeader("x-real-ip"));
		sb.append("x-forwarded-for=").append(request.getHeader("x-forwarded-for"));
		sb.append("X-Forwarded-For=").append(request.getHeader("X-Forwarded-For"));
		sb.append("Proxy-Client-IP=").append(request.getHeader("Proxy-Client-IP"));
		sb.append("proxy-client-ip=").append(request.getHeader("proxy-client-ip"));
		sb.append("WL-Proxy-Client-IP=").append(request.getHeader("WL-Proxy-Client-IP"));
		sb.append("wl-proxy-client-ip=").append(request.getHeader("wl-proxy-client-ip"));
		sb.append("remoteAddr=").append(request.getRemoteAddr());
		return sb.toString();
	}
    
    private static boolean handleExcludeIP(String ip) {
		if (ipwhitelist == null || ipwhitelist.isEmpty()) {
			return false;
		}
		//String url = request.getRequestURL().toString();  
		for (String pattern : ipwhitelist) {
			if (pattern.equals(ip)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		String temp = filterConfig.getInitParameter("excludes");
		if (temp != null) {
			String[] url = temp.split(",");
			for (int i = 0; url != null && i < url.length; i++) {
				ipwhitelist.add(url[i]);
			}
		}
		// default ip list.
		ipwhitelist.add("localhost");
		ipwhitelist.add("0:0:0:0:0:0:0:1");
		ipwhitelist.add("127.0.0.1");
		ipwhitelist.add("116.62.64.26"); // nginx
		ipwhitelist.add("172.16.147.68"); // nginx
		ipwhitelist.add("47.75.115.84"); // dapp + hongkong
		ipwhitelist.add("47.98.192.128"); // dapp + front
		ipwhitelist.add("47.98.144.199"); // dapp + front
		ipwhitelist.add("172.16.147.70"); // dapp + front
		ipwhitelist.add("172.16.147.69"); // dapp + front
		
		if (isEnabled) {
			logger.info("IP Congestion is enabled.");
			scheduler.scheduleAtFixedRate(this, 2, 1, TimeUnit.SECONDS);//throughput per second.
		} else {
			logger.info("IP Congestion is disabled.");
		}
	}

	@Override
	public void destroy() {
		scheduler.shutdown();
	}

	static class BlackIP {
		String ip;
		long   blockTime;
		
		public BlackIP(String ip, long blockTime) {
			this.ip = ip;
			this.blockTime = blockTime;
		}
	}
	
	public static void main(String[] args) {
		String userip = "192.168.0.1";
		ipthroughput.put(userip, new ThroughputStats());
		
		for (int i=0; i< 200; i++) {
			ipthroughput.get(userip).increment();
			ipthroughput.get(userip).updateAndGetThroughput();
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {
			}
		}
		System.out.println("normal case");
		System.out.println("tps: "+ipthroughput.get(userip).getThroughput());
		System.out.println("total: "+ipthroughput.get(userip).getTotal());
		System.out.println("===============");
		
		ipthroughput.get(userip).reset();
		for (int i=0; i< 20; i++) {
			ipthroughput.get(userip).increment();
			ipthroughput.get(userip).updateAndGetThroughput();
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
			}
		}
		System.out.println("normal case2");
		System.out.println("tps: "+ipthroughput.get(userip).getThroughput());
		System.out.println("total: "+ipthroughput.get(userip).getTotal());
		System.out.println("===============");
		
		ipthroughput.get(userip).reset();
		for (int i=0; i< 10; i++) {
			ipthroughput.get(userip).increment();
			ipthroughput.get(userip).updateAndGetThroughput();
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
			}
		}
		System.out.println("normal case3");
		System.out.println("tps: "+ipthroughput.get(userip).getThroughput());
		System.out.println("total: "+ipthroughput.get(userip).getTotal());
		System.out.println("===============");
		
		ipthroughput.get(userip).reset();
		for (int i=0; i< 10; i++) {
			ipthroughput.get(userip).increment();
			ipthroughput.get(userip).updateAndGetThroughput();
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
			}
		}
		System.out.println("slow case");
		System.out.println("tps: "+ipthroughput.get(userip).getThroughput());
		System.out.println("total: "+ipthroughput.get(userip).getTotal());
		System.out.println("===============");
		
		ipthroughput.get(userip).reset();
		for (int i=0; i< 5; i++) {
			ipthroughput.get(userip).increment();
			ipthroughput.get(userip).updateAndGetThroughput();
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
			}
		}
		System.out.println("slow case2");
		System.out.println("tps: "+ipthroughput.get(userip).getThroughput());
		System.out.println("total: "+ipthroughput.get(userip).getTotal());
		System.out.println("===============");
		
		ipthroughput.get(userip).reset();
		for (int i=0; i< 100; i++) {
			ipthroughput.get(userip).increment();
			ipthroughput.get(userip).updateAndGetThroughput();
		}
		System.out.println("too fast case");
		System.out.println("tps: "+ipthroughput.get(userip).getThroughput());
		System.out.println("total: "+ipthroughput.get(userip).getTotal());
		System.out.println("===============");
	}
  
}  

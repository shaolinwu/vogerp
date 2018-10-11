package com.vogerp.monitor;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.json.JSONObject;

import com.vogerp.monitor.stats.URLConcludeStats;

/**
 * a URL collector of all remote services.
 * 
 * @author wushaolin
 *
 */
public class URLCollector {

	private static HashMap<String, URLConcludeStats> urlList = new HashMap<String, URLConcludeStats>();
	
	public static boolean hasURL(String url) {
		return urlList.containsKey(url);
	}
	
	public static void registerURL(String url, String description) {
		if (!urlList.containsKey(url)) {
			urlList.put(url, new URLConcludeStats(url, description));
		}
	}
	
	public static void updateStats(String url, long value) {
		if (urlList.containsKey(url)) {
			// direct matching
			urlList.get(url).addNew(value, false);
		} else {
			// blur matching
			urlList.keySet().stream().filter(t -> url.startsWith(t))
					.findFirst().ifPresent(t -> urlList.get(t).addNew(value, false));
		}
	}
	
	public static void updateStatsWithFail(String url, long value) {
		if (urlList.containsKey(url)) {
			urlList.get(url).addNew(value, true);
		} else {
			urlList.keySet().stream().filter(t -> url.startsWith(t))
			.findAny().ifPresent(t -> urlList.get(t).addNew(value, true));
		}
	}
	
	public static List<String> getAllURLs() {
		Set<String> keys = urlList.keySet();
		List<String> temp = new ArrayList<String>(keys);
		Collections.sort(temp, new Comparator<String>() {
			 public int compare(String o1, String o2) {
				 return (int)(urlList.get(o2).getAverage() - urlList.get(o1).getAverage());
			 }
		});
		return temp;
	}
	
	public static JSONObject getSingleStats(String url) {
		if (urlList.containsKey(url)) {
			return urlList.get(url).toJson();
		}
		return null;
	}
}

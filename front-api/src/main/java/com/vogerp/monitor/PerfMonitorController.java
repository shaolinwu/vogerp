package com.vogerp.monitor;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vogerp.monitor.stats.ConcludeStats;
import com.vogerp.monitor.stats.SingleKPI;
import com.vogerp.monitor.stats.TimeMarkerStats;

@Service
@Controller
@RequestMapping("/sys/monitor")
public class PerfMonitorController {

	private static final String RESULT = "result";
	private static final String RESULT_CODE2 = "code";
	private static final String RESULT_MESSAGE = "msg";
	private static final String JOB_SCHEDULERS = "Job-Schedulers";
	private static final String REALTIME_TASKS = "Realtime-Tasks";
	private static final String RESULT_SUCCESS = "Success";
	private static final String RESULT_CODE = "200";
	private static final String SUCCESS_MSG = "调用成功";

	private static final String RESULT_FAIL = "Fail";
	private static final String RESULT_FAIL_CODE = "500";
	private static final String RESULT_FAIL_MSG = "调用失败";
	private static final String RESULT_FAIL_MSG1 = "没有数据";
	
	@RequestMapping(value = "/info", method = RequestMethod.GET)
    @ResponseBody
	public String getBasicInfo() {
		SortedMap<String, SingleKPI> items = PerfMonitor.getDefaultKPICollector().getAllKIPs();
        items = Collections.checkedSortedMap(items, String.class, SingleKPI.class);
        JSONObject json = new JSONObject();
        try {
	        json.put(RESULT, RESULT_SUCCESS);
	        json.put(RESULT_MESSAGE, SUCCESS_MSG);
			json.put(RESULT_CODE2, RESULT_CODE);
			if (items.containsKey("Start_Time")) {
				json.put("startTime", ((TimeMarkerStats)items.get("Start_Time")).toJson());
			}
        } catch (JSONException e) {
        	try {
	        	json.put(RESULT, RESULT_FAIL);
		        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG);
				json.put(RESULT_CODE2, RESULT_FAIL_CODE);
        	} catch (JSONException e1) {}
        }
        return json.toString();
	}
	
@RequestMapping(value = "/kpis", method = RequestMethod.GET)
	@ResponseBody
	public String getHTMLPageView() {
	    StringBuilder sb = new StringBuilder();
	    sb.append("<html><head><title>Management Monitor</title></head><body>");
	    sb.append("<UL>System URL KPIs: ");
	    List<String> urlitems = URLCollector.getAllURLs();
	    Collections.sort(urlitems);
	    for (String item : urlitems) {
	        sb.append("<LI>").append(item).append(" ").append(URLCollector.getSingleStats(item).toString()).append("</LI>");
	    }
	    sb.append("</UL>");
	    sb.append("<UL>System Default KPIs: ");
	    SortedMap<String, SingleKPI> items = PerfMonitor.getDefaultKPICollector().getAllKIPs();
	    items = Collections.checkedSortedMap(items, String.class, SingleKPI.class);
	    for (Map.Entry<String, SingleKPI> item : items.entrySet()) {
	        sb.append("<LI>").append(item.getKey()).append(" ").append(item.getValue().toString()).append("</LI>");
	    }
	    sb.append("</UL>");
	
	    for (String key : PerfMonitor.getKPICollectorKeys()) {
	        sb.append("<UL>").append(key).append(" KPIs: ");
	        SortedMap<String, SingleKPI> items0 = PerfMonitor.getKPICollector(key).getAllKIPs();
	        items0 = Collections.checkedSortedMap(items0, String.class, SingleKPI.class);
	        for (Map.Entry<String, SingleKPI> item : items0.entrySet()) {
	            sb.append("<LI>").append(item.getKey()).append(" ").append(item.getValue().toString()).append("</LI>");
	        }
	        sb.append("</UL>");
	    }
	
	    sb.append("</body></html>");
	    return sb.toString();
	}

	//	@RequestMapping(value = "/taskbasicinfo", method = RequestMethod.GET)
//	@ResponseBody
	public String getTaskBasicInfo() {
		KPICollector collector = PerfMonitor.getKPICollector(REALTIME_TASKS);
		if (collector != null) {
			JSONObject json = new JSONObject();
			try {
		        json.put(RESULT, RESULT_SUCCESS);
		        json.put(RESULT_MESSAGE, SUCCESS_MSG);
				json.put(RESULT_CODE2, RESULT_CODE);
				SortedMap<String, SingleKPI> items = collector.getAllKIPs();
				if (items.containsKey("RealTime-TaskQueue-Size")) {
					json.put("realTimeTaskQueueSize", items.get("RealTime-TaskQueue-Size").toJson());
				}
				if (items.containsKey("RealTime-RejectedTasks")) {
					json.put("realTimeRejectedTasks", items.get("RealTime-RejectedTasks").toJson());
				}
			} catch (JSONException e) {
	        	try {
		        	json.put(RESULT, RESULT_FAIL);
			        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG1);
					json.put(RESULT_CODE2, RESULT_FAIL_CODE);
	        	} catch (JSONException e1) {}
	        }
	        return json.toString();
		}
		return "";
	}

//	@RequestMapping(value = "/tasklist", method = RequestMethod.GET)
//    @ResponseBody
	public String getTaskList() {
		KPICollector collector = PerfMonitor.getKPICollector(REALTIME_TASKS);
		if (collector != null) {
			long successCount = 0;
			long failureCount = 0;
			SortedMap<String, SingleKPI> items = collector.getAllKIPs();
			JSONArray array = new JSONArray();
			int i=0;
			Set<String> keys = items.keySet();
			for (String key : keys) {
				if (key.startsWith("TASK_SUCCESS_COUNT_")) {
					try {
						JSONObject json = new JSONObject();
						json.put("index", i++);
						json.put("name", key.substring("TASK_SUCCESS_COUNT_".length()));
						array.put(json);
					} catch (JSONException e) {
					}
				}
				if (key.startsWith("TASK_SUCCESS_COUNT_")) {
					successCount += ((ConcludeStats)items.get(key)).getCalls();
				} else if (key.startsWith("TASK_FAILURE_COUNT_")) {
					failureCount += ((ConcludeStats)items.get(key)).getCalls();
				}
			}
			JSONObject json = new JSONObject();
			try {
		        json.put(RESULT, RESULT_SUCCESS);
		        json.put(RESULT_MESSAGE, SUCCESS_MSG);
				json.put(RESULT_CODE2, RESULT_CODE);
				json.put("SuccessCount", successCount);
				json.put("FailureCount", failureCount);
				json.put("taskList", array);
			} catch (JSONException e) {
	        	try {
		        	json.put(RESULT, RESULT_FAIL);
			        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG);
					json.put(RESULT_CODE2, RESULT_FAIL_CODE);
	        	} catch (JSONException e1) {}
	        }
	        return json.toString();
		} else {
			JSONObject json = new JSONObject();
			try {
	        	json.put(RESULT, RESULT_FAIL);
		        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG1);
				json.put(RESULT_CODE2, RESULT_FAIL_CODE);
        	} catch (JSONException e1) {}
			return json.toString();
		}
	}
	
//	@RequestMapping(value = "/taskinfo", method = RequestMethod.GET)
//    @ResponseBody
	public String getTaskInfo(String taskName) {
		KPICollector collector = PerfMonitor.getKPICollector(REALTIME_TASKS);
		if (collector != null) {
			JSONObject json = new JSONObject();
			try {
		        json.put(RESULT, RESULT_SUCCESS);
		        json.put(RESULT_MESSAGE, SUCCESS_MSG);
				json.put(RESULT_CODE2, RESULT_CODE);
				SortedMap<String, SingleKPI> items = collector.getAllKIPs();
				Set<String> keys = items.keySet();
				for (String key : keys) {
					if (key.endsWith(taskName)) {
						String kipType = key.substring(0, key.lastIndexOf('_')).replace("_", "");
						json.put(kipType, items.get(key).toJson());
					}
				}
			} catch (JSONException e) {
	        	try {
		        	json.put(RESULT, RESULT_FAIL);
			        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG);
					json.put(RESULT_CODE2, RESULT_FAIL_CODE);
	        	} catch (JSONException e1) {}
	        }
	        return json.toString();
		} else {
			JSONObject json = new JSONObject();
			try {
	        	json.put(RESULT, RESULT_FAIL);
		        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG1);
				json.put(RESULT_CODE2, RESULT_FAIL_CODE);
        	} catch (JSONException e1) {}
			return json.toString();
		}
	}
	
//	@RequestMapping(value = "/joblist", method = RequestMethod.GET)
//	@ResponseBody
	public String getJobList() {
		KPICollector collector = PerfMonitor.getKPICollector(JOB_SCHEDULERS);
		if (collector != null) {
			long successCount = 0;
			long failureCount = 0;
			SortedMap<String, SingleKPI> items = collector.getAllKIPs();
			JSONArray array = new JSONArray();
			int i=0;
			Set<String> keys = items.keySet();
			for (String key : keys) {
				if (key.startsWith("JOB_SUCCESS_COUNT_")) {
					try {
						JSONObject json = new JSONObject();
						json.put("index", i++);
						json.put("name", key.substring("JOB_SUCCESS_COUNT_".length()));
						array.put(json);
					} catch (JSONException e) {
					}
				}
				if (key.startsWith("JOB_SUCCESS_COUNT_")) {
					successCount += ((ConcludeStats)items.get(key)).getCalls();
				} else if (key.startsWith("JOB_FAILURE_COUNT_")) {
					failureCount += ((ConcludeStats)items.get(key)).getCalls();
				}
			}
			JSONObject json = new JSONObject();
			try {
		        json.put(RESULT, RESULT_SUCCESS);
		        json.put(RESULT_MESSAGE, SUCCESS_MSG);
				json.put(RESULT_CODE2, RESULT_CODE);
				json.put("SuccessCount", successCount);
				json.put("FailureCount", failureCount);
				json.put("jobList", array);
			} catch (JSONException e) {
	        	try {
		        	json.put(RESULT, RESULT_FAIL);
			        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG);
					json.put(RESULT_CODE2, RESULT_FAIL_CODE);
	        	} catch (JSONException e1) {}
	        }
	        return json.toString();
		} else {
			JSONObject json = new JSONObject();
			try {
	        	json.put(RESULT, RESULT_FAIL);
		        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG1);
				json.put(RESULT_CODE2, RESULT_FAIL_CODE);
        	} catch (JSONException e1) {}
			return json.toString();
		}
	}

//	@RequestMapping(value = "/jobinfo", method = RequestMethod.GET)
//    @ResponseBody
	public String getJobInfo(String jobName) {
		KPICollector collector = PerfMonitor.getKPICollector(JOB_SCHEDULERS);
		if (collector != null) {
			JSONObject json = new JSONObject();
			try {
		        json.put(RESULT, RESULT_SUCCESS);
		        json.put(RESULT_MESSAGE, SUCCESS_MSG);
				json.put(RESULT_CODE2, RESULT_CODE);
				SortedMap<String, SingleKPI> items = collector.getAllKIPs();
				Set<String> keys = items.keySet();
				for (String key : keys) {
					if (key.endsWith(jobName)) {
						String kipType = key.substring(0, key.lastIndexOf('_')).replace("_", "");
						json.put(kipType, items.get(key).toJson());
					}
				}
			} catch (JSONException e) {
	        	try {
		        	json.put(RESULT, RESULT_FAIL);
			        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG);
					json.put(RESULT_CODE2, RESULT_FAIL_CODE);
	        	} catch (JSONException e1) {}
	        }
	        return json.toString();
		} else {
			JSONObject json = new JSONObject();
			try {
	        	json.put(RESULT, RESULT_FAIL);
		        json.put(RESULT_MESSAGE, RESULT_FAIL_MSG1);
				json.put(RESULT_CODE2, RESULT_FAIL_CODE);
        	} catch (JSONException e1) {}
			return json.toString();
		}
	}
	
    @RequestMapping(value = "/clean", method = RequestMethod.GET)
    @ResponseBody
    public String resetAll() {
        SortedMap<String, SingleKPI> items = PerfMonitor.getDefaultKPICollector().getAllKIPs();
        items = Collections.checkedSortedMap(items, String.class, SingleKPI.class);
        for (Map.Entry<String, SingleKPI> item : items.entrySet()) {
            item.getValue().reset();
        }
        for (String key : PerfMonitor.getKPICollectorKeys()) {
            SortedMap<String, SingleKPI> items0 = PerfMonitor.getKPICollector(key).getAllKIPs();
            for (Map.Entry<String, SingleKPI> item : items0.entrySet()) {
                item.getValue().reset();
            }
        }
        JSONObject json = new JSONObject();
        try {
	        json.put(RESULT, RESULT_SUCCESS);
	        json.put(RESULT_MESSAGE, SUCCESS_MSG);
			json.put(RESULT_CODE2, RESULT_CODE);
        } catch (JSONException e) {}
		return json.toString();
    }
}

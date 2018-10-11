package com.vogerp.common.utils;

import java.io.IOException;

import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSONObject;
import com.vogerp.common.exception.BusinessException;

public class HttpClient {
	
	public static JSONObject httpPost(String url, JSONObject jsonParam) {
		// post请求返回结果
		CloseableHttpClient httpClient = HttpClients.createDefault();
		JSONObject jsonResult = null;
		HttpPost httpPost = new HttpPost(url);
		// 设置请求和传输超时时间
		try {
			if (null != jsonParam) {
				// 解决中文乱码问题
				StringEntity entity = new StringEntity(jsonParam.toString(), "utf-8");
				entity.setContentEncoding("UTF-8");
				entity.setContentType("application/json");
				httpPost.setEntity(entity);
			}
			CloseableHttpResponse result = httpClient.execute(httpPost);
			String str = EntityUtils.toString(result.getEntity(), "utf-8");
			jsonResult = JSONObject.parseObject(str);
			
		} catch (IOException e) {
			
		} finally {
			httpPost.releaseConnection();
		}
		return jsonResult;
	}
	
	public static JSONObject httpPost(String url, String strParam) {
		// post请求返回结果
		CloseableHttpClient httpClient = HttpClients.createDefault();
		JSONObject jsonResult = null;
		HttpPost httpPost = new HttpPost(url);
		try {
			if (null != strParam) {
				// 解决中文乱码问题
				StringEntity entity = new StringEntity(strParam, "utf-8");
				entity.setContentEncoding("UTF-8");
				entity.setContentType("application/x-www-form-urlencoded");
				httpPost.setEntity(entity);
			}
			CloseableHttpResponse result = httpClient.execute(httpPost);
			// 请求发送成功，并得到响应
			if (result.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
				String str = "";
				try {
					// 读取服务器返回过来的json字符串数据
					str = EntityUtils.toString(result.getEntity(), "utf-8");
					// 把json字符串转换成json对象
					jsonResult = JSONObject.parseObject(str);
				} catch (Exception e) {
					throw new BusinessException(e.getMessage());
				}
			}
		} catch (IOException e) {
			throw new BusinessException(e.getMessage());
		} finally {
			httpPost.releaseConnection();
		}
		return jsonResult;
	}
}

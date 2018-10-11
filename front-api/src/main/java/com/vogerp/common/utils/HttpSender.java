/*
* Copyright 2015 The UIMaster Project
*
* The UIMaster Project licenses this file to you under the Apache License,
* version 2.0 (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at:
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*/
package com.vogerp.common.utils;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.charset.Charset;
import java.nio.charset.CodingErrorAction;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocket;

import org.apache.http.Consts;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpRequest;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.config.AuthSchemes;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.ConnectionConfig;
import org.apache.http.config.MessageConstraints;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.config.SocketConfig;
import org.apache.http.conn.DnsResolver;
import org.apache.http.conn.HttpConnectionFactory;
import org.apache.http.conn.ManagedHttpClientConnection;
import org.apache.http.conn.routing.HttpRoute;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.conn.ssl.X509HostnameVerifier;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.DefaultHttpResponseFactory;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.DefaultHttpResponseParser;
import org.apache.http.impl.conn.DefaultHttpResponseParserFactory;
import org.apache.http.impl.conn.ManagedHttpClientConnectionFactory;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.impl.conn.SystemDefaultDnsResolver;
import org.apache.http.impl.io.DefaultHttpRequestWriterFactory;
import org.apache.http.io.HttpMessageParser;
import org.apache.http.io.HttpMessageParserFactory;
import org.apache.http.io.HttpMessageWriterFactory;
import org.apache.http.io.SessionInputBuffer;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicLineParser;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.message.LineParser;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.SSLContexts;
import org.apache.http.util.CharArrayBuffer;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 */
public class HttpSender {

	private static final Logger logger = LoggerFactory.getLogger(HttpSender.class);

	private PoolingHttpClientConnectionManager connManager;
	private CookieStore cookieStore;
	private CredentialsProvider credentialsProvider;
	private RequestConfig defaultRequestConfig;
	private CloseableHttpClient httpclient;
	
    public HttpSender() {

        // Use custom message parser / writer to customize the way HTTP
        // messages are parsed from and written out to the data stream.
        HttpMessageParserFactory<HttpResponse> responseParserFactory = new DefaultHttpResponseParserFactory() {

            @Override
            public HttpMessageParser<HttpResponse> create(
                SessionInputBuffer buffer, MessageConstraints constraints) {
                LineParser lineParser = new BasicLineParser() {

                    @Override
                    public Header parseHeader(final CharArrayBuffer buffer) {
                        try {
                            return super.parseHeader(buffer);
                        } catch (ParseException ex) {
                            return new BasicHeader(buffer.toString(), null);
                        }
                    }

                };
                return new DefaultHttpResponseParser(
                    buffer, lineParser, DefaultHttpResponseFactory.INSTANCE, constraints) {

                    @Override
                    protected boolean reject(final CharArrayBuffer line, int count) {
                        // try to ignore all garbage preceding a status line infinitely
                        return false;
                    }

                };
            }

        };
        HttpMessageWriterFactory<HttpRequest> requestWriterFactory = new DefaultHttpRequestWriterFactory();

        // Use a custom connection factory to customize the process of
        // initialization of outgoing HTTP connections. Beside standard connection
        // configuration parameters HTTP connection factory can define message
        // parser / writer routines to be employed by individual connections.
        HttpConnectionFactory<HttpRoute, ManagedHttpClientConnection> connFactory = new ManagedHttpClientConnectionFactory(
                requestWriterFactory, responseParserFactory);

        // Client HTTP connection objects when fully initialized can be bound to
        // an arbitrary network socket. The process of network socket initialization,
        // its connection to a remote address and binding to a local one is controlled
        // by a connection socket factory.

        // SSL context for secure connections can be created either based on
        // system or application specific properties.
        SSLContext sslcontext = SSLContexts.createSystemDefault();

        // Create a registry of custom connection socket factories for supported
        // protocol schemes.
        Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
            .register("http", PlainConnectionSocketFactory.INSTANCE)
            .register("https", new SSLConnectionSocketFactory(sslcontext))
            .build();

        // Use custom DNS resolver to override the system DNS resolution.
        DnsResolver dnsResolver = new SystemDefaultDnsResolver() {

            @Override
            public InetAddress[] resolve(final String host) throws UnknownHostException {
                if (host.equalsIgnoreCase("localhost")) {
                    return new InetAddress[] { InetAddress.getByAddress(new byte[] {127, 0, 0, 1}) };
                } else {
                    return super.resolve(host);
                }
            }

        };

        // Create a connection manager with custom configuration.
        connManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry, connFactory, dnsResolver);

        // Create socket configuration
		SocketConfig socketConfig = SocketConfig.custom().setTcpNoDelay(true).build();
		
        // Configure the connection manager to use socket configuration either
        // by default or for a specific host.
        connManager.setDefaultSocketConfig(socketConfig);
//        connManager.setSocketConfig(new HttpHost("somehost", 80), socketConfig);
        // Validate connections after 1 sec of inactivity
        connManager.setValidateAfterInactivity(1000);

        // Create message constraints
        MessageConstraints messageConstraints = MessageConstraints.custom()
            .setMaxHeaderCount(200)
            .setMaxLineLength(2000)
            .build();
        // Create connection configuration
        ConnectionConfig connectionConfig = ConnectionConfig.custom()
            .setMalformedInputAction(CodingErrorAction.IGNORE)
            .setUnmappableInputAction(CodingErrorAction.IGNORE)
            .setCharset(Consts.UTF_8)
            .setMessageConstraints(messageConstraints)
            .build();
        // Configure the connection manager to use connection configuration either
        // by default or for a specific host.
        connManager.setDefaultConnectionConfig(connectionConfig);
//        connManager.setConnectionConfig(new HttpHost("somehost", 80), ConnectionConfig.DEFAULT);

        // Configure total max or per route limits for persistent connections
        // that can be kept in the pool or leased by the connection manager.
//        connManager.setMaxTotal(100);
//        connManager.setDefaultMaxPerRoute(10);
//        connManager.setMaxPerRoute(new HttpRoute(new HttpHost("somehost", 80)), 20);

        // Use custom cookie store if necessary.
        this.cookieStore = new BasicCookieStore();
        // Use custom credentials provider if necessary.
        this.credentialsProvider = new BasicCredentialsProvider();
        // Create global request configuration
        this.defaultRequestConfig = RequestConfig.custom()
            .setCookieSpec(CookieSpecs.DEFAULT)
            .setExpectContinueEnabled(true)
            .setTargetPreferredAuthSchemes(Arrays.asList(AuthSchemes.NTLM, AuthSchemes.DIGEST))
            .setProxyPreferredAuthSchemes(Arrays.asList(AuthSchemes.BASIC))
            .build();

        // Create an HttpClient with the given custom dependencies and configuration.
        this.httpclient = HttpClients.custom()
            .setConnectionManager(connManager)
            .setDefaultCookieStore(cookieStore)
            .setDefaultCredentialsProvider(credentialsProvider)
            .setDefaultRequestConfig(defaultRequestConfig)
            .build();

    }

    public boolean post(String url, byte[] rawMessage) {
    	HttpPost httppost = new HttpPost(url);
        // Request configuration can be overridden at the request level.
        // They will take precedence over the one set at the client level.
        RequestConfig requestConfig = RequestConfig.copy(defaultRequestConfig)
            .setSocketTimeout(5000)
            .setConnectTimeout(5000)
            .setConnectionRequestTimeout(5000)
            .build();
        httppost.setConfig(requestConfig);
        httppost.setEntity(new ByteArrayEntity(rawMessage));
        
        return post0(httppost);
    }
    
	public boolean post(String url, String content)
			throws IOException, ClientProtocolException {
        HttpPost httppost = new HttpPost(url);
        // Request configuration can be overridden at the request level.
        // They will take precedence over the one set at the client level.
        RequestConfig requestConfig = RequestConfig.copy(defaultRequestConfig)
            .setSocketTimeout(5000)
            .setConnectTimeout(5000)
            .setConnectionRequestTimeout(5000)
            .build();
        httppost.setConfig(requestConfig);
        httppost.setEntity(new StringEntity(content,
                ContentType.create("text/plain", Consts.UTF_8)));
        
        return post0(httppost);
	}
	
	public boolean postJson(String url, String content)
			throws IOException, ClientProtocolException {
        HttpPost httppost = new HttpPost(url);
        // Request configuration can be overridden at the request level.
        // They will take precedence over the one set at the client level.
        RequestConfig requestConfig = RequestConfig.copy(defaultRequestConfig)
            .setSocketTimeout(5000)
            .setConnectTimeout(5000)
            .setConnectionRequestTimeout(5000)
            .build();
        httppost.setConfig(requestConfig);
        httppost.setEntity(new StringEntity(content,
                ContentType.create("application/json", Consts.UTF_8)));
        
        return post0(httppost);
	}
	
	public boolean post(String url, Map<String, String> pairs)
			throws IOException, ClientProtocolException {
        HttpPost httppost = new HttpPost(url);
        // Request configuration can be overridden at the request level.
        // They will take precedence over the one set at the client level.
        RequestConfig requestConfig = RequestConfig.copy(defaultRequestConfig)
            .setSocketTimeout(5000)
            .setConnectTimeout(5000)
            .setConnectionRequestTimeout(5000)
            .build();
        httppost.setConfig(requestConfig);
        
    	List<NameValuePair> formparams = new ArrayList<NameValuePair>();
    	Set<String> keys = pairs.keySet();
    	for (String key: keys) {
    		formparams.add(new BasicNameValuePair(key, pairs.get(key)));
    	}
		UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams, Consts.UTF_8);
        httppost.setEntity(entity);
        
        return post0(httppost);
	}

	public boolean post0(HttpPost httppost) {
		// Execution context can be customized locally.
        HttpClientContext context = HttpClientContext.create();
        // Contextual attributes set the local context level will take
        // precedence over those set at the client level.
        context.setCookieStore(cookieStore);
        context.setCredentialsProvider(credentialsProvider);
        
        if (logger.isDebugEnabled()) {
        	logger.debug("executing request " + httppost.getURI());
        }
        CloseableHttpResponse response;
		try {
			response = httpclient.execute(httppost, context);
		} catch (ClientProtocolException e) {
			logger.warn(e.getMessage(), e);
			return false;
		} catch (IOException e) {
			logger.warn(e.getMessage(), e);
			return false;
		}
        try {
        	if (logger.isDebugEnabled()) {
            	logger.debug("----------------------------------------");
            	logger.debug(response.getStatusLine().toString());
            	try {
					logger.debug(EntityUtils.toString(response.getEntity()));
				} catch (ParseException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
            	logger.debug("----------------------------------------");
        	}
        	if (response.getStatusLine().getStatusCode() != 200) {
        		if (logger.isDebugEnabled()) {
                	logger.warn("Failed to execute http request: {0}. {1}", 
                			new Object[]{httppost.getURI(), response.getStatusLine().getStatusCode()});
                }
        		return false;
        	}
        	return true;
        } finally {
            try {
				response.close();
			} catch (IOException e) {
			}
        }
	}
	
	public String get(String url) throws IOException, ClientProtocolException {
        HttpGet httpget = new HttpGet(url);
        // Request configuration can be overridden at the request level.
        // They will take precedence over the one set at the client level.
        RequestConfig requestConfig = RequestConfig.copy(defaultRequestConfig)
            .setSocketTimeout(5000)
            .setConnectTimeout(5000)
            .setConnectionRequestTimeout(5000)
            .build();
        httpget.setConfig(requestConfig);

        return get0(httpget);
	}
	
	public String get(String url, Map<String, String> pairs)
			throws IOException, ClientProtocolException {
		List<NameValuePair> formparams = new ArrayList<NameValuePair>();
		Set<String> keys = pairs.keySet();
		for (String key: keys) {
			formparams.add(new BasicNameValuePair(key, pairs.get(key)));
		}
		UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams, Consts.UTF_8);
		url = url + entity.toString();
        HttpGet httpget = new HttpGet(url);
        // Request configuration can be overridden at the request level.
        // They will take precedence over the one set at the client level.
        RequestConfig requestConfig = RequestConfig.copy(defaultRequestConfig)
            .setSocketTimeout(5000)
            .setConnectTimeout(5000)
            .setConnectionRequestTimeout(5000)
            .build();
        httpget.setConfig(requestConfig);
		
        return get0(httpget);
	}

	public String get0(HttpGet httpget) throws IOException {
		// Execution context can be customized locally.
        HttpClientContext context = HttpClientContext.create();
        // Contextual attributes set the local context level will take
        // precedence over those set at the client level.
        context.setCookieStore(cookieStore);
        context.setCredentialsProvider(credentialsProvider);

        if (logger.isDebugEnabled()) {
        	logger.debug("executing request " + httpget.getURI());
        }
        CloseableHttpResponse response;
		try {
			response = httpclient.execute(httpget, context);
		} catch (ClientProtocolException e) {
			logger.warn(e.getMessage(), e);
			return "";
		} catch (IOException e) {
			logger.warn(e.getMessage(), e);
			return "";
		}
        try {
        	if (response.getStatusLine().getStatusCode() != 200) {
        		if (logger.isDebugEnabled()) {
                	logger.warn("Failed to execute http request: {0}. {1}", 
                			new Object[]{httpget.getURI(), response.getStatusLine().getStatusCode()});
                }
        		return "";
        	} else {
                return EntityUtils.toString(response.getEntity(), Charset.defaultCharset());
        	}
        } finally {
            try {
				response.close();
			} catch (IOException e) {
			}
        }
	}

	/**
	 * send HTTPS get request
	 * 
	 * @param url
	 * @param charset
	 * @return
	 * @throws Exception
	 */
	public String doGetSSL(String url, String charset) throws Exception {
		// create SSL connection
		CloseableHttpClient httpClient = HttpClients.custom()
				.setSSLSocketFactory(createSSLSocketFactory())
				.setConnectionManager(connManager)
				.setDefaultRequestConfig(defaultRequestConfig).build();
		// send get request
		HttpGet httpGet = new HttpGet(url);
		CloseableHttpResponse response = httpClient.execute(httpGet);
		return getResult(response, charset);
	}

	/**
	 * send HTTPS post request by K-V params
	 * 
	 * @param url
	 * @param params
	 * @param charset
	 * @return
	 * @throws Exception
	 */
	public String doPostSSL(String url, Map<String, Object> params,
			String charset) throws Exception {
		// create SSL connection
		CloseableHttpClient httpClient = getHttpsClient();
		// send post request
		HttpPost httpPost = new HttpPost(url);
		CloseableHttpResponse response = null;
		try {
			httpPost.setConfig(defaultRequestConfig);
			List<NameValuePair> pairs = new ArrayList<>(params.size());
			for (Map.Entry<String, Object> entry : params.entrySet()) {
				NameValuePair pair = new BasicNameValuePair(entry.getKey(),
						entry.getValue().toString());
				pairs.add(pair);
			}
			httpPost.setEntity(new UrlEncodedFormEntity(pairs, charset));
			response = httpClient.execute(httpPost);
			return getResult(response, charset);
		} finally {
			if (response != null) {
				EntityUtils.consume(response.getEntity());
			}
		}
	}

	/**
	 * send HTTPS request by json params
	 * 
	 * @param url
	 * @param text
	 * @param charset
	 * @return
	 * @throws Exception
	 */
	public String doPostSSL(String url, String text, String charset)
			throws Exception {
		return doPostSSL(url, text, charset, "text/plain");
	}
	
	public String doPostSSL(String url, String text, String charset, String contentType)
			throws Exception {
		CloseableHttpClient httpClient = getHttpsClient();
		HttpPost httpPost = new HttpPost(url);
		CloseableHttpResponse response = null;
		try {
			StringEntity entity = new StringEntity(text, Consts.UTF_8);
			entity.setContentEncoding(charset);
			entity.setContentType(contentType);
			httpPost.setEntity(entity);
			response = httpClient.execute(httpPost);
			return getResult(response, charset);
		} finally {
			if (response != null) {
				EntityUtils.consume(response.getEntity());
			}
		}
	}
	
	public String doPostSSLWithJson(String url, String json, String charset)
			throws Exception {
		CloseableHttpClient httpClient = getHttpsClient();
		HttpPost httpPost = new HttpPost(url);
		CloseableHttpResponse response = null;
		try {
			StringEntity entity = new StringEntity(json, Consts.UTF_8);
			entity.setContentEncoding(charset);
			entity.setContentType("application/json");
			httpPost.setEntity(entity);
			response = httpClient.execute(httpPost);
			return getResult(response, charset);
		} finally {
			if (response != null) {
				EntityUtils.consume(response.getEntity());
			}
		}
	}

	/**
	 * create http client
	 * 
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws KeyStoreException
	 * @throws KeyManagementException
	 */
	private CloseableHttpClient getHttpsClient()
			throws NoSuchAlgorithmException, KeyStoreException,
			KeyManagementException {
		return HttpClients.custom()
				.setSSLSocketFactory(createSSLSocketFactory())
				.setConnectionManager(connManager)
				.setDefaultRequestConfig(defaultRequestConfig).build();
	}

	/**
	 * resolve response
	 * 
	 * @param response
	 * @param charset
	 * @return
	 * @throws IOException
	 */
	private static String getResult(CloseableHttpResponse response,
			String charset) throws IOException {
		int statusCode = response.getStatusLine().getStatusCode();
		if (statusCode != HttpStatus.SC_OK) {
			return null;
		}
		HttpEntity httpEntity = response.getEntity();
		if (null == httpEntity) {
			return null;
		}
		return EntityUtils.toString(httpEntity, charset);
	}

	/**
	 * create SSL security connection
	 * 
	 * @return
	 */
	@SuppressWarnings("Convert2Lambda")
	private static SSLConnectionSocketFactory createSSLSocketFactory()
			throws KeyStoreException, NoSuchAlgorithmException,
			KeyManagementException {
		SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null,
				new TrustStrategy() {
					@Override
					public boolean isTrusted(
							X509Certificate[] x509Certificates, String s)
							throws CertificateException {
						return true;
					}
				}).build();
		return new SSLConnectionSocketFactory(sslContext,
				new X509HostnameVerifier() {
					@Override
					public void verify(String s, SSLSocket sslSocket)
							throws IOException {
					}

					@Override
					public void verify(String s, X509Certificate x509Certificate)
							throws SSLException {
					}

					@Override
					public void verify(String s, String[] strings,
							String[] strings1) throws SSLException {
					}

					@Override
					public boolean verify(String s, SSLSession sslSession) {
						return true;
					}
				});
	}

	
	public void shutdown() {
		connManager.shutdown();
	}

}

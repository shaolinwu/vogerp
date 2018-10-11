package com.vogerp.common.utils;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.activation.CommandMap;
import javax.activation.MailcapCommandMap;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.security.Security;
import java.util.Properties;

import java.util.Date;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;

public class MailUtils {
	private static final String HOST = "smtp.exmail.qq.com";
	private static final Integer PORT = 465;
	private static final String USERNAME = "registry@hashincubator.cn";
	private static final String USER = "registry";
	private static final String PASSWORD = "ZAQ!2wsx";
	private static final String EMAILFORM = "registry@hashincubator.cn";
	private static JavaMailSenderImpl mailSender = createMailSender();

	/**
	 * 邮件发送器
	 *
	 * @return 配置好的工具
	 */
	private static JavaMailSenderImpl createMailSender() {
		JavaMailSenderImpl sender = new JavaMailSenderImpl();
		sender.setHost(HOST);
		sender.setPort(PORT);
		sender.setUsername(USERNAME);
		sender.setPassword(PASSWORD);
		sender.setDefaultEncoding("Utf-8");
		Properties p = new Properties();
		p.setProperty("mail.smtp.timeout", "25000");
		p.setProperty("mail.smtp.auth", "false");
		sender.setJavaMailProperties(p);
		return sender;
	}

	/**
	 * 发送邮件
	 *
	 * @param to
	 *            接受人
	 * @param subject
	 *            主题
	 * @param html
	 *            发送内容
	 * @throws MessagingException
	 *             异常
	 * @throws UnsupportedEncodingException
	 *             异常
	 */
	public static void sendHtmlMail(String to, String subject, String html)
			throws MessagingException, UnsupportedEncodingException {

		MailcapCommandMap mc = (MailcapCommandMap) CommandMap.getDefaultCommandMap();
		mc.addMailcap("text/html;; x-java-content-handler=com.sun.mail.handlers.text_html");
		mc.addMailcap("text/xml;; x-java-content-handler=com.sun.mail.handlers.text_xml");
		mc.addMailcap("text/plain;; x-java-content-handler=com.sun.mail.handlers.text_plain");
		mc.addMailcap("multipart/*;; x-java-content-handler=com.sun.mail.handlers.multipart_mixed");
		mc.addMailcap("message/rfc822;; x-java-content-handler=com.sun.mail.handlers.message_rfc822");
		CommandMap.setDefaultCommandMap(mc);

		MimeMessage mimeMessage = mailSender.createMimeMessage();
		// 设置utf-8或GBK编码，否则邮件会有乱码
		MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
		messageHelper.setFrom(EMAILFORM, "registry@hashincubator.cn");
		messageHelper.setTo(to);
		messageHelper.setSubject(subject);
		messageHelper.setText(html, true);
		mailSender.send(mimeMessage);
	}

	public static void sendSSLEmil(String to, String titile, String message) {
		try {
			Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
			final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
			// 设置邮件会话参数
			Properties props = new Properties();
			// 邮箱的发送服务器地址
			props.setProperty("mail.smtp.host", HOST);
			props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
			props.setProperty("mail.smtp.socketFactory.fallback", "false");
			// 邮箱发送服务器端口,这里设置为465端口
			props.setProperty("mail.smtp.port", "465");
			props.setProperty("mail.smtp.socketFactory.port", "465");
			props.put("mail.smtp.auth", "true");
			final String username = USERNAME;
			final String password = PASSWORD;
			// 获取到邮箱会话,利用匿名内部类的方式,将发送者邮箱用户名和密码授权给jvm
			Session session = Session.getDefaultInstance(props, new Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(username, password);
				}
			});
			// 通过会话,得到一个邮件,用于发送
			Message msg = new MimeMessage(session);
			// 设置发件人
			msg.setFrom(new InternetAddress(USERNAME));
			// 设置收件人,to为收件人,cc为抄送,bcc为密送
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to, false));
			msg.setRecipients(Message.RecipientType.CC, InternetAddress.parse(to, false));
			msg.setRecipients(Message.RecipientType.BCC, InternetAddress.parse(to, false));
			msg.setSubject(titile);
			// 设置邮件消息
			msg.setText(message);
			// 设置发送的日期
			msg.setSentDate(new Date());

			// 调用Transport的send方法去发送邮件
			Transport.send(msg);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void main(String[] args) {
		try {
//			MailUtils.sendHtmlMail("87157853@qq.com", "ceshi", "welcome to hash incubator");
			MailUtils.sendSSLEmil("87157853@qq.com", "ceshi", "welcome to hash incubator");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
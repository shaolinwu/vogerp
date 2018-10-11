package com.vogerp.event.domain;

import java.io.Serializable;
import java.util.Date;



/**
 * 异步事件表
 * 
 * @date 2018-09-10 16:18:12
 */
public class EventDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	public static final int SUCCESS_CODE = EventStatus.SUCCESS.getState();
	public static final int FAILED_CODE = EventStatus.FAILED.getState();
	
	public enum EventStatus {
		PENDING(0), EXECUTING(1), SUCCESS(2), FAILED(3);
		
		int state;
		
		private EventStatus(int state) {
			this.state = state;
		}
		
		public int getState() {
			return this.state;
		}
	}
	
	//
	private Long id;
	//用户ID保证执行顺序
	private Long userId;
	//事件类型（类名）
	private String eventtype;
	//事件绑定的消息内容
	private String msg;
	//事件执行状态
	private Integer state = EventStatus.PENDING.getState();
	//是否失败重试
	private Boolean retry = Boolean.TRUE;
	//生成事件时间
	private Date createdate = new Date();
	//事件被执行次数
	private Integer execount = 0;
	//新状态更新时间
	private Date updatedate;
	//新状态切换结果
	private String updatemsg;

	/**
	 * 设置：
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 获取：
	 */
	public Long getId() {
		return id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	/**
	 * 设置：事件类型（类名）
	 */
	public void setEventtype(String eventtype) {
		this.eventtype = eventtype;
	}
	/**
	 * 获取：事件类型（类名）
	 */
	public String getEventtype() {
		return eventtype;
	}
	/**
	 * 设置：事件绑定的消息内容
	 */
	public void setMsg(String msg) {
		this.msg = msg;
	}
	/**
	 * 获取：事件绑定的消息内容
	 */
	public String getMsg() {
		return msg;
	}
	/**
	 * 设置：事件执行状态
	 */
	public void setState(Integer state) {
		this.state = state;
	}
	/**
	 * 获取：事件执行状态
	 */
	public Integer getState() {
		return state;
	}
	/**
	 * 设置：是否失败重试
	 */
	public void setRetry(Boolean retry) {
		this.retry = retry;
	}
	/**
	 * 获取：是否失败重试
	 */
	public Boolean getRetry() {
		return retry;
	}
	/**
	 * 设置：生成事件时间
	 */
	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}
	/**
	 * 获取：生成事件时间
	 */
	public Date getCreatedate() {
		return createdate;
	}
	/**
	 * 设置：事件被执行次数
	 */
	public void setExecount(Integer execount) {
		this.execount = execount;
	}
	/**
	 * 获取：事件被执行次数
	 */
	public Integer getExecount() {
		return execount;
	}
	/**
	 * 设置：新状态更新时间
	 */
	public void setUpdatedate(Date updatedate) {
		this.updatedate = updatedate;
	}
	/**
	 * 获取：新状态更新时间
	 */
	public Date getUpdatedate() {
		return updatedate;
	}
	/**
	 * 设置：新状态切换结果
	 */
	public void setUpdatemsg(String updatemsg) {
		this.updatemsg = updatemsg;
	}
	/**
	 * 获取：新状态切换结果
	 */
	public String getUpdatemsg() {
		return updatemsg;
	}
}

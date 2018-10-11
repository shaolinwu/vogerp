package com.vogerp.common.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 短信息
 *
 * @date 2017-09-19 16:02:20
 */
public class SMSMessageDO implements Serializable {
    private static final long serialVersionUID = 1L;

    // PK
    private Long id;
    // 短信息类型：1.注册，2.找回密码
    private Integer type;
    // 手机号
    private String mobile;
    // 短信码
    private String code;
    // 创建时间
    private Date createDate;


    public SMSMessageDO() {
        super();
    }

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

    /**
     * 设置：文件类型
     */
    public void setType(Integer type) {
        this.type = type;
    }

    /**
     */
    public Integer getType() {
        return type;
    }

    public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	/**
     * 设置：创建时间
     */
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    /**
     * 获取：创建时间
     */
    public Date getCreateDate() {
        return createDate;
    }

}

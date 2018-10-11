package com.vogerp.user.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class UserDO implements Serializable {
    private static final long serialVersionUID = 1L;
    // 主键
    private Long userId;
    // 手机号
    private String mobile;
    // 用户名
    private String username;
    // 用户真实姓名
    private String name;
    // 用户Nickname
    private String nickname;
    // 密码
    private String password;
    // 登录后调用API授权码
    private String authCode;
    // 微信openid
    private String wechatOpenId;
    // 微信UnionId
    private String wechatUnionId;
    // 最后一次登录时间
    private Date lastLoginTime;
    // 自己的邀请码
    private String myInvitedCode;
    // 别人的邀请码
    private String invitedCode;
    // 部门
    private Long deptId;
    private String deptName;
    // 邮箱
    private String email;
    // 状态 0:禁用，1:正常
    private Integer status;
    // KYC 0:未实名验证, 1:实名验证申请中，2：实名验证通过，3：实名验证失败
    private Integer kycStatus;
    // 身份证号
    private String idNumber;
    // 身份证正面
    private String idCard;
    // 身份证反面
    private String idCardBackside;
    // 身份证与本人
    private String idCardWithHuman;
    
    // 创建用户id
    private Long userIdCreate;
    // 创建时间
    private Date gmtCreate;
    // 修改时间
    private Date gmtModified;
    //性别
    private Long sex;
    //出身日期
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birth;
    //图片ID
    private Long picId;
    //微信头像URL
    private String headImgUrl;
    //现居住地
    private String liveAddress;
    //爱好
    private String hobby;
    //省份
    private String province;
    //所在城市
    private String city;
    //所在地区
    private String district;
    
    private String regIp;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
    public String getWechatOpenId() {
		return wechatOpenId;
	}

	public void setWechatOpenId(String wechatOpenId) {
		this.wechatOpenId = wechatOpenId;
	}
	
	public String getWechatUnionId() {
		return wechatUnionId;
	}

	public void setWechatUnionId(String wechatUnionId) {
		this.wechatUnionId = wechatUnionId;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	public String getHeadImgUrl() {
		return headImgUrl;
	}

	public void setHeadImgUrl(String headImgUrl) {
		this.headImgUrl = headImgUrl;
	}

	public String getAuthCode() {
		return authCode;
	}

	public void setAuthCode(String authCode) {
		this.authCode = authCode;
	}

	public String getInvitedCode() {
		return invitedCode;
	}

	public void setInvitedCode(String invitedCode) {
		this.invitedCode = invitedCode;
	}
	
	public String getMyInvitedCode() {
		return myInvitedCode;
	}

	public void setMyInvitedCode(String myInvitedCode) {
		this.myInvitedCode = myInvitedCode;
	}

	public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	public Date getLastLoginTime() {
		return lastLoginTime;
	}

	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Integer getStatus() {
        return status;
    }
    
    public Integer getKycStatus() {
		return kycStatus;
	}
    
    public String toKYCAllMessage() {
    		return "0:未实名验证, 1:实名验证申请中，2：实名验证通过，3：实名验证失败";
    }
    
    public String toKYCMessage() {
    		//0:未实名验证, 1:实名验证申请中，2：实名验证通过，3：实名验证失败
    		if (kycStatus == 0) {
    			return "未实名验证";
    		}
    		if (kycStatus == 1) {
    			return "实名验证申请中";
    		}
    		if (kycStatus == 2) {
    			return "实名验证通过";
    		}
    		if (kycStatus == 3) {
    			return "实名验证失败";
    		}
    		return "";
    }
    
    public String toKYCEnMessage() {
		//0:未实名验证, 1:实名验证申请中，2：实名验证通过，3：实名验证失败
		if (kycStatus == 0) {
			return "Real-name Authentication Not Started";
		}
		if (kycStatus == 1) {
			return "Requested for Real-name Authentication";
		}
		if (kycStatus == 2) {
			return "Real-name Authentication Passed";
		}
		if (kycStatus == 3) {
			return "Real-name Authentication Failed";
		}
		return "Unknown";
}

	public void setKycStatus(Integer kycStatus) {
		this.kycStatus = kycStatus;
	}

	public void setStatus(Integer status) {
        this.status = status;
    }

    public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}

	public String getIdCard() {
		return idCard;
	}

	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}

	public String getIdCardBackside() {
		return idCardBackside;
	}

	public void setIdCardBackside(String idCardBackside) {
		this.idCardBackside = idCardBackside;
	}

	public String getIdCardWithHuman() {
		return idCardWithHuman;
	}

	public void setIdCardWithHuman(String idCardWithHuman) {
		this.idCardWithHuman = idCardWithHuman;
	}

	public Long getUserIdCreate() {
        return userIdCreate;
    }

    public void setUserIdCreate(Long userIdCreate) {
        this.userIdCreate = userIdCreate;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    public Long getSex() {
        return sex;
    }

    public void setSex(Long sex) {
        this.sex = sex;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public Long getPicId() {
        return picId;
    }

    public void setPicId(Long picId) {
        this.picId = picId;
    }

    public String getLiveAddress() {
        return liveAddress;
    }

    public void setLiveAddress(String liveAddress) {
        this.liveAddress = liveAddress;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    @Override
    public String toString() {
        return "UserDO{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", deptId=" + deptId +
                ", deptName='" + deptName + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", status=" + status +
                ", userIdCreate=" + userIdCreate +
                ", gmtCreate=" + gmtCreate +
                ", gmtModified=" + gmtModified +
                ", sex=" + sex +
                ", birth=" + birth +
                ", picId=" + picId +
                ", liveAddress='" + liveAddress + '\'' +
                ", hobby='" + hobby + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", district='" + district + '\'' +
                '}';
    }

	public String getRegIp() {
		return regIp;
	}

	public void setRegIp(String regIp) {
		this.regIp = regIp;
	}
    
}

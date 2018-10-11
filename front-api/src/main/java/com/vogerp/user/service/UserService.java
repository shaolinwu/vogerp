package com.vogerp.user.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.vogerp.user.domain.UserDO;
import com.vogerp.user.domain.UserInvDo;

@Service
public interface UserService {
	
	UserDO get(Long id, String authCode);
	
	List<UserDO> list(Map<String, Object> map);

	int count(Map<String, Object> map);

	/**
	 * 更新个人信息
	 * @param userDO
	 * @return
	 */
	int updatePersonal(UserDO userDO);
	
	int updatePassword(UserDO userDO) ;
	
	/**
     * 用户注册
     * @param userDO
     * @return
     */
    int registerPersonal(UserDO userDO);

	/**
	 * 更新个人图片
	 * @param file 图片
	 * @param avatar_data 裁剪信息
	 * @param userId 用户ID
	 * @throws Exception
	 */
    Map<String, Object> updatePersonalImg(MultipartFile file, String avatar_data, Long userId) throws Exception;
    
    /**
     * 生成个人广告图片
     * @param invitedCode
     * @param userId
     */
    public boolean createPosterImg(String invitedCode, Long userId);
    
    //根据用户名获取 自己ID 和 邀请人ID
	UserInvDo getSelfUserIdAndInvUserId(String refereeUsername);

	UserInvDo getSelfUserIdAndInvUserId(Long userId);

}

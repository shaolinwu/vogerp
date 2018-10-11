package com.vogerp.user.service.impl;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.vogerp.common.config.BootdoConfig;
import com.vogerp.common.domain.FileDO;
import com.vogerp.common.service.FileService;
import com.vogerp.common.utils.FileType;
import com.vogerp.common.utils.FileUtil;
import com.vogerp.common.utils.ForwardImage;
import com.vogerp.common.utils.ImageUtils;
import com.vogerp.common.utils.QRCode;
import com.vogerp.common.utils.poster.Poster;
import com.vogerp.common.utils.poster.PosterFactory;
import com.vogerp.user.dao.UserDao;
import com.vogerp.user.dao.UserRoleDao;
import com.vogerp.user.domain.UserDO;
import com.vogerp.user.domain.UserInvDo;
import com.vogerp.user.service.UserService;

@Transactional
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDao userMapper;
	@Autowired
	UserRoleDao userRoleMapper;
	@Autowired
	private FileService sysFileService;
	@Autowired
	private BootdoConfig bootdoConfig;
	private static final Logger logger = LoggerFactory.getLogger(UserService.class);

	// these values are mapping to the DB records which are hard coding in
	// website.sql file
	public static final long ADMIN_ROLE_ID = 1;
	public static final long DEMOND_ROLE_ID = 48;
	public static final long NORMAL_ROLE_ID = 56;

	@Value("${regUrl}")
	private String regUrl;

	@Value("${regUrl_en}")
	private String regUrl_en;

	@Override
	public UserDO get(Long id, String authCode) {
		// TODO: considering cache id+authcode in Redis for better perf.
		UserDO user = userMapper.get(id, authCode);
		if (user == null) {
			return null;
		}
		if (user.getLastLoginTime() == null) {
			return null;
		}
		// 5 days for remembering me login.
		if ((System.currentTimeMillis() - user.getLastLoginTime().getTime()) > (5 * 24 * 60 * 60 * 1000)) {
			// login expired. please login again.
			return null;
		}
		return user;
	}

	@Override
	public List<UserDO> list(Map<String, Object> map) {
		return userMapper.list(map);
	}

	@Override
	public int count(Map<String, Object> map) {
		return userMapper.count(map);
	}

	@Override
	public int registerPersonal(UserDO userDO) {
		return userMapper.save(userDO);
	}

	@Override
	public int updatePersonal(UserDO userDO) {
		return userMapper.update(userDO);
	}

	@Override
	public int updatePassword(UserDO userDO) {
		return userMapper.updatePassword(userDO);
	}

	@Override
	public Map<String, Object> updatePersonalImg(MultipartFile file, String avatar_data, Long userId) throws Exception {
		String fileName = file.getOriginalFilename();
		fileName = FileUtil.renameToUUID(fileName);
		FileDO sysFile = new FileDO(FileType.fileType(fileName), "/files/" + fileName, new Date());
		// 获取图片后缀
		String prefix = fileName.substring((fileName.lastIndexOf(".") + 1));
		String[] str = avatar_data.split(",");
		// 获取截取的x坐标
		int x = (int) Math.floor(Double.parseDouble(str[0].split(":")[1]));
		// 获取截取的y坐标
		int y = (int) Math.floor(Double.parseDouble(str[1].split(":")[1]));
		// 获取截取的高度
		int h = (int) Math.floor(Double.parseDouble(str[2].split(":")[1]));
		// 获取截取的宽度
		int w = (int) Math.floor(Double.parseDouble(str[3].split(":")[1]));
		// 获取旋转的角度
		int r = Integer.parseInt(str[4].split(":")[1].replaceAll("}", ""));
		try {
			BufferedImage cutImage = ImageUtils.cutImage(file, x, y, w, h, prefix);
			BufferedImage rotateImage = ImageUtils.rotateImage(cutImage, r);
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			boolean flag = ImageIO.write(rotateImage, prefix, out);
			System.out.println(flag);
			// 转换后存入数据库
			byte[] b = out.toByteArray();
			FileUtil.uploadFile(b, bootdoConfig.getUploadPath(), fileName);
		} catch (Exception e) {
			throw new Exception("图片裁剪错误！！");
		}
		Map<String, Object> result = new HashMap<>();
		if (sysFileService.save(sysFile) > 0) {
			UserDO userDO = new UserDO();
			userDO.setUserId(userId);
			userDO.setPicId(sysFile.getId());
			if (userMapper.update(userDO) > 0) {
				result.put("url", sysFile.getUrl());
			}
		}
		return result;
	}

	public boolean createPosterImg(String invitedCode, Long userId) {
		
		try {
			String path = bootdoConfig.getUploadPath();
			System.out.println(path);

			PosterFactory factory = new PosterFactory();
			// 大海报
			Poster poster = factory.createBigPoster(regUrl);
			
			if (checkImg(path, userId, invitedCode, poster)) {//存在
				return true;
			}
			
			createPostImg(path, userId, invitedCode, poster);
//			// 英文版
//			poster = factory.createEnPoster(regUrl_en);
//			createPostImg(path, userId, invitedCode, poster);
//			// 常规版
//			poster = factory.createStdPoster(regUrl);
//			createPostImg(path, userId, invitedCode, poster);
			return true;
		} catch (Exception e) {
			logger.warn(e.getMessage(), e);
			return false;
		}
	}

	private boolean checkImg(String path, Long userId, String invitedCode, Poster poster) {
		String saveFilePath = path + poster.getSaveFileLastPath() + userId + "/poster" + userId
				+ poster.getPosterLastFileName();
		File file=new File(saveFilePath);
		if (file.exists()) {
			logger.debug("poster 存在");
			System.out.println("存在");
			//存在
			return true;
		}
		return false;
	}

	private void createPostImg(String path, Long userId, String invitedCode, Poster poster) throws Exception {
		
		QRCode.encode(invitedCode, path, userId, poster);

		String sourceFilePath = path + poster.getSourceFileLastPath();
		String waterFilePath = path + poster.getQRCodeFolder() + userId + poster.getQRCodeLastFileName();
		String saveFilePath = path + poster.getSaveFileLastPath() + userId + "/poster" + userId
				+ poster.getPosterLastFileName();

		// System.out.println(poster.getClass().getName()+"---"+JSON.toJSONString(poster));
		// System.out.println(poster.getClass().getName()+"---"+path);
		// System.out.println(poster.getClass().getName()+"---"+userId);
		// System.out.println(poster.getClass().getName()+"---"+invitedCode);
		// System.out.println(poster.getClass().getName()+"---"+sourceFilePath);
		// System.out.println(poster.getClass().getName()+"---"+waterFilePath);
		// System.out.println(poster.getClass().getName()+"---"+saveFilePath);

		ForwardImage newImageUtils = new ForwardImage();
		// 构建叠加层
		BufferedImage buffImg = ForwardImage.watermark(new File(sourceFilePath), new File(waterFilePath), 1.0f,
				invitedCode, poster);
		// 输出水印图片
		newImageUtils.generateWaterFile(buffImg, saveFilePath);
		
		//压缩图片
//		Thumbnails.of(saveFilePath).scale(0.5f).outputQuality(0.05f).toFile(saveFilePath);
//		Thumbnails.of(saveFilePath).scale(0.5f).outputQuality(0.05f).toFile(saveFilePath);
	}

	@Override
	public UserInvDo getSelfUserIdAndInvUserId(String refereeUsername) {
		UserInvDo uid = new UserInvDo();
		Map<String, Object> map = new HashMap<>();
		UserDO self = null;
		UserDO invSelf = null;
		UserDO inv2Self = null;
		map.put("username", refereeUsername);
		List<UserDO> uds = userMapper.list(map);
		if (uds != null && uds.size() == 1) {
			self = uds.get(0);
		}
		uid.setUserId(self.getUserId());

		if (self != null && !"".equals(self.getMyInvitedCode())) {// 找爸爸
			map = new HashMap<>();
			map.put("myInvitedCode", self.getInvitedCode());
			List<UserDO> invUds = userMapper.list(map);
			if (invUds != null && invUds.size() == 1) {
				invSelf = invUds.get(0);
			}
			if (invSelf != null) {
				uid.setInvUserId(invSelf.getUserId());

				if (!"".equals(invSelf.getMyInvitedCode())) {// 找爷爷
					map = new HashMap<>();
					map.put("myInvitedCode", invSelf.getInvitedCode());
					List<UserDO> inv2Uds = userMapper.list(map);
					if (inv2Uds != null && inv2Uds.size() == 1) {
						inv2Self = inv2Uds.get(0);
					}
					if (inv2Self != null) {
						uid.setInv2UserId(inv2Self.getUserId());
					}
				}

			}
		}
		return uid;
	}
	
	@Override
	public UserInvDo getSelfUserIdAndInvUserId(Long userId) {
		UserInvDo uid = new UserInvDo();
		Map<String, Object> map = new HashMap<>();
		UserDO self = null;
		UserDO invSelf = null;
		UserDO inv2Self = null;
		map.put("userId", userId);
		List<UserDO> uds = userMapper.list(map);
		if (uds != null && uds.size() == 1) {
			self = uds.get(0);
		}
		uid.setUserId(self.getUserId());

		if (self!=null&&!"".equals(self.getMyInvitedCode())) {//找爸爸
			map = new HashMap<>();
			map.put("myInvitedCode", self.getInvitedCode());
			List<UserDO> invUds = userMapper.list(map);
			if (invUds != null && invUds.size() == 1) {
				invSelf = invUds.get(0);
			}
			if (invSelf!=null) {
				uid.setInvUserId(invSelf.getUserId());
				
				if (!"".equals(invSelf.getMyInvitedCode())) {//找爷爷
					map = new HashMap<>();
					map.put("myInvitedCode", invSelf.getInvitedCode());
					List<UserDO> inv2Uds = userMapper.list(map);
					if (inv2Uds != null && inv2Uds.size() == 1) {
						inv2Self = inv2Uds.get(0);
					}
					if (inv2Self!=null) {
						uid.setInv2UserId(inv2Self.getUserId());
					}
				}
				
			}
		}
		return uid;
	}

}

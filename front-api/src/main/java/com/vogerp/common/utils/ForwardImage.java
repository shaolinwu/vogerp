package com.vogerp.common.utils;

import java.awt.AlphaComposite;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.alibaba.fastjson.JSON;
import com.vogerp.common.utils.poster.Poster;
import com.vogerp.common.utils.poster.PosterFactory;

public class ForwardImage {
	/**
	 * 
	 * @Title: 构造图片
	 * @Description: 生成水印并返回java.awt.image.BufferedImage
	 * @param file
	 *            源文件(图片)
	 * @param waterFile
	 *            水印文件(图片)
	 * @param x
	 *            距离右下角的X偏移量
	 * @param y
	 *            距离右下角的Y偏移量
	 * @param alpha
	 *            透明度, 选择值从0.0~1.0: 完全透明~完全不透明
	 * @return BufferedImage
	 * @throws IOException
	 */
	public static BufferedImage watermark(File file, File waterFile, float alpha, String invitedCode, Poster poster)
			throws IOException {

		invitedCode = invitedCodeInit(invitedCode);

		int fontX = poster.getFontX();
		int fontY = poster.getFontY();
		int x = poster.getX();
		int y = poster.getY();
		
		System.out.println(x+"--"+y);

		// 获取底图
		BufferedImage buffImg = ImageIO.read(file);
		// 获取层图
		BufferedImage waterImg = ImageIO.read(waterFile);
		// 创建Graphics2D对象，用在底图对象上绘图
		Graphics2D g2d = buffImg.createGraphics();
		int waterImgWidth = waterImg.getWidth();// 获取层图的宽度
		int waterImgHeight = waterImg.getHeight();// 获取层图的高度
		// 在图形和图像中实现混合和透明效果
		g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, alpha));
		// 写字
		Font font = new Font("Arial", Font.BOLD, poster.getFontSize());
		g2d.setPaint(Color.WHITE);
		g2d.setFont(font);
		// g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
		// RenderingHints.VALUE_ANTIALIAS_ON);
		g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		g2d.drawString(invitedCode, fontX, fontY);
		System.out.println(invitedCode);
		// 绘制
		g2d.drawImage(waterImg, x, y, waterImgWidth, waterImgHeight, null);
		g2d.dispose();// 释放图形上下文使用的系统资源
		return buffImg;
	}

	/**
	 * 输出水印图片
	 * 
	 * @param buffImg
	 *            图像加水印之后的BufferedImage对象
	 * @param savePath
	 *            图像加水印之后的保存路径
	 */
	public void generateWaterFile(BufferedImage buffImg, String savePath) {
		mkdirs(savePath);
		int temp = savePath.lastIndexOf(".") + 1;
		try {
			ImageIO.write(buffImg, savePath.substring(temp), new File(savePath));
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

	public static String invitedCodeInit(String invitedCode) {
		String invitedCodeFormat = "";
		if (!"".equals(invitedCode) && invitedCode.length() == 8) {
			for (int i = 0; i < invitedCode.length(); i++) {
				char c = invitedCode.charAt(i);
				invitedCodeFormat += c + " ";
			}
			return invitedCodeFormat;
		}
		return invitedCode;
	}

	public static void mkdirs(String destPath) {
		File file = new File(destPath);
		// 当文件夹不存在时，mkdirs会自动创建多层目录，区别于mkdir。(mkdir如果父目录不存在则会抛出异常)
		if (!file.exists() && !file.isDirectory()) {
			file.mkdirs();
		}
	}

	/**
	 * 
	 * @param args
	 * @throws IOException
	 *             IO异常直接抛出了
	 * @author bls
	 */
	public static void main(String[] args) throws IOException {
		
		String path = "/Users/zhangliang/Desktop/testImg";
		Long userId = 2L;
		String invitedCode = "ABCD43";
		
		PosterFactory factory = new PosterFactory();
		Poster poster = factory.createStdPoster("www.yaoqinglianjie.com");
		System.out.println(JSON.toJSON(poster));
		poster = factory.createEnPoster("www.yaoqinglianjie.com");
		System.out.println(JSON.toJSON(poster));
		poster = factory.createBigPoster("www.yaoqinglianjie.com");
		System.out.println(JSON.toJSON(poster));
		
		String checkPath = path + poster.getSaveFileLastPath() + userId + "/poster" + userId
				+ poster.getPosterLastFileName();
		File file=new File(checkPath);
		if (file.exists()) {
			System.out.println("存在");
		}
		
		try {
			QRCode.encode("www.sina.com", "/Users/zhangliang/Desktop/testImg", userId,poster);
			String sourceFilePath = path + poster.getSourceFileLastPath();
			String waterFilePath = path +poster.getQRCodeFolder() + userId + poster.getQRCodeLastFileName();
			String saveFilePath = path + poster.getSaveFileLastPath() + userId + "/poster" + userId + poster.getPosterLastFileName();
			ForwardImage newImageUtils = new ForwardImage();
			// 构建叠加层
			BufferedImage buffImg = ForwardImage.watermark(new File(sourceFilePath), new File(waterFilePath), 1.0f,
					invitedCode, poster);
			// 输出水印图片
			newImageUtils.generateWaterFile(buffImg, saveFilePath);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public boolean checkImg(String path, Long userId, String invitedCode, Poster poster) {
		String saveFilePath = path + poster.getSaveFileLastPath() + userId + "/poster" + userId
				+ poster.getPosterLastFileName();
		File file=new File(saveFilePath);
		if (file.exists()) {
			System.out.println("存在");
			//存在
			return true;
		}
		return false;
	}
}

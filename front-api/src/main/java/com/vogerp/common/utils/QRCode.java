package com.vogerp.common.utils;

import java.awt.image.BufferedImage;
import java.awt.*;
import java.awt.geom.RoundRectangle2D;
import java.io.File;
import java.io.IOException;
import java.util.Hashtable;

import javax.imageio.ImageIO;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.vogerp.common.utils.poster.Poster;

public class QRCode {

	private static final String CHARSET = "utf-8";
	private static final String FORMAT_NAME = "JPG";
	// 二维码尺寸
	// private static final int QRCODE_SIZE = 260;
	// private static final int QRCODE_BIG_SIZE = 310;
	// LOGO宽度
	// private static final int WIDTH = 60;
	// LOGO高度
	// private static final int HEIGHT = 60;

	/**
	 * 生成二维码
	 * 
	 * @param content
	 *            源内容
	 * @param imgPath
	 *            生成二维码保存的路径
	 * @param needCompress
	 *            是否要压缩
	 * @return 返回二维码图片
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private static BufferedImage createImage(String content, Integer size) throws Exception {
		Hashtable hints = new Hashtable();
		hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
		hints.put(EncodeHintType.CHARACTER_SET, CHARSET);
		hints.put(EncodeHintType.MARGIN, 1);
		BitMatrix bitMatrix = new MultiFormatWriter().encode(content, BarcodeFormat.QR_CODE, size, size, hints);
		int width = bitMatrix.getWidth();
		int height = bitMatrix.getHeight();
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		for (int x = 0; x < width; x++) {
			for (int y = 0; y < height; y++) {
				image.setRGB(x, y, bitMatrix.get(x, y) ? 0xFF000000 : 0xFFFFFFFF);
			}
		}
		// 插入图片
		//insertImage(image, "/Users/zhangliang/Desktop/testImg/poster/logo.png", true);
		return image;
	}
	
	/**
     * user: Rex
     * date: 2016年12月29日  上午12:30:09
     * @param source 二维码图片
     * @param logoImgPath Logo
     * @param needCompress 是否压缩Logo
     * @throws IOException
     * void
     * TODO 添加Logo
     */
    private static void insertImage(BufferedImage source, String logoImgPath, boolean needCompress) throws IOException{
        File file = new File(logoImgPath);  
        if (!file.exists()) {  
            return;  
        }  
        
        Image src = ImageIO.read(new File(logoImgPath));  
        int width = src.getWidth(null);  
        int height = src.getHeight(null);  
        if (needCompress) { // 压缩LOGO  
            if (width > 80) {  
                width = 80;  
            }  
            
            if (height > 80) {  
                height = 80;  
            }  
            
            Image image = src.getScaledInstance(width, height, Image.SCALE_SMOOTH);  
            BufferedImage tag = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);  
            Graphics g = tag.getGraphics();  
            g.drawImage(image, 0, 0, null); // 绘制缩小后的图  
            g.dispose();  
            src = image;  
        }  
        
        // 插入LOGO  
        Graphics2D graph = source.createGraphics();  
        int x = 130;
        int y = 130;  
        graph.drawImage(src, x, y, width, height, null);  
        Shape shape = new RoundRectangle2D.Float(x, y, width, width, 6, 6);  
        graph.setStroke(new BasicStroke(3f));  
        graph.draw(shape);  
        graph.dispose();  
    }
    

	/**
	 * 生成带logo二维码，并保存到磁盘
	 * 
	 * @param content
	 *            链接或者内容
	 * @param poster
	 * @param imgPath
	 *            logo图片
	 * @param destPath
	 *            保存二维码图片的文件路径
	 * @param needCompress
	 * @throws Exception
	 */
	public static Boolean encode(String content, String path, Long userId, Poster poster) throws Exception {
		BufferedImage image = QRCode.createImage(poster.getRegUrl()+content, poster.getQRCodeSize());
		if (image == null) {
			return false;
		}
		mkdirs(path + poster.getQRCodeFolder());
		// 生成UserId 二维码文件名 完整路径
		String file = path + poster.getQRCodeFolder() + userId.toString() + poster.getQRCodeLastFileName();
//		System.out.println(file);
		ImageIO.write(image, FORMAT_NAME, new File(file));
		return true;
	}

	public static void mkdirs(String destPath) {
		File file = new File(destPath);
		// 当文件夹不存在时，mkdirs会自动创建多层目录，区别于mkdir。(mkdir如果父目录不存在则会抛出异常)
		if (!file.exists() && !file.isDirectory()) {
			file.mkdirs();
		}
	}

	// public static void main(String[] args) {
	// try {
	// encode("www.sina.com", "/Users/zhangliang/Desktop/testImg", 182L, null,null);
	// } catch (Exception e) {
	// e.printStackTrace();
	// }
	// }

}

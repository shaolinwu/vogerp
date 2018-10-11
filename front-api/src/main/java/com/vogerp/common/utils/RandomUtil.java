package com.vogerp.common.utils;

import java.util.UUID;

/**
 * 随机数生成器工具类
 * @author maxiaodong
 */
public class RandomUtil {
    private static String chars = "abcdefghijklmnopqrstuvwxyz0123456789";

    public static String generateSalt(){
        StringBuffer salt = new StringBuffer();
        for (int i = 0; i < 6; i++) {
            salt.append(chars.charAt((int)(Math.random() * 36)));
        }

        return salt.toString();
    }


    //生成4位随机数
    public static  int getRandomCode(){
        return (int) ((Math.random()*9+1)*1000);
    }

    public static void main(String[] args) {
        System.out.println(UUID.randomUUID().toString().replace("-",""));
    }

}

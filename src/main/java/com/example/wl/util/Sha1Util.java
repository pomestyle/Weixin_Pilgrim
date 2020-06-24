package com.example.wl.util;

import lombok.extern.slf4j.Slf4j;

import java.security.MessageDigest;
/**
 * @version 1.0
 * @description: sha1加密 解密
 * @author: Pilgrim
 * @time: 2019/1/23 9:24
 */
@Slf4j
public class Sha1Util {
    /**
     * sha1加密
     *
     * @param str 返回加密字符串
     * @return
     */
    public static String getSha1(String str) {
        if (str == null || str.length() == 0) {
            return null;
        }
        char[] hexDigits = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
        try {
            MessageDigest mdTemp = MessageDigest.getInstance("sha1");
            mdTemp.update(str.getBytes("UTF-8"));
            byte[] md = mdTemp.digest();
            int j = md.length;
            char[] buf = new char[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {
                byte byte0 = md[i];
                buf[k++] = hexDigits[byte0 >>> 4 & 0xf];
                buf[k++] = hexDigits[byte0 & 0xf];
            }
            return new String(buf);
        } catch (Exception e) {
            log.error(" sha1 加密异常！{} " , e);
            e.getStackTrace();
            return null;
        }

    }
}
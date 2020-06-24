package com.example.wl.util;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;


/**
 *
 * @author wangguichao
 * @date 2018-04-16
 */
@Slf4j
public class AESutil {

    /**
     * 加密
     *
     * @param content   需要加密的内容
     * @param secureKey 加密秘钥
     * @return
     */
    public static String encrypt(String content, String secureKey) {

        try {
            if (StringUtils.isEmpty(content)
                    || StringUtils.isEmpty(secureKey)) {
                {
                    return null;
                }
            }


            KeyGenerator kgen = KeyGenerator.getInstance("AES");
            /*
             * 问题我已自己解决，这个是由于linux和window的内核不同造成的！
             * SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
             * secureRandom.setSeed(PASSWORD.getBytes());
             * 然后初始化，就能解决这个问题！
             */
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(secureKey.getBytes());
            kgen.init(128, secureRandom);
            SecretKey secretKey = kgen.generateKey();
            byte[] enCodeFormat = secretKey.getEncoded();
            SecretKeySpec key = new SecretKeySpec(enCodeFormat, "AES");
            Cipher cipher = Cipher.getInstance("AES");// 创建密码器
            byte[] byteContent = content.getBytes("utf-8");
            cipher.init(Cipher.ENCRYPT_MODE, key);// 初始化
            byte[] result = cipher.doFinal(byteContent);
            return encodeBASE64(result); // 加密
        } catch (Exception e) {
            log.error("加密错误. {} ", e);
        }
        return null;
    }



    /**
     * 解密
     *
     * @param content  待解密内容
     * @param secureKey secureKey
     * @return
     */
    public static String decrypt(String content, String secureKey) {
        try {
            if (StringUtils.isEmpty(content) || StringUtils.isEmpty(secureKey)) {
                return null;
            }

            KeyGenerator kgen = KeyGenerator.getInstance("AES");
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(secureKey.getBytes());
            kgen.init(128, secureRandom);
            SecretKey secretKey = kgen.generateKey();
            byte[] enCodeFormat = secretKey.getEncoded();
            SecretKeySpec key = new SecretKeySpec(enCodeFormat, "AES");
            Cipher cipher = Cipher.getInstance("AES");// 创建密码器 
            cipher.init(Cipher.DECRYPT_MODE, key);// 初始化 
            byte[] base64Dec = Base64.decode(content);
            byte[] result = cipher.doFinal(base64Dec);
            return new String(result);
        } catch (Exception e) {
            log.warn("解密错误,错误信息是:{} ", e);
        }
        return null;
    }

    public static String encodeBASE64(byte[] content) throws Exception {
        if (content == null || content.length == 0)
        {
            return null;
        }
        try {
            return Base64.encode(content);
        } catch (Exception e) {
            log.error("Base64 encode error. {}" , e);
            return null;
        }
    }

}

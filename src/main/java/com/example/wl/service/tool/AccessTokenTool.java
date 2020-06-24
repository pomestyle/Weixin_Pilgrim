package com.example.wl.service.tool;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.WeChatConfig;
import com.example.wl.config.WeChatUrlParamConfig;
import com.example.wl.pojo.wechatparam.AccessToken;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * 获取token
 * @author Pilgrim
 */
@Slf4j
public class AccessTokenTool {

    private static String appid = WeChatConfig.appid;
    private static String appsecret = WeChatConfig.appsecret;

    /**
     * 用于存储token
     */
    private static AccessToken at;

    /**
     * @description: 向微信服务器发送求情获取全局的accessToken
     * @author: Pilgrim
     * @time: 2019/1/18 16:42
     * @version 1.0
     */
    public static AccessToken getAccessToken() {
        log.info(" =================== 向微信服务器发送求情获取全局的accessToken ==================== ");
        String accessTokenUrl = WeChatUrlParamConfig.ACCESS_TOKEN_URL;
        log.info(" =================== accessTokenUrl 1 ==================== {} " , accessTokenUrl);
        log.info(" =================== appid 1 ==================== {}" , appid);
        log.info(" =================== appsecret 1 ==================== {}" , appsecret);

        accessTokenUrl = accessTokenUrl.replace("APPID", appid).replace("APPSECRET", appsecret);
        log.info(" =================== accessTokenUrl 2 ==================== {}" , accessTokenUrl);
        log.info(" 微信全局token的url " + accessTokenUrl);
        try {
            URL url = new URL(accessTokenUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setDoOutput(true);
            connection.setDoInput(true);
            connection.connect();
            //获取返回的字符
            InputStream inputStream = connection.getInputStream();
            int size = inputStream.available();
            byte[] bs = new byte[size];
            inputStream.read(bs);
            String message = new String(bs, "UTF-8");
            /**
             *  获取access_token
             *  成功返回的json : {"access_token":"ACCESS_TOKEN","expires_in":7200}
             *  失败放的json  : {"errcode":40013,"errmsg":"invalid appid"}
             *
             */
            JSONObject jsonObject = JSONObject.parseObject(message);
            String accessToken = jsonObject.getString("access_token");
            String expiresIn = jsonObject.getString("expires_in");
            String errcode = jsonObject.getString("errcode");

            log.info("accessToken = " + accessToken);
            log.info("expires_in = " + expiresIn);

            if (errcode == null) {
                //创建token，并且存起来
                at = new AccessToken(accessToken);
                return at;
            }

        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取token异常。" + e);
        }

        return null;
    }


    public static String getToken() {
        if (at == null || at.isExpired() == false ) {
            try {
                getAccessToken();
                log.info("token 失效 ，重新获取 。。。");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        log.info("token 。。" + at.getAccess_token() );
        return at.getAccess_token();
    }

    /** 程序中暂时没有用到
     * 判断用户是否关注了公众号 系统中暂时没有用到
     * subscribe 值为0时，代表此用户没有关注该公众号
     *
     * @param token
     * @param openid
     * @return
     */
    public static String judgeIsFollow(String token, String openid) {
        Object subscribe = 1;
        String url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=" + token + "&openid=" + openid + "&lang=zh_CN";
        try {
            String sendHttpByGet = HttpUtil.sendHttpByGet(url);

            /**********************处理获取到的json************************/
            String message = new String(sendHttpByGet.getBytes(), "UTF-8");
            JSONObject demoJson = JSONObject.parseObject(message);
            if (demoJson != null) {
                log.info("判断用户是否关注了公众号 JSON字符串 ：{}" , demoJson.toJSONString());
                //0没关注 其他关注
                subscribe = demoJson.getString("subscribe");
            }
            /**********************处理获取到的json************************/
        } catch (Exception e) {
            e.printStackTrace();
            log.info(" 判断用户是否关注了公众号 , 程序异常! {}" , e);
        }
        return subscribe.toString();
    }

}

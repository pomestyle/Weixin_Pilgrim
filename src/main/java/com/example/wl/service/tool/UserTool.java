package com.example.wl.service.tool;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.WeChatConfig;
import com.example.wl.config.WeChatUrlParamConfig;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;

/**
 * 获取用户信息工具类
 *
 * @author Pilgrim
 */
@Slf4j
@Configuration
public class UserTool {

    /**
     * @return 获取已关注用户信息
     */
    public static String getUserMsg(String openId) {
        String url = WeChatUrlParamConfig.GET_ALREADY_FOCUS_ON_URL.replace("ACCESS_TOKEN", AccessTokenTool.getToken()).replace("OPENID", openId);
        log.info("获取用户信息 ：{}", url);
        String result = HttpUtil.sendHttpByGet(url);
        log.info("获取用户信息 ：{}", result);
        return result;
    }

    /**
     * 网页授权获取用户信息  用户同意授权 , 获取code
     *
     * @param code
     */
    public static String userAuthorzation(String code) {
        //2 通过code换取网页授权access_token
        String url = WeChatUrlParamConfig.GET_CODE_URL.replace("APPID", WeChatConfig.getAppid()).replace("SECRET", WeChatConfig.getAppsecret()).replace("CODE", code);
        //发送请求
        String result = HttpUtil.sendHttpByGet(url);
        log.info("code换取网页授权access_toke 返回结果  {} ",result);
        JSONObject jsonObject = JSONObject.parseObject(result);
        //String access_token = jsonObject.getString("access_token");
        String openid = jsonObject.getString("openid");

        //返回的数据是后出错
        if (jsonObject != null && jsonObject.containsKey("errcode")) {
            log.info("通过code换取网页授权access_token 返回数据时出错！");
            return "error";
        }

        //拉取用户信息
        String userMsg = getUserMsg(openid);
        jsonObject = JSONObject.parseObject(userMsg);
        if (jsonObject != null && jsonObject.containsKey("errcode")) {
            log.info("拉取用户信息 ！ {} ", jsonObject.toJSONString());

            return jsonObject.toJSONString();
        } else {
            String errmsg = jsonObject.getString("errmsg");
            String errcode = jsonObject.getString("errcode");
            log.info("拉取用户信息失败！  {}", result);
        }

        return "error";
    }

    /**
     * 获取Openid
     *
     * @param code
     * @return
     */
    public static String getUserOpenid(String code) {

        String url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + WeChatConfig.appid + "&secret=" + WeChatConfig.appsecret + "&code=" + code + "&grant_type=authorization_code";
        //2 通过code换取网页授权access_token
        String result = HttpUtil.sendHttpByGet(url);//发送请求
        log.info(" 获取Openid 返回信息 {}  ", result);
        JSONObject jsonObject = JSONObject.parseObject(result);
        String openid = jsonObject.getString("openid");
        return openid;
    }

}

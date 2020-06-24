package com.example.wl.service.tool;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.WeChatUrlParamConfig;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;

/**
 * @version 1.0
 * @description: 设置微信开票抬头字段
 * @author: Pilgrim
 * @time: 2019/2/24 16:34
 */
@Slf4j
public class AuthorPageFieldTool {
    /**
     * 官网文档中默认的表头json字段
     */
//  private final static String json = "{\"auth_field\":{\"user_field\":{\"require_phone\":1,\"show_email\":1,\"show_title\":1,\"show_phone\":1,\"require_email\":1},\"biz_field\":{\"require_phone\":1,\"require_bank_type\":1,\"require_tax_no\":1,\"show_addr\":1,\"require_addr\":1,\"show_title\":1,\"show_tax_no\":1,\"show_phone\":1,\"show_bank_type\":1,\"show_bank_no\":1,\"require_bank_no\":1}}}";
    /**
     * 开票抬头企业中自定义邮箱json字段
     */
    private final static String JSON = "{\"auth_field\":{\"user_field\":{\"require_phone\":1,\"show_email\":1,\"show_title\":1,\"show_phone\":1,\"require_email\":1},\"biz_field\":{\"require_phone\":0,\"custom_field\":[{\"key\":\"电子邮件\",\"is_require\":1,\"notice\":\"电子邮件\"},{\"key\":\"手机号码\",\"is_require\":1,\"notice\":\"手机号码\"}],\"require_bank_type\":0,\"require_tax_no\":1,\"show_addr\":1,\"require_addr\":0,\"show_title\":1,\"show_tax_no\":1,\"show_phone\":1,\"show_bank_type\":1,\"show_bank_no\":1,\"require_bank_no\":0}}}";
    private final static String URL = WeChatUrlParamConfig.SET_INVOCIES_TITLE_URL + AccessTokenTool.getToken();
    private static Object jsonObject;
    private static boolean falg;

    public static Object doVoid() {
        log.info("设置授权页字段 ： {}" , URL);
        log.info("设置授权页字段 ：  json = {}" , JSON);
        String result = HttpUtil.sendHttpByPost(URL, JSON);
        jsonObject = JSONObject.parseObject(result);
        log.info("设置授权页字段 返回的json : {}" , ((JSONObject) jsonObject).toJSONString());
        return jsonObject;
    }

    /**
     * @description: 判断设置字段是否成功。
     * @author: Pilgrim
     * @time: 2019/2/24 16:50
     * @version 1.0
     */
    public static boolean justdage() {
        Integer errcode = ((JSONObject) jsonObject).getInteger("errcode");
        String authSuccess = ((JSONObject) jsonObject).getString("auth success");
        if (!errcode.equals(0) && ! "auth success".equals(authSuccess)) {
            doVoid();
        }
        return falg = true;
    }

    public static void sout() {
        if (justdage()) {
            log.info("=====================  设置抬头页字段成功 =============== ");
        } else {
            log.error("=====================  设置抬头页字段失败 =============== ");
        }
    }
}

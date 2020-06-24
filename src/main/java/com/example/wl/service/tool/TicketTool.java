package com.example.wl.service.tool;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.WeChatConfig;
import com.example.wl.config.WeChatUrlParamConfig;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

/**
 * @version 1.0
 * @description: 用户获取二维码
 * @author: Pilgrim
 * @time: 2019/1/18 16:30
 */
@Slf4j
public class TicketTool {
    /**
     * 用于获取带参数的二维码
     */
    private static String URL_GET_QR_PARAM = "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=";
    /**
     * 换取二维码url
     */
    private static final String URL_GET_QR = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=";

    public static String getTicketData(String str) {
        String token = AccessTokenTool.getToken();
        if (StringUtils.isEmpty(str) || token == null) {
            return null;
        }
        if (str.length() > 64) {
            return null;
        }

        //临时字符二维码url
        String url = (WeChatUrlParamConfig.GET_CODE_TICKET_URL).replace("TOKEN", token);
        //二维码参数，以及过期时间
        String data = "{\"expire_seconds\": " + WeChatConfig.getQrOrderExpireTime() + ", \"action_name\": \"QR_STR_SCENE\", \"action_info\": {\"scene\": {\"scene_str\": \"test\"}}}";
        data = data.replace("test", str);
        String result = HttpUtil.sendHttpByPost(url, data);
        log.info(" 带参数的二维码 : {} " , result);
        if (!StringUtils.isEmpty(result)) {
            JSONObject jsonObject = JSONObject.parseObject(result);
            str = jsonObject.getString("ticket");
            log.info("ticket = {} " , str);
            return str;
        }

        return null;
    }

    /**
     * @description: 用户返回二维码链接url
     * @author: Pilgrim
     * @time: 2019/1/18 16:30
     * @version 1.0
     */
    public static String getTicket(String data) {
        String url = WeChatUrlParamConfig.BACK_QR_CODE_URL + data;
        return url;
    }

}

package com.example.wl.service.tool;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.ParamConfigForBuild;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;

/**
 * @version 1.0
 * @description: 自身标识码
 * @author: Pilgrim
 * @time: 2019/1/24 18:11
 */
@Slf4j
public class OwnCodeTool {
    public static String sPappid;
    public static String getOwnCode() {
        String url = ParamConfigForBuild.IDENTIFICATION_CODE_URL + AccessTokenTool.getToken();
        String result = HttpUtil.sendHttpByPost(url, "{}");
        log.info("返回自身标识码：result  {}" , result);
        JSONObject jsonObject = JSONObject.parseObject(result);
        String invoiceUrl = jsonObject.getString("invoice_url");
        int indexOf = invoiceUrl.lastIndexOf("=");
        sPappid = invoiceUrl.substring(indexOf + 1, invoiceUrl.length());
        log.info("============================= 自身标识码 ====================== {}" , sPappid);
        return sPappid;
    }

    public static String getsPappid() {
        if (sPappid == null) {
            getOwnCode();
        }
        return sPappid;
    }

}
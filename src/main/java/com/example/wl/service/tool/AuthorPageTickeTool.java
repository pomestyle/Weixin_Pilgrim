package com.example.wl.service.tool;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.ParamConfigForBuild;
import com.example.wl.pojo.wechatparam.AuthorPageTicke;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;

/**
 * @description: 获取ticket
 * @author: Pilgrim
 * @time: 2018/12/29 2018/12/29 9:23
 */
@Slf4j
public class AuthorPageTickeTool {

    /**
     * 用于存储 ticket
     */
    private static AuthorPageTicke ticke;

    /**
     * @description: 获取授权页链接
     * 商户在调用授权页前需要先获取一个7200s过期的授权页ticket，
     * 在获取授权页接口中，该ticket作为参数传入，加强安全性 。
     * @author: Pilgrim
     * @time: 2018/12/29 15:11
     */
    public static AuthorPageTicke getTicke() {
        String url = ParamConfigForBuild.AUTHOR_TICKET_URL.replace("ACCESS_TOKEN", AccessTokenTool.getToken());
        String result = HttpUtil.sendHttpByGet(url);
        JSONObject jsonObject = JSONObject.parseObject(result);
        log.info("获取到的ticket ： {}" , jsonObject.toJSONString());
        Integer errcode = jsonObject.getInteger("errcode");
        String ticket = jsonObject.getString("ticket");
        Integer expiresIn = jsonObject.getInteger("expires_in");

        if (errcode == 0) {
            ticke = new AuthorPageTicke(ticket, expiresIn);
            log.info("获取到的ticket : {}" , ticke.getTicket());
            return ticke;
        }
        return null;
    }

    /**
     * 对外提供获取ticket的方法
     * @return
     */
    public static String getTickeToken() {
        if (ticke == null || ticke.expires()) {
            getTicke();
        }

        return ticke.getTicket();
    }


}

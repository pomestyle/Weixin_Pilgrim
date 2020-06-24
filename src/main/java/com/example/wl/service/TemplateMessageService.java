package com.example.wl.service;

import com.example.wl.pojo.model.WechatTemplate;
import com.example.wl.pojo.model.WeixinResponse;

/**
 * @version 1.0
 * @description: 消息模板接口 暂时没有涉及到使用
 * @author: Pilgrim
 * @time: 2019/2/12 15:12
 */
public interface TemplateMessageService {

    /**
     * 消息模板
     * @param accessToken
     * @param wechatTemplate
     * @return
     */
    public WeixinResponse sendTemplateMessage(String accessToken, WechatTemplate wechatTemplate);
}

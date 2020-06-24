package com.example.wl.service;

import java.util.Map;

/**
 * @version 1.0
 * @description: 处理微信开票的业务类
 * @author: Pilgrim
 * @time: 2019/1/23 9:24
 */
public interface DealWeChatIncoiceService {

    /**
     * 处理微信返回信息类型
     * @param map
     * @return
     * @throws Exception
     */
    public String dealBean2XmlForBuild(Map<String, String> map) throws Exception;

}

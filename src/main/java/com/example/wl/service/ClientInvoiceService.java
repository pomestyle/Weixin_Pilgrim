package com.example.wl.service;

import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.MyException;
import com.example.wl.pojo.wechatparam.AuthorPageTicket;

/**
 * @version 1.0
 * @description: 用于用户客户端扫码，授权，展示，填写等页面处理流程
 * @author: Pilgrim
 * @time: 2019/1/18 15:39
 */
public interface ClientInvoiceService {

    /**
     * 设置商户联系方式
     * @param phone
     * @return 是否成功
     * @throws MyException
     */
    public String setMerchantsContact(String phone) throws MyException;


    /**
     * 获取授权页ticket
     * @param authorPageTicket
     * @return 请求后的 json数据
     */
    public JSONObject getAuthorPageUrl(AuthorPageTicket authorPageTicket);


    /**
     * 获取type=1的 用户信息
     * @param json
     * @return 请求后的 json数据
     */
    public JSONObject getAuthorPageUserMsg(String json);

}

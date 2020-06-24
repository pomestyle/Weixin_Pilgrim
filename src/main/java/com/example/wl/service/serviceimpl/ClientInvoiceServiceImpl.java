package com.example.wl.service.serviceimpl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.ParamConfigForBuild;
import com.example.wl.pojo.Contact;
import com.example.wl.pojo.MerchantsContact;
import com.example.wl.pojo.wechatparam.AuthorPageTicket;
import com.example.wl.service.ClientInvoiceService;
import com.example.wl.service.tool.AccessTokenTool;
import com.example.wl.service.tool.OwnCodeTool;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 设置商户信息类
 * @author Pilgrim
 */
@Service
@Slf4j
public class ClientInvoiceServiceImpl implements ClientInvoiceService {

    /**
     * @description: 功能描述: 设置商户联系方式
     * @author: Pilgrim
     * @create: 2018/12/29 15:18
     * @version 1.0
     **/
    @Override
    public String setMerchantsContact(String phone) {
        String url = ParamConfigForBuild.MERCHANTS_CONTACT_URL + AccessTokenTool.getToken();
        MerchantsContact merchantsContact = new MerchantsContact();
        Contact contact = new Contact();
        contact.setPhone(phone);
        contact.setTime_out(3000);
        merchantsContact.setContact(contact);

        String jsonString = JSON.toJSONString(merchantsContact);
        //发送请求
        String result = HttpUtil.sendHttpByPost(url, jsonString);
        log.info("设置商户返回的json数据1：  {}" , JSONObject.parseObject(result).toJSONString());
        return result;
    }

    /**
     * @description: 获取授权页链接
     * @author: Pilgrim
     * @time: 2018/12/29 15:17
     */
    @Override
    public JSONObject getAuthorPageUrl(AuthorPageTicket authorPageTicket) {
        String url = ParamConfigForBuild.AUTHOR_PAGE_URL + AccessTokenTool.getToken();
        String json = JSON.toJSONString(authorPageTicket);
        String result = HttpUtil.sendHttpByPost(url, json);
        JSONObject jsonObject = JSONObject.parseObject(result);
        Integer errcode = jsonObject.getInteger("errcode");
        log.info("商户授权页url :  {}" , jsonObject.toJSONString());
        return errcode == 0 ? jsonObject : null;
    }

    /**
     * @description: 本接口的调用场景包括两个：
     * 一、若商户在某次向用户展示授权页后经过较长时间仍未收到授权完成状态推送，可以使用本接口主动查询用户是否实际上已完成授权，只是由于网络等原因未收到授权完成事件；
     * 二、若商户向用户展示的授权页为type=1类型，商户在收到授权完成事件推送后需要进一步获取用户的开票信息，也可以调用本接口。
     * @author: Pilgrim
     * @time: 2018/12/29 15:17
     */
    @Override
    public JSONObject getAuthorPageUserMsg(String succOrderId) {
        String json = "{\"s_pappid\":\"" + OwnCodeTool.getsPappid() + "\",\"order_id\":\"" + succOrderId + "\"}";
        String url = ParamConfigForBuild.HAVED_AUTHOR_PAGE_URL + AccessTokenTool.getToken();
        log.info("获取授权也完成后推送事件，填写的用户信息 type=1时候的用户填写信息。url =  {}" , url);
        log.info("获取授权也完成后推送事件，填写的用户信息 type=1时候的用户填写信息。发送的json =  {}" , json);

        String result = HttpUtil.sendHttpByPost(url, json);
        JSONObject jsonObject = JSONObject.parseObject(result);
        Integer errcode = jsonObject.getInteger("errcode");
        log.info("获取用户填写抬头申请开票返回的json : " + jsonObject.toJSONString());
        return errcode == 0 ? jsonObject : null;
    }

}

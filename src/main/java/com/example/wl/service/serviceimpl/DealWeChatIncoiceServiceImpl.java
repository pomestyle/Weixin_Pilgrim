package com.example.wl.service.serviceimpl;


import com.example.wl.pojo.BaseMsg;
import com.example.wl.service.DealWeChatIncoiceService;
import com.example.wl.service.tool.RequestParamTool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * 微信和本地服务器交互信息处理
 * @author Pilgrim
 */
@Slf4j
@Service
public class DealWeChatIncoiceServiceImpl implements DealWeChatIncoiceService {



    /**
     * @description: 自建处理扫码
     * @author: Pilgrim
     * @time: 2018/12/29 11:16
     */
    @Override
    public String dealBean2XmlForBuild(Map<String, String> xmlData) throws Exception {
        //获取 消息类型
        String msgType = xmlData.get("MsgType");
        //String Event = xmlData.get("Event");
        BaseMsg baseMsg = null;


        //扫码事件
        if (xmlData.containsKey("Ticket")) {
            baseMsg = dealTicketForBuild(xmlData);
        } else {
            //文本消息
            if ("text".equals(msgType)) {
                baseMsg = RequestParamTool.dealTextForBuild(xmlData);
            } else {
                baseMsg = dealTicketForBuild(xmlData);
            }
        }

        //把消息对象处理为xml数据包
        String xml = RequestParamTool.bean2Xml(baseMsg);
        if (xml != null) {
            return xml;
        }
        return null;
    }


    /***
     * @description: 处理自建扫码开票
     * @author: Pilgrim
     * @time: 2018/12/29 10:20
     */
    public BaseMsg dealTicketForBuild(Map<String, String> xmlData) throws Exception {

        BaseMsg baseMsg = null;
        String result = "";
        String event = xmlData.get("Event");
        String wxId = xmlData.get("FromUserName");


        if ("VIEW".equals(event)) {
            return baseMsg = RequestParamTool.url(xmlData);
        } else if ("CLICK".equals(event)) {
            return baseMsg = RequestParamTool.handleClick(xmlData);
        } else if ("SCAN".equals(event) || "subscribe".equals(event)) {
            String eventKey = xmlData.get("EventKey");
            if (eventKey.contains("qrscene_")) {
                eventKey = eventKey.replace("qrscene_", "");
            }
            //订单编号
            log.info("  二维码中的信息参数: {} ", eventKey);
            //返回图文信息 也可以返回文字信息
            return RequestParamTool.url(xmlData, "https://www.baidu.com");


        }


        //1 收取授权完成事件推送
        else if ("user_authorize_invoice".equals(event)) {
            log.info(" -----------------        ---------------------- ");
            return RequestParamTool.url(xmlData);

        }


        //默认返回空
        return RequestParamTool.url(xmlData);
    }

}


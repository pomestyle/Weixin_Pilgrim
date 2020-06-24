package com.example.wl.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;

import java.util.Map;

/**
 * @description: 收取授权完成事件推送 接受pojo
 * @author: Pilgrim
 * @time: 2018 2018/12/28 14:48
 */
@XStreamAlias("xml")
public class EventMsg extends BaseMsg {
    /**
     * 固定为user_authorize_invoice
     */
    @XStreamAlias("Event")
    private String event;
    /**
     * 授权成功的订单号，与失败订单号两者必显示其一
     */
    @XStreamAlias("SuccOrderId")
    private String succOrderId;

    /**
     * 授权失败的订单号，与成功订单号两者必显示其一
     */
    @XStreamAlias("FailOrderId")
    private String failOrderId;

    /**
     * 获取授权页链接的AppId
     */
    @XStreamAlias("AuthorizeAppId")
    private String authorizeAppId;

    /**
     * 授权来源，web：公众号开票，app：app开票，wxa：小程序开 票，wap：h5开票
     */
    @XStreamAlias("Source")
    private String source;


    public EventMsg(Map<String, String> map, String event, String succOrderId, String failOrderId, String authorizeAppId, String source) {
        super(map);
        this.event = event;
        this.succOrderId = succOrderId;
        this.failOrderId = failOrderId;
        this.authorizeAppId = authorizeAppId;
        this.source = source;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getSuccOrderId() {
        return succOrderId;
    }

    public void setSuccOrderId(String succOrderId) {
        this.succOrderId = succOrderId;
    }

    public String getFailOrderId() {
        return failOrderId;
    }

    public void setFailOrderId(String failOrderId) {
        this.failOrderId = failOrderId;
    }

    public String getAuthorizeAppId() {
        return authorizeAppId;
    }

    public void setAuthorizeAppId(String authorizeAppId) {
        this.authorizeAppId = authorizeAppId;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }
}

package com.example.wl.pojo.wechatparam;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: 获取授权页url  实体对象
 * @author: Pilgrim
 * @time: 2018 2018/12/28 13:49
 */
public class AuthorPageTicket {

    /**
     * 开票平台在微信的标识号，商户需要找开票平台提供
     */
    @JSONField(name = "s_pappid", ordinal = 0)
    private String sPappid;

    /**
     * 订单id，在商户内单笔开票请求的唯一识别号
     */
    @JSONField(name = "order_id", ordinal = 1)
    private String orderId;

    /**
     * 订单金额，以分为单位
     */
    @JSONField(ordinal = 2)
    private Integer money;

    /**
     * 时间戳
     */
    @JSONField(ordinal = 3)
    private String timestamp;

    /**
     * 开票来源，app：app开票，web：微信h5开票，wxa：小程序开发票， wap：普通网页开票
     */
    @JSONField(ordinal = 4)
    private String source;

    /*
     * 授权成功后跳转页面。
     * 本字段只有在source为H5的时候需要填写，引导用户在微信中进行下一步流程。
     * app开票因为从外部app拉起微信授权页，授权完成后自动回到原来的app，故无需填写。
     *
     */

    @JSONField(name = "redirect_url", ordinal = 5)
    private String redirectUrl;

    /**
     * String  从上一环节中获取
     */
    @JSONField(ordinal = 6)
    private String ticket;

    /**
     * Int  授权类型，0：开票授权，1：填写字段开票授权，2：领票授权
     */
    @JSONField(ordinal = 7)
    private Integer type;

    public String getsPappid() {
        return sPappid;
    }

    public void setsPappid(String sPappid) {
        this.sPappid = sPappid;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getRedirectUrl() {
        return redirectUrl;
    }

    public void setRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
    }

    public Integer getMoney() {
        return money;
    }

    public void setMoney(Integer money) {
        this.money = money;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getTicket() {
        return ticket;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public AuthorPageTicket(String sPappid, String orderId, Integer money, String timestamp, String redirectUrl, String ticket) {
        this.sPappid = sPappid;
        this.orderId = orderId;
        this.money = money;
        this.timestamp = timestamp;
        this.source = "web";
        //完成后跳转的页面 , 开票完成后，。点击完成跳转的页面
        this.redirectUrl = redirectUrl;
        this.ticket = ticket;
        this.type = 1;
    }

}

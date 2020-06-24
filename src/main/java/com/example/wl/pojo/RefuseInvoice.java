package com.example.wl.pojo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: 拒绝开票请求参数实体类
 * @author: Administrator
 * @create: 2018-12-30 15:15
 **/
public class RefuseInvoice {

    /**
     * string	是	开票平台在微信上的标识，由开票平台告知商户
     */
    @JSONField(name = "s_pappid", ordinal = 0)
    private String sPappid;

    /**
     * string	是	订单 id
     */
    @JSONField(name = "order_id", ordinal = 1)
    private String orderid;

    /**
     * string	是	商家解释拒绝开票的原因，如重复开票，抬头无效、已退货无法开票等
     */
    @JSONField(ordinal = 2)
    private String reason;

    /**
     * string	否	跳转链接，引导用户进行下一步处理，如重新发起开票、重新填写抬头、展示订单情况等
     */
    @JSONField(ordinal = 3)
    private String url;


    public String getsPappid() {
        return sPappid;
    }

    public void setsPappid(String sPappid) {
        this.sPappid = sPappid;
    }

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

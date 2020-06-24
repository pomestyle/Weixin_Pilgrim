package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: 发票 实体类
 * @author: Pilgrim
 * @time: 2018 2018/12/28 17:49
 */
public class Invoice {

    /**
     * string	是	发票order_id，既商户给用户授权开票的订单号
     */
    @JSONField(name = "order_id")
    private String orderId;

    /**
     * String	是	发票card_id
     */
    @JSONField(name = "card_id", ordinal = 2)
    private String cardId;

    /**
     * String	是	该订单号授权时使用的appid，一般为商户appid
     */
    @JSONField(name = "appid", ordinal = 3)
    private String appId;

    /**
     * Object	是	发票具体内容
     */
    @JSONField(name = "card_ext", ordinal = 1)
    private CardEx cardExt;

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public void setCardId(String cardId) {
        this.cardId = cardId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public void setCardExt(CardEx cardExt) {
        this.cardExt = cardExt;
    }

    public String getOrderId() {
        return orderId;
    }

    public String getCardId() {
        return cardId;
    }

    public String getAppId() {
        return appId;
    }

    public CardEx getCardExt() {
        return cardExt;
    }
}

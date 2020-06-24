package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: 发票具体内容 实体
 * @author: Pilgrim
 * @time: 2018 2018/12/28 17:49
 */
public class CardEx {

    /**
     * String	是	随机字符串，防止重复
     */
    @JSONField(name = "nonce_str")
    private String nonceStr;

    /**
     * Object 是	用户信息结构体
     */
    @JSONField(name = "user_card", ordinal = 1)
    private UserCard userCard;


    public String getNonceStr() {
        return nonceStr;
    }

    public void setNonceStr(String nonceStr) {
        this.nonceStr = nonceStr;
    }

    public UserCard getUserCard() {
        return userCard;
    }

    public void setUserCard(UserCard userCard) {
        this.userCard = userCard;
    }
}

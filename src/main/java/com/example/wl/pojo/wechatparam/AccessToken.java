package com.example.wl.pojo.wechatparam;

import java.util.Date;

/**
 * @version 1.0
 * @description: 获取access_token 实体类
 * @author: Pilgrim
 * @time: 2019/1/18 16:34
 */
public class AccessToken {

    /**
     * 成功有效时间
     */
    private String expires_in;
    /**
     * 普通Token
     */
    private String access_token;
    /**
     * 失败ID
     */
    private String errcode;
    /**
     * 失败消息
     */
    private String errmsg;
    /**
     * 过期时间 ， 默认2小时
     */
    private long expiresIn;

    public long getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public String getExpires_in() {
        return expires_in;
    }

    public void setExpires_in(String expires_in) {
        this.expires_in = expires_in;
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public String getErrcode() {
        return errcode;
    }

    public void setErrcode(String errcode) {
        this.errcode = errcode;
    }

    public String getErrmsg() {
        return errmsg;
    }

    public void setErrmsg(String errmsg) {
        this.errmsg = errmsg;
    }

    /**
     * @param access_token 从微信服务器获取到的过期时间access-token
     */
    public AccessToken(String access_token) {
        this.access_token = access_token;
        expiresIn = new Date().getTime() / 1000 + 7000;
    }

    /**
     * 判断token是否过期
     * @return true 过期 false 不过期
     */
    public boolean isExpired() {
        if(new Date().getTime() / 1000 > expiresIn ){
            return false;
        }
        return true;
    }
}
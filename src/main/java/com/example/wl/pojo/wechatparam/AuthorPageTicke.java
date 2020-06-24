package com.example.wl.pojo.wechatparam;

/**
 * @description: 获取授权页面ticket实体类 ，用来存储 返回信息，判断ticket是否过期
 * @author: Pilgrim
 * @time: 2018/12/29 2018/12/29 9:23
 */
public class AuthorPageTicke {
    private Integer errcode;
    private String errmsg;
    /**
     * 授权页面ticket
     */
    private String ticket;
    /**
     * 过期时间
     */
    private Integer expires_in;

    private Long expiresIn;


    public Integer getErrcode() {
        return errcode;
    }

    public void setErrcode(Integer errcode) {
        this.errcode = errcode;
    }

    public String getErrmsg() {
        return errmsg;
    }

    public void setErrmsg(String errmsg) {
        this.errmsg = errmsg;
    }

    public String getTicket() {
        return ticket;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }

    public Integer getExpires_in() {
        return expires_in;
    }

    public void setExpires_in(Integer expires_in) {
        this.expires_in = expires_in;
    }


    public AuthorPageTicke(String ticket, Integer expiresIn) {
        this.ticket = ticket;
        this.expiresIn = System.currentTimeMillis() + expiresIn * 1000;
    }

    public boolean expires() {
        return System.currentTimeMillis() > expiresIn;
    }

}

package com.example.wl.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;

import java.util.Map;

/**
 * @version 1.0
 * @description: base模板实体类
 * @author: Pilgrim
 * @time: 2019/1/18 16:35
 */
@XStreamAlias("xml") //设置根节点名
public class BaseMsg {

    /**
     * 置顶别名首字母大写
     */
    @XStreamAlias("ToUserName")
    /**
     * 开发者微信号
     */
    private String toUserName;
    /**
     * 发送方帐号（一个OpenID）
     */
    private String FromUserName;
    /**
     * 消息创建时间 （整型）
     */
    private String CreateTime;
    /**
     * MsgType 文本类型
     */
    private String MsgType;


    public String getToUserName() {
        return toUserName;
    }

    public void setToUserName(String toUserName) {
        toUserName = toUserName;
    }

    public String getFromUserName() {
        return FromUserName;
    }

    public void setFromUserName(String fromUserName) {
        FromUserName = fromUserName;
    }

    public String getCreateTime() {
        return CreateTime;
    }

    public void setCreateTime(String createTime) {
        CreateTime = createTime;
    }

    public String getMsgType() {
        return MsgType;
    }

    public void setMsgType(String msgType) {
        MsgType = msgType;
    }

    public BaseMsg() {
    }

    public BaseMsg(Map<String, String> map) {
        this.CreateTime = System.currentTimeMillis() / 1000 + "";
        this.FromUserName = map.get("ToUserName");
        this.toUserName = map.get("FromUserName");
    }

}

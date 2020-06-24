package com.example.wl.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;

import java.util.Map;

/**
 * @author 二维码参数类
 */
@XStreamAlias("xml")
public class ScanTicket extends BaseMsg {

    /**
     * 消息类型，event
     */
    private String MsgType;
    /**
     * 事件类型，subscribe
     */
    private String Event;
    /**
     * 事件KEY值，qrscene_为前缀，后面为二维码的参数值
     */
    private String EventKey;
    /**
     * 二维码的ticket，可用来换取二维码图片
     */
    private String Ticket;

/*    @XStreamOmitField
    private String je;
    @XStreamOmitField
    private String hbh;*/


    @Override
    public String getMsgType() {
        return MsgType;
    }

    @Override
    public void setMsgType(String msgType) {
        MsgType = msgType;
    }

    public String getEvent() {
        return Event;
    }

    public void setEvent(String event) {
        Event = event;
    }

    public String getEventKey() {
        return EventKey;
    }

    public void setEventKey(String eventKey) {
        EventKey = eventKey;
    }

    public String getTicket() {
        return Ticket;
    }

    public void setTicket(String ticket) {
        Ticket = ticket;
    }

    public ScanTicket(Map<String, String> map, String event, String eventKey, String ticket) {
        super(map);
        this.Event = event;
        this.EventKey = eventKey;
        this.Ticket = ticket;
        this.MsgType = "event";
    }

}

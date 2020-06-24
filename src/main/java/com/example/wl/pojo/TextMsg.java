package com.example.wl.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;

import java.util.Map;

/**
 * @version 1.0
 * @description: 消息文本模板实体类
 * @author: Pilgrim
 * @time: 2019/1/18 16:36
 */
@XStreamAlias("xml")
public class TextMsg extends BaseMsg {
    /**
     * 文本消息内容
     */
    private String Content;

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }


    public TextMsg(Map<String, String> map, String Content) {
        super(map);
        this.Content = Content;
        this.setMsgType("text");
    }

}

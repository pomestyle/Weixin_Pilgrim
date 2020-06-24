package com.example.wl.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * @version 1.0
 * @description: 回复图文消息
 * @author: Pilgrim
 * @time: 2019/1/18 16:36
 */
//设置根节点名
@XStreamAlias("xml")
@Data
public class ImageMsg extends BaseMsg {

    /**
     * 是	图文消息个数；当用户发送文本、图片、视频、图文、地理位置这五种消息时，开发者只能回复1条图文消息；其余场景最多可回复8条图文消息
     */
    private String ArticleCount;
    /**
     * 是	图文消息信息，注意，如果图文数超过限制，则将只发限制内的条数
     */
    private List<ArticlesItem> Articles;

   /* private String Title;//	是	图文消息标题
    private String Description;//	是	图文消息描述
    private String PicUrl;//	是	图片链接，支持JPG、PNG格式，较好的效果为大图360*200，小图200*200
    private String Url;//	是	点击图文消息跳转链接*/


    public ImageMsg() {
    }

    public ImageMsg(Map<String, String> map) {
        super(map);
        this.setMsgType("news");
    }


}

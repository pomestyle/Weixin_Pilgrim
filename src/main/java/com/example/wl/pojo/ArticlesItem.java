package com.example.wl.pojo;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import lombok.Data;

/**
 * @version 1.0
 * @description: 回复图文消息内容
 * @author: Pilgrim
 * @time: 19-3-3 下午5:57
 */
@Data
@XStreamAlias("item")
public class ArticlesItem {

    @XStreamAlias("Title")
    private String title;

    @XStreamAlias("Description")
    private String description;

    @XStreamAlias("PicUrl")
    private String picUrl;

    @XStreamAlias("Url")
    private String url;


}

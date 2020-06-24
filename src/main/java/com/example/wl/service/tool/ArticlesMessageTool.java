package com.example.wl.service.tool;

import com.example.wl.config.WeChatConfig;
import com.example.wl.pojo.ArticlesItem;
import com.example.wl.pojo.ImageMsg;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @version 1.0
 * @description: 回复图文的消息
 * @author: Pilgrim
 * @time: 19-3-3 下午5:41
 */
public class ArticlesMessageTool {

    /**
     * 获取博客图文消息
     * @param xmlData
     * @return
     */
    public static ImageMsg getAiticlesMessage(Map<String, String> xmlData, String url) {
        ImageMsg imageMsg = new ImageMsg(xmlData);
        List<ArticlesItem> list = new ArrayList<>(1);
        ArticlesItem item = new ArticlesItem();

        //图片路径
        String picurl = WeChatConfig.getServer() + "/img/fhdf.png";

        item.setDescription("文本描述描述描述描述描述......");
        item.setTitle("文本标题标题！");
        item.setPicUrl(picurl);
        item.setUrl(url);

        list.add(item);
        //可以设置多个
        imageMsg.setArticleCount("1");
        imageMsg.setMsgType("news");
        imageMsg.setArticles(list);

        return imageMsg;
    }

}

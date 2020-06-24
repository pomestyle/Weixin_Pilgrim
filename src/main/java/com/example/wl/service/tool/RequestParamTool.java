package com.example.wl.service.tool;

import com.example.wl.config.WeChatConfig;
import com.example.wl.pojo.BaseMsg;
import com.example.wl.pojo.ImageMsg;
import com.example.wl.pojo.ScanTicket;
import com.example.wl.pojo.TextMsg;
import com.example.wl.util.Sha1Util;
import com.thoughtworks.xstream.XStream;
import lombok.extern.slf4j.Slf4j;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.io.InputStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 请求参数工具类   获取 验证
 * 返回给用户信息
 * @author Pilgrim
 */
@Slf4j
public class RequestParamTool {

    private static String token = WeChatConfig.token;

    /**
     * 获取token验证
     * @param timestamp
     * @param nonce
     * @param signature
     * @return
     */
    public static boolean check(String timestamp, String nonce, String signature) {
        log.info("token = {}", token);
        String[] strings = new String[]{token, timestamp, nonce};
        Arrays.sort(strings);
        String sha1Str = strings[0] + strings[1] + strings[2];
        //sha1加密
        String string2Sha1 = Sha1Util.getSha1(sha1Str);
        log.info("加密前：{}", sha1Str);
        log.info("加密后：{}", string2Sha1);
        //signature 与生成的signature 对比
        return (string2Sha1 != null && string2Sha1.equalsIgnoreCase(signature)) ? true : false;
    }

    /**
     * 解析xml 获取key-value
     *
     * @param inputStream
     * @return
     */
    public static Map<String, String> getXmlData(InputStream inputStream) {
        Map<String, String> map = new HashMap<>(12);
        //截取xml
        SAXReader reader = new SAXReader();
        try {

            Document document = reader.read(inputStream);
            //获取根节点
            Element rootElement = document.getRootElement();
            // h获取所有的节点
            List<Element> elements = rootElement.elements();
            for (Element e : elements) {
                map.put(e.getName(), e.getStringValue());
            }

        } catch (DocumentException e) {
            e.printStackTrace();
        }
        return map;
    }

    /**
     * @description: 将xml字符串转为map
     * @author: Pilgrim
     * @time: 2019/3/21 14:03
     * @version 1.0
     */
    public static Map<String, String> getXmlData(String xmlStr) {
        Map<String, String> map = new HashMap<>(12);
        //截取xml
        try {
            Document document = DocumentHelper.parseText(xmlStr);
            Element rootElement = document.getRootElement(); //获取根节点
            List<Element> elements = rootElement.elements(); // h获取所有的节点
            for (Element e : elements) {
                map.put(e.getName(), e.getStringValue());
            }

        } catch (DocumentException e) {
            e.printStackTrace();
        }
        return map;
    }

    /**
     * @description: 推送图文页面
     * @author: Pilgrim
     * @time: 2018/12/29 11:07
     */
    public static BaseMsg url(Map<String, String> xmlData, String url) {
        //设置图文消息
        BaseMsg outputMsg = ArticlesMessageTool.getAiticlesMessage(xmlData, url);
        log.info("推送图文页面:  {} ",outputMsg.toString());
        return outputMsg;
    }

    /**
     * @description: 推送不相应消息
     * @author: Pilgrim
     * @time: 19-3-3 下午6:22
     * @version 1.0
     */
    public static BaseMsg url(Map<String, String> xmlData) {
        BaseMsg bm = new TextMsg(xmlData, "");
        return bm;
    }

    /**
     * @param xmlData 扫码开票使用的回复消息
     * @return TextMsg
     */
    public static BaseMsg dealTextForBuild(Map<String, String> xmlData, String result) {
        //获取请求聊天信息
        String content = xmlData.get("Content");
        BaseMsg bm = new TextMsg(xmlData, result);

        if (content != null && "开票".equals(content)) {
            bm = new TextMsg(xmlData, "亲,请用微信扫描小票上的二维码进行开票业务。");
            return bm;
        }
        return bm;
    }

    /**
     * @param xmlData 返回图文信息
     * @return ImageMsg
     */
    public static BaseMsg dealImageForBuild(Map<String, String> xmlData, String result) {
        BaseMsg bm = new TextMsg(xmlData, result);
        //获取请求聊天信息
        String content = xmlData.get("Content");

        if (content != null && "开票".equals(content)) {
            bm = new TextMsg(xmlData, "亲,请用微信扫描小票上的二维码进行开票业务。");
            return bm;
        }
        return bm = new TextMsg(xmlData, result);
    }

    /**
     * @param xmlData 普通的文本回复消息
     * @return TextMsg
     */
    public static BaseMsg dealTextForBuild(Map<String, String> xmlData) {
        //获取请求聊天信息
        String content = xmlData.get("Content");
        BaseMsg bm = null;

        if (content != null && "开票".equals(content)) {
            bm = new TextMsg(xmlData, "亲,请用微信扫描小票上的二维码进行开票业务。");
            return bm;
        } else {
            return bm = handleClick(xmlData);
        }
    }

    public static BaseMsg handleClick(Map<String, String> xmlData) {
        String eventKey = xmlData.get("EventKey");
        BaseMsg bm = null;

        String h1 = "<a href= \"";
        String h2 = "\">";
        String h3 = "</a>";
        StringBuilder result = new StringBuilder();
        String emailStr = "邮箱：";
        switch (eventKey) {

            case "11":
                bm = new TextMsg(xmlData, WeChatConfig.companyProfile);
                break;

            case "12":

                bm = new TextMsg(xmlData, result.append(WeChatConfig.contact).append("\n").append(emailStr).append(WeChatConfig.contactEmail).toString());

                break;

            case "13":
                bm = new TextMsg(xmlData, result.append(WeChatConfig.complaintsTitile).append("\n").append(WeChatConfig.complaintsSuggestions).append("\n").append(WeChatConfig.complaintsSuggestionsEmail).append("\n\n").append("二维码开票咨询：022-58208157（工作日09:00-16:00）").toString());
                break;

            /**
             wechat.yanHang=各航司航延证明开具入口：
             wechat.haiHang=海南航空、大新华航空
             wechat.haiHangUrl=http://wx.hnair.com/wxoauth/huwx/authorize?rtc=wxbd&winzoom=1=
             wechat.xiangHang=祥鹏航空
             wechat.xiangHangUrl=http://www.luckyair.net/frontend2016/passengerService/delayCertification.jsp
             wechat.xiBu=西部航空
             wechat.xiBuUrl=http://www.westair.cn/WestAirPortal/fltdelay/delay.html
             wechat.fuZhou=福州航空
             wechat.fuZhouUrl=http://www.fuzhou-air.cn/frontend/delayProve/delayProve.jsp
             wechat.jinHang=金鹏航空
             wechat.jinHangUrl=http://www.yzr.com.cn/frontend/paxService/checkflightDelay.action
             wechat.shouHang=首都航空客服95071999
             wechat.changAn=长安航空客服95071199
             */
            case "31":
                bm = new TextMsg(xmlData, result.append(WeChatConfig.yanHang).append("\n")
                        .append(h1).append(WeChatConfig.haiHangUrl).append(h2).append(WeChatConfig.haiHang).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.xiangHangUrl).append(h2).append(WeChatConfig.xiangHang).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.xiBuUrl).append(h2).append(WeChatConfig.xiBu).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.fuZhouUrl).append(h2).append(WeChatConfig.fuZhou).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.jinHangUrl).append(h2).append(WeChatConfig.jinHang).append(h3).append("\n")
                        .append(WeChatConfig.shouHang).append("\n")
                        .append(WeChatConfig.changAn).append("\n")
                        .append("更多航司即将上线，敬请期待！").toString());
                break;
            /**
             #满意度
             wechat.myd=旅客满意度调查
             wechat.djfw=1. 登机服务
             wechat.djfwUrl=https://www.wjx.cn/jq/26664428.aspx
             wechat.gbsfw=2. 贵宾室服务
             wechat.gbsfwUrl=https://www.wjx.cn/jq/26663352.aspx
             wechat.zjfw=3. 值机服务
             wechat.zjfwUrl=https://www.wjx.cn/jq/26533471.aspx
             wechat.pssenger=Passenger satisfaction survey:
             en
             wechat.djfwEn=1. Bording service
             wechat.djfwEnUrl=https://www.wjx.cn/jq/26661661.aspx
             wechat.gbsfwEn=2. VIP lounge service
             wechat.gbsfwEnUrl=https://www.wjx.cn/jq/26660661.aspx
             wechat.zjfwEn=3. Check-in service
             wechat.zjfwEnUrl=https://www.wjx.cn/jq/26660855.aspx
             */
            case "33":
                bm = new TextMsg(xmlData, result.append(WeChatConfig.myd).append("\n")
                        .append(h1).append(WeChatConfig.djfwUrl).append(h2).append(WeChatConfig.djfw).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.gbsfwUrl).append(h2).append(WeChatConfig.gbsfw).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.zjfwUrl).append(h2).append(WeChatConfig.zjfw).append(h3).append("\n")

                        .append(WeChatConfig.pssenger).append("\n")

                        .append(h1).append(WeChatConfig.djfwEnUrl).append(h2).append(WeChatConfig.djfwEn).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.gbsfwEnUrl).append(h2).append(WeChatConfig.gbsfwEn).append(h3).append("\n")
                        .append(h1).append(WeChatConfig.zjfwEnUrl).append(h2).append(WeChatConfig.zjfwEn).append(h3).append("\n")
                        .toString());

                break;

            default:
                bm = new TextMsg(xmlData, " 欢迎使用xxxxxx公众号！ ");
        }

        return bm;
    }


    /**
     * @description:实体转xml字符转
     * @param: baseMsg
     * @return: String
     * @auther: Pilgrim
     * @date: 2019/1/4 8:45
     * @version: 1.0
     **/
    public static String bean2Xml(BaseMsg baseMsg) {
        XStream xStream = new XStream();
        //若没有这句，xml中的根元素会是<包.类名>；或者说：注解根本就没生效，所以的元素名就是类的属性
        xStream.processAnnotations(BaseMsg.class);
        xStream.processAnnotations(TextMsg.class);
        xStream.processAnnotations(ScanTicket.class);
        xStream.processAnnotations(ImageMsg.class);
        String xml = xStream.toXML(baseMsg);
        log.info("返回的xml = {}", xml);
        return xml;
    }

    /**
     *  * @description 将xml字符串转换成map
     *  * @param xml
     *  * @return Map
     *  
     */
    public static Map<String, String> readStringXmlOut(String xml) {
        Map<String, String> map = new HashMap<>(12);
        Document doc = null;
        try {
            doc = DocumentHelper.parseText(xml); // 将字符串转为XML
            Element rootElt = doc.getRootElement(); // 获取根节点
            @SuppressWarnings("unchecked")
            List<Element> list = rootElt.elements();// 获取根节点下所有节点
            for (Element element : list) { // 遍历节点
                map.put(element.getName(), element.getText()); // 节点的name为map的key，text为map的value
            }
        } catch (DocumentException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

}
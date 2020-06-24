package com.example.wl.pojo.model;

import java.util.Map;


/**
 * @description: 需要发送的数据实体  微信模板方法 暂时不涉及到使用
 * @author: Pilgrim
 * @time: 2019/2/12 15:29
 * @version 1.0
 */


/**
 * json  数据格式如下
 * <p>
 * <p>
 * 参数	是否必填	说明、
 * ---------------------
 * touser	    是	接收者openid
 * template_id	是	模板ID
 * url	        否	模板跳转链接
 * miniprogram	否	跳小程序所需数据，不需跳小程序可不用传该数据
 * appid	    是	所需跳转到的小程序appid（该小程序appid必须与发模板消息的公众号是绑定关联关系）
 * pagepath	    是	所需跳转到小程序的具体页面路径，支持带参数,（示例index?foo=bar）
 * data	        是	模板数据
 * ---------------------
 * <p>
 * {
 * "touser":"OPENID",
 * "template_id":"ngqIpbwh8bUfcSsECmogfXcV14J0tQlEpBO27izEYtY",
 * "url":"http://weixin.qq.com/download",
 * "miniprogram":{
 * "appid":"xiaochengxuappid12345",
 * "pagepath":"index?foo=bar"
 * },
 * "data":{
 * "first": {
 * "value":"恭喜你购买成功！",
 * "color":"#173177"
 * },
 * "keynote1":{
 * "value":"巧克力",
 * "color":"#173177"
 * },
 * "keynote2": {
 * "value":"39.8元",
 * "color":"#173177"
 * },
 * "keynote3": {
 * "value":"2014年9月22日",
 * "color":"#173177"
 * },
 * "remark":{
 * "value":"欢迎再次购买！",
 * "color":"#173177"
 * }
 * }
 * }
 *
 * @author Pilgrim
 */
public class WechatTemplate {

    private String touser;

    private String template_id;

    private String url;

    private Map<String, TemplateData> data;

    public String getTouser() {
        return touser;
    }

    public void setTouser(String touser) {
        this.touser = touser;
    }

    public String getTemplate_id() {
        return template_id;
    }

    public void setTemplate_id(String template_id) {
        this.template_id = template_id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Map<String, TemplateData> getData() {
        return data;
    }

    public void setData(Map<String, TemplateData> data) {
        this.data = data;
    }
}
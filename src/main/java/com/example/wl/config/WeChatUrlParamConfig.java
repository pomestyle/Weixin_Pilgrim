package com.example.wl.config;

/**
 * @version 1.0
 * @description: 微信发送接口需要用到的URl
 * @author: Pilgrim
 * @time: 2019/1/18 16:45
 */
public class WeChatUrlParamConfig {

    //开票完成后返回的页面url
    public static String WX_GZH = WeChatConfig.getServer() + "/page/finishedPage";

    //卡包中查看发票详情页面
    //public static String WX_Card_INVOCIE_DETAILS_URL = ParamConfig.getPageUrlServer() + "/findInvoiceDetailsUrl";

    public final static String ACCESS_TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET";

    //返回二维码链接url
    public final static String BACK_QR_CODE_URL = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=";

    //获取已关注用户信息
    public final static String GET_ALREADY_FOCUS_ON_URL = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN";

    //网页授权获取用户信息  用户同意授权 , 获取code
    public final static String GET_CODE_URL = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code";

    //临时生成字符二维码url
    public final static String GET_CODE_TICKET_URL = "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN";

    //发送模板消息
    public final static String SEND_MODLE_NEWS_URL = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=";

    //设置微信开票抬头字段url
    public final static String SET_INVOCIES_TITLE_URL = "https://api.weixin.qq.com/card/invoice/setbizattr?action=set_auth_field&access_token=";

    //自定义菜单的接口
    public final static String CREAT_OPTION_URL = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=";
}

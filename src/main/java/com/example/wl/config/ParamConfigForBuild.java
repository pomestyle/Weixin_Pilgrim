package com.example.wl.config;

/**
 * @version 1.0
 * @description: 配置自建参数URL类
 * @author: Pilgrim
 * @time: 2019/1/18 16:36
 */
public class ParamConfigForBuild {

    /**
     * 商户联系方式
     */
    public static final String MERCHANTS_CONTACT_URL = "https://api.weixin.qq.com/card/invoice/setbizattr?action=set_contact&access_token=";

    /**
     * 获取授权页ticket AUTHOR_TICKET_URL
     */
    public static final String AUTHOR_TICKET_URL = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=wx_card";

    /**
     * 获取授权页链接
     */
    public static final String AUTHOR_PAGE_URL = "https://api.weixin.qq.com/card/invoice/getauthurl?access_token=";

    /**
     * @description: 若商户向用户展示的授权页为type=1类型，商户在收到授权完成事件推送后需要进一步获取用户的开票信息
     * @author: Pilgrim
     * @time: 2019/1/16 16:19
     * @version 1.0
     * 参考url : https://mp.weixin.qq.com/wiki?t=resource/res_main&id=21517918906Epe65&anchor=1
     */
    /**
     * 查询授权完成状态
     */
    public static final String HAVED_AUTHOR_PAGE_URL = "https://api.weixin.qq.com/card/invoice/getauthdata?access_token=";

    //上面是    自建扫码开票流程接口url 配置
    //---------------------------------分割---------------------------------------
    //下面是    添加卡包流程配置

    /**
     * 获取自身的开票平台识别码
     */
    public static final String IDENTIFICATION_CODE_URL = "https://api.weixin.qq.com/card/invoice/seturl?access_token=";

    /**
     * 创建发票卡券模板
     */
    public static final String INVOICE_MODEL_URL = "https://api.weixin.qq.com/card/invoice/platform/createcard?access_token=";

    /**
     * 上传PDF 请求URL：
     */
    public static final String IP_LOAD_PDF_URL = "https://api.weixin.qq.com/card/invoice/platform/setpdf?access_token=";

    /**
     * 查询已上传的PDF文件 请求URL
     */
    public static final String FIND_UP_LOADED_PDF_FILE_URL = "https://api.weixin.qq.com/card/invoice/platform/getpdf?action=get_url&access_token=";

    /**
     * 将电子发票卡券插入用户卡包
     */
    public static final String ADD_INVOICE_TO_USERCARD_URL = "https://api.weixin.qq.com/card/invoice/insert?access_token=";

    /**
     * 将电子发票卡券插入用户卡包
     */
    public static final String MERCHANTS_INVOICE_LOGO_URL = "https://api.weixin.qq.com/cgi-bin/material/add_news?access_token=";

    /**
     * 拒绝开票
     */
    public static final String RESFUSE_INVOICE_URL = "https://api.weixin.qq.com/card/invoice/rejectinsert?access_token=";

}

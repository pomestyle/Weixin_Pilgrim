package com.example.wl.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * @version 1.0
 * @description: 获取配置文件
 * @author: Pilgrim
 * @time: 2019/1/18 15:42
 */
@Component
@ConfigurationProperties(prefix = "wechat")
@PropertySource("classpath:weChat.properties")
public class WeChatConfig {

    /**
     * @description: 微信服务参数设置
     * @author: Pilgrim
     * @time: 2019/1/29 14:55
     * @version 1.0
     */
    public static String token; //自己设置的token

    public static String appid;

    public static String scope;

    public static String appsecret;

    public static String server;

    public static String qrOrderExpireTime;//设置二维码过期时间

    /**
     * @description: 开票中心url
     * @author: Pilgrim
     * @time: 2019/1/29 14:54
     * @version 1.0
     */
    public static String fpkjUrl;



    /************  菜单设置  ***********/

    //关于飞航
    //公司简介
    public static String companyProfile;

    //联系方式
    public static String contact;
    public static String contactEmail;
    //联系方式url
    public static String contactUrl;
    //旅客投诉
    public static String complaintsTitile;
    //投诉建议
    public static String complaintsSuggestions;
    public static String complaintsSuggestionsEmail;
    public static String invoiceTel;
    //飞航人
    public static String feihangRen;

    //地服产品
    //行李管家
    public static String packages;
    //飞航商城
    public static String feiHangShangCheng;

    //便捷服务
    //延航服务
    public static String yanHang;
    public static String haiHang;
    public static String haiHangUrl;
    public static String xiangHang;
    public static String xiangHangUrl;
    public static String xiBu;
    public static String xiBuUrl;
    public static String fuZhou;
    public static String fuZhouUrl;
    public static String jinHang;
    public static String jinHangUrl;
    public static String shouHang;
    public static String changAn;
    public static String sss;

    //北京行查
    public static String bjxc;


    //满意度
    public static String myd;
    public static String djfw;
    public static String djfwUrl;
    public static String gbsfw;
    public static String gbsfwUrl;
    public static String zjfw;
    public static String zjfwUrl;
    public static String pssenger;

    public static String djfwEn;
    public static String djfwEnUrl;
    public static String gbsfwEn;
    public static String gbsfwEnUrl;
    public static String zjfwEn;
    public static String zjfwEnUrl;

    //行李查询
    public final static  String XING_CHA_XUN = "https://mp.weixin.qq.com/s?__biz=MzI2ODE4Nzk5MA==&mid=505624196&idx=1&sn=9e51761532964e810876ec6999c4d441&chksm=7124f6bd46537fab80cae905b354aa2d9c751136c7c367a7626a4140fd45ac9ee40ce6cb0cc9&scene=18&xtrack=1&key=bd9dbb3d8b76afd69255230ac708f0a311af029dc3391f35ab416fbebd0392ee5ed60570b86321606287dca30437990b976ae9d3e323ebf712588efb8d84ed26500087d004123a3e9d53ee09283be7cd&ascene=1&uin=MjczMjQzMDQ2NA%3D%3D&devicetype=Windows+10&version=62060739&lang=zh_CN&pass_ticket=kMZ5Z5NGR45uBCjNv%2Fi%2Fs8JkBCWTo9mG5frcq0ItlOJ7g%2BGgJEIQmbDzsz9vsR7W";

    @Value("${wechat.bjxc}")
    public  void setBjxc(String bjxc) {
        WeChatConfig.bjxc = bjxc;
    }

    @Value("${wechat.myd}")
    public  void setMyd(String myd) {
        WeChatConfig.myd = myd;
    }
    @Value("${wechat.djfw}")
    public  void setDjfw(String djfw) {
        WeChatConfig.djfw = djfw;
    }
    @Value("${wechat.djfwUrl}")
    public  void setDjfwUrl(String djfwUrl) {
        WeChatConfig.djfwUrl = djfwUrl;
    }
    @Value("${wechat.gbsfw}")
    public  void setGbsfw(String gbsfw) {
        WeChatConfig.gbsfw = gbsfw;
    }
    @Value("${wechat.gbsfwUrl}")
    public  void setGbsfwUrl(String gbsfwUrl) {
        WeChatConfig.gbsfwUrl = gbsfwUrl;
    }
    @Value("${wechat.zjfw}")
    public  void setZjfw(String zjfw) {
        WeChatConfig.zjfw = zjfw;
    }
    @Value("${wechat.zjfwUrl}")
    public  void setZjfwUrl(String zjfwUrl) {
        WeChatConfig.zjfwUrl = zjfwUrl;
    }
    @Value("${wechat.pssenger}")
    public  void setPssenger(String pssenger) {
        WeChatConfig.pssenger = pssenger;
    }
    @Value("${wechat.djfwEn}")
    public  void setDjfwEn(String djfwEn) {
        WeChatConfig.djfwEn = djfwEn;
    }
    @Value("${wechat.djfwEnUrl}")
    public  void setDjfwEnUrl(String djfwEnUrl) {
        WeChatConfig.djfwEnUrl = djfwEnUrl;
    }
    @Value("${wechat.gbsfwEn}")
    public  void setGbsfwEn(String gbsfwEn) {
        WeChatConfig.gbsfwEn = gbsfwEn;
    }
    @Value("${wechat.gbsfwEnUrl}")
    public  void setGbsfwEnUrl(String gbsfwEnUrl) {
        WeChatConfig.gbsfwEnUrl = gbsfwEnUrl;
    }
    @Value("${wechat.zjfwEn}")
    public  void setZjfwEn(String zjfwEn) {
        WeChatConfig.zjfwEn = zjfwEn;
    }
    @Value("${wechat.feihangRen}")
    public  void setFeihangRen(String feihangRen) {
        WeChatConfig.feihangRen = feihangRen;
    }
    @Value("${wechat.package}")
    public  void setPackages(String packages) {
        WeChatConfig.packages = packages;
    }
    @Value("${wechat.feiHangShangCheng}")
    public  void setFeiHangShangCheng(String feiHangShangCheng) {
        WeChatConfig.feiHangShangCheng = feiHangShangCheng;
    }
    @Value("${wechat.yanHang}")
    public  void setYanHang(String yanHang) {
        WeChatConfig.yanHang = yanHang;
    }
    @Value("${wechat.haiHang}")
    public  void setHaiHang(String haiHang) {
        WeChatConfig.haiHang = haiHang;
    }
    @Value("${wechat.haiHangUrl}")
    public  void setHaiHangUrl(String haiHangUrl) {
        WeChatConfig.haiHangUrl = haiHangUrl;
    }
    @Value("${wechat.xiangHang}")
    public  void setXiangHang(String xiangHang) {
        WeChatConfig.xiangHang = xiangHang;
    }
    @Value("${wechat.xiangHangUrl}")
    public  void setXiangHangUrl(String xiangHangUrl) {
        WeChatConfig.xiangHangUrl = xiangHangUrl;
    }
    @Value("${wechat.xiBu}")
    public  void setXiBu(String xiBu) {
        WeChatConfig.xiBu = xiBu;
    }
    @Value("${wechat.xiBuUrl}")
    public  void setXiBuUrl(String xiBuUrl) {
        WeChatConfig.xiBuUrl = xiBuUrl;
    }
    @Value("${wechat.fuZhou}")
    public  void setFuZhou(String fuZhou) {
        WeChatConfig.fuZhou = fuZhou;
    }
    @Value("${wechat.fuZhouUrl}")
    public  void setFuZhouUrl(String fuZhouUrl) {
        WeChatConfig.fuZhouUrl = fuZhouUrl;
    }
    @Value("${wechat.jinHang}")
    public  void setJinHang(String jinHang) {
        WeChatConfig.jinHang = jinHang;
    }
    @Value("${wechat.jinHangUrl}")
    public  void setJinHangUrl(String jinHangUrl) {
        WeChatConfig.jinHangUrl = jinHangUrl;
    }
    @Value("${wechat.shouHang}")
    public  void setShouHang(String shouHang) {
        WeChatConfig.shouHang = shouHang;
    }
    @Value("${wechat.changAn}")
    public  void setChangAn(String changAn) {
        WeChatConfig.changAn = changAn;
    }

    @Value("${wechat.zjfwEnUrl}")
    public  void setZjfwEnUrl(String zjfwEnUrl) {
        WeChatConfig.zjfwEnUrl = zjfwEnUrl;
    }

    @Value("${wechat.companyProfile}")
    public  void setCompanyProfile(String companyProfile) {
        WeChatConfig.companyProfile = companyProfile;
    }
    @Value("${wechat.contact}")
    public  void setContact(String contact) {
        WeChatConfig.contact = contact;
    }
    @Value("${wechat.contactEmail}")
    public  void setContactEmail(String contactEmail) {
        WeChatConfig.contactEmail = contactEmail;
    }
    @Value("${wechat.contactUrl}")
    public  void setContactUrl(String contactUrl) {
        WeChatConfig.contactUrl = contactUrl;
    }
    @Value("${wechat.complaintsSuggestions}")
    public  void setComplaintsSuggestions(String complaintsSuggestions) {
        WeChatConfig.complaintsSuggestions = complaintsSuggestions;
    }
    @Value("${wechat.complaintsTitile}")
    public  void setComplaintsTitile(String complaintsTitile) {
        WeChatConfig.complaintsTitile = complaintsTitile;
    }
    @Value("${wechat.complaintsSuggestionsEmail}")
    public  void setComplaintsSuggestionsEmail(String complaintsSuggestionsEmail) {
        WeChatConfig.complaintsSuggestionsEmail = complaintsSuggestionsEmail;
    }
    @Value("${wechat.invoiceTel}")
    public static void setInvoiceTel(String invoiceTel) {
        WeChatConfig.invoiceTel = invoiceTel;
    }

  /*  @Value("${wechat.fpkjUrl}")
    public void setFpkjUrl(String fpkjUrl) {
        WeChatConfig.fpkjUrl = fpkjUrl;
    }
*/
    @Value("${wechat.server}")
    public void setServer(String server) {
        WeChatConfig.server = server;
    }

    @Value("${wechat.token}")
    public void setToken(String token) {
        WeChatConfig.token = token;
    }

    @Value("${wechat.appid}")
    public void setAppid(String appid) {
        WeChatConfig.appid = appid;
    }

    @Value("${wechat.scope}")
    public void setScope(String scope) {
        WeChatConfig.scope = scope;
    }

    @Value("${wechat.appsecret}")
    public void setAppsecret(String appsecret) {
        WeChatConfig.appsecret = appsecret;
    }

    @Value("${wechat.qrOrderExpireTime}")
    public void setQrOrderExpireTime(String qrOrderExpireTime) {
        WeChatConfig.qrOrderExpireTime = qrOrderExpireTime;
    }

    public static String getToken() {
        return token;
    }

    public static String getAppid() {
        return appid;
    }

    public static String getScope() {
        return scope;
    }

    public static String getAppsecret() {
        return appsecret;
    }

    public static String getServer() {
        return server;
    }

    public static String getFpkjUrl() {
        return fpkjUrl;
    }

    public static String getQrOrderExpireTime() {
        return qrOrderExpireTime;
    }

}

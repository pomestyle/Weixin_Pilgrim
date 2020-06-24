package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @version 1.0
 * @description: 创建发票卡券模板实体类
 * @author: Pilgrim
 * @time: 2019/1/18 16:33
 */
public class BaseInvoiceModel {
    /**
     * string 是 发票商家 LOGO ，请参考 上传图片接口
     */
    @JSONField(name = "logo_url", ordinal = 0)
    private String logoUrl;

    /**
     * string 是收款方（显示在列表），上限为 9 个汉字，建议填入商户
     */
    @JSONField(ordinal = 1)
    private String title;

    /**
     * string 否 开票平台自定义入口名称，与 custom_url 字段共同使用，长 度限制在 5 个汉字内
     */
    @JSONField(name = "custom_url_name", ordinal = 2)
    private String customUrlName;

    /**
     * string 否 开票平台自定义入口跳转外链的地址链接 , 发票外跳的链接会 带有发票参数，用于标识是从哪张发票跳出的链接
     */
    @JSONField(name = "custom_url", ordinal = 3)
    private String customUrl;

    /**
     * string 否 显示在入口右侧的 tips ，长度限制在
     */
    @JSONField(name = "custom_url_sub_title", ordinal = 4)
    private String customUrlsubTitle;

    /**
     * string	否	营销场景的自定义入口
     */
    @JSONField(name = "promotion_url_name", ordinal = 5)
    private String promotionUrlName;

    /**
     * string	否	入口跳转外链的地址链接，发票外跳的链接会带有发票参数，用于标识是从那张发票跳出的链接
     */
    @JSONField(name = "promotion_url", ordinal = 6)
    private String promotionUrl;

    /**
     * string	否	显示在入口右侧的 tips ，长度限制在 6 个汉字内
     */
    @JSONField(name = "promotion_url_sub_title", ordinal = 7)
    private String promotionUrlSubTitle;


    public String getPromotionUrlName() {
        return promotionUrlName;
    }

    public void setPromotionUrlName(String promotionUrlName) {
        this.promotionUrlName = promotionUrlName;
    }

    public String getPromotionUrl() {
        return promotionUrl;
    }

    public void setPromotionUrl(String promotionUrl) {
        this.promotionUrl = promotionUrl;
    }

    public String getPromotionUrlSubTitle() {
        return promotionUrlSubTitle;
    }

    public void setPromotionUrlSubTitle(String promotionUrlSubTitle) {
        this.promotionUrlSubTitle = promotionUrlSubTitle;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCustomUrlName() {
        return customUrlName;
    }

    public void setCustomUrlName(String customUrlName) {
        this.customUrlName = customUrlName;
    }

    public String getCustomUrl() {
        return customUrl;
    }

    public void setCustomUrl(String customUrl) {
        this.customUrl = customUrl;
    }

    public String getCustomUrlsubTitle() {
        return customUrlsubTitle;
    }

    public void setCustomUrlsubTitle(String customUrlsubTitle) {
        this.customUrlsubTitle = customUrlsubTitle;
    }
}

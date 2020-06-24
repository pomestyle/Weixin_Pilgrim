package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @version 1.0
 * @description: 发票卡包模板类型 实体类
 * @author: Pilgrim
 * @time: 2019/1/18 16:34
 */
public class InvoiceModel {

    /**
     * object 是 发票卡券模板基础信息
     */
    @JSONField(name = "base_info")
    private BaseInvoiceModel baseInfo;

    /**
     * 是 发票
     */
    @JSONField(ordinal = 1)
    private String type;

    /**
     * string 是 收款方（开票方）全称，显示在发票详情内。故建议一个收款方对应一 个发票卡券模板
     */
    @JSONField(ordinal = 2)
    private String payee;

    public BaseInvoiceModel getBaseInfo() {
        return baseInfo;
    }

    public void setBaseInfo(BaseInvoiceModel baseInfo) {
        this.baseInfo = baseInfo;
    }

    public String getPayee() {
        return payee;
    }

    public void setPayee(String payee) {
        this.payee = payee;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

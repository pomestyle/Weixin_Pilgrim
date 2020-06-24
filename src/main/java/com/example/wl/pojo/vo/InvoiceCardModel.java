package com.example.wl.pojo.vo;


import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: 发票模板
 * @author: Pilgrim
 * @time: 2018 2018/12/28 15:25
 */

public class InvoiceCardModel {

    /**
     * 发票模板对象
     */
    @JSONField(name = "invoice_info")
    private InvoiceModel invoiceInfo;

    public InvoiceModel getInvoiceInfo() {
        return invoiceInfo;
    }

    public void setInvoiceInfo(InvoiceModel invoiceInfo) {
        this.invoiceInfo = invoiceInfo;
    }
}



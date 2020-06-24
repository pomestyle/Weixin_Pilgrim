package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: invoice_user_data
 * @author: Administrator
 * @create: 2018-12-31 01:06
 **/
public class UserCard {
    @JSONField(name = "invoice_user_data")
    private InvoiceUserData invoiceUserData;

    public InvoiceUserData getInvoiceUserData() {
        return invoiceUserData;
    }

    public void setInvoiceUserData(InvoiceUserData invoiceUserData) {
        this.invoiceUserData = invoiceUserData;
    }
}

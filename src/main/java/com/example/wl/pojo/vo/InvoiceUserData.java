package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

import java.util.List;

/**
 * @description: 用户信息结构体
 * @author: Pilgrim
 * @time: 2018 2018/12/28 17:26
 */
public class InvoiceUserData {
    /**
     * Int	是	发票的金额，以分为单位
     */
    @JSONField(ordinal = 6)
    private Integer fee;

    /**
     * String	;	//是	发票的抬头
     */
    @JSONField(ordinal = 7)
    private String title;

    /**
     * Int	是	发票的开票时间，为10位时间戳（utc+8）
     */
    @JSONField(name = "billing_time", ordinal = 3)
    private Integer billingTime;

    /**
     * String	是	发票的发票代码
     */
    @JSONField(name = "billing_no", ordinal = 1)
    private String billingNo;

    /**
     * String	是	发票的发票号码
     */
    @JSONField(name = "billing_code", ordinal = 2)
    private String billingCode;

    /**
     * List	否	商品详情结构，见下方
     */
    @JSONField(name = "info")
    private List<Info> infoList;

    /**
     * Int	是	不含税金额，以分为单位
     */
    @JSONField(name = "fee_without_tax", ordinal = 8)
    private Integer feeWithoutTax;

    /**
     * Int	是	税额，以分为单位
     */
    @JSONField(ordinal = 4)
    private Integer tax;

    /**
     * String	是	发票pdf文件上传到微信发票平台后，会生成一个发票s_media_id，该s_media_id可以直接用于关联发票PDF和发票卡券。发票上传参考“ 3 上传PDF ”一节
     */
    @JSONField(name = "s_pdf_media_id", ordinal = 5)
    private String sPdfMediaId;

    /**
     * String	否	购买方纳税人识别号
     */
    @JSONField(name = "buyer_number", ordinal = 9)
    private String buyerNumber;

    /**
     * String	否	其它消费附件的PDF，如行程单、水单等，PDF上传方式参考“ 3 上传PDF ”一节
     */
    //@JSONField(name = "s_trip_pdf_media_id" , ordinal = 9)
    //private String sTripPdfMediaId;

    /**
     * String	是	校验码，发票pdf右上角，开票日期下的校验码
     */
    @JSONField(name = "check_code" , ordinal = 10)
    private String checkCode;

    /**
     * String	否	购买方地址、电话
     */
    @JSONField(name = "buyer_address_and_phone", ordinal = 12)
    private String buyerAddressAndPhone;

    /**
     * /String	否	购买方开户行及账号
     */
    @JSONField(name = "buyer_bank_account", ordinal = 13)
    private String buyerBankAccount;

    /**
     * String	否	销售方纳税人识别号
     */
    @JSONField(name = "seller_number", ordinal = 14)
    private String sellerNumber;

    /**
     * String	否	销售方地址、电话
     */
    @JSONField(name = "seller_address_and_phone", ordinal = 15)
    private String sellerAddressAndPhone;

    /**
     * String	否	销售方开户行及账号
     */
    @JSONField(name = "seller_bank_account", ordinal = 16)
    private String sellerBankAccount;

    /**
     * String	否	备注，发票右下角初
     */
    @JSONField(ordinal = 17)
    private String remarks;

    /**
     * String	否	收款人，发票左下角处
     */
    @JSONField(ordinal = 18)
    private String cashier;

    /**
     * String	否	开票人，发票下方处
     */
    @JSONField(ordinal = 19)
    private String maker;


    public Integer getFee() {
        return fee;
    }

    public void setFee(Integer fee) {
        this.fee = fee;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getBillingTime() {
        return billingTime;
    }

    public void setBillingTime(Integer billingTime) {
        this.billingTime = billingTime;
    }

    public String getBillingNo() {
        return billingNo;
    }

    public void setBillingNo(String billingNo) {
        this.billingNo = billingNo;
    }

    public String getBillingCode() {
        return billingCode;
    }

    public void setBillingCode(String billingCode) {
        this.billingCode = billingCode;
    }

    public List<Info> getInfoList() {
        return infoList;
    }

    public void setInfoList(List<Info> infoList) {
        this.infoList = infoList;
    }

    public Integer getFeeWithoutTax() {
        return feeWithoutTax;
    }

    public void setFeeWithoutTax(Integer feeWithoutTax) {
        this.feeWithoutTax = feeWithoutTax;
    }

    public Integer getTax() {
        return tax;
    }

    public void setTax(Integer tax) {
        this.tax = tax;
    }

    public String getsPdfMediaId() {
        return sPdfMediaId;
    }

    public void setsPdfMediaId(String sPdfMediaId) {
        this.sPdfMediaId = sPdfMediaId;
    }

  /*  build String getsTripPdfMediaId() {
        return sTripPdfMediaId;
    }

    build void setsTripPdfMediaId(String sTripPdfMediaId) {
        this.sTripPdfMediaId = sTripPdfMediaId;
    }

    build String getCheckCode() {
        return checkCode;
    }

    build void setCheckCode(String checkCode) {
        this.checkCode = checkCode;
    }*/

    public String getCheckCode() {
        return checkCode;
    }

    public void setCheckCode(String checkCode) {
        this.checkCode = checkCode;
    }

    public String getBuyerNumber() {
        return buyerNumber;
    }

    public void setBuyerNumber(String buyerNumber) {
        this.buyerNumber = buyerNumber;
    }

    public String getBuyerAddressAndPhone() {
        return buyerAddressAndPhone;
    }

    public void setBuyerAddressAndPhone(String buyerAddressAndPhone) {
        this.buyerAddressAndPhone = buyerAddressAndPhone;
    }

    public String getBuyerBankAccount() {
        return buyerBankAccount;
    }

    public void setBuyerBankAccount(String buyerBankAccount) {
        this.buyerBankAccount = buyerBankAccount;
    }

    public String getSellerNumber() {
        return sellerNumber;
    }

    public void setSellerNumber(String sellerNumber) {
        this.sellerNumber = sellerNumber;
    }

    public String getSellerAddressAndPhone() {
        return sellerAddressAndPhone;
    }

    public void setSellerAddressAndPhone(String sellerAddressAndPhone) {
        this.sellerAddressAndPhone = sellerAddressAndPhone;
    }

    public String getSellerBankAccount() {
        return sellerBankAccount;
    }

    public void setSellerBankAccount(String sellerBankAccount) {
        this.sellerBankAccount = sellerBankAccount;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getCashier() {
        return cashier;
    }

    public void setCashier(String cashier) {
        this.cashier = cashier;
    }

    public String getMaker() {
        return maker;
    }

    public void setMaker(String maker) {
        this.maker = maker;
    }
}

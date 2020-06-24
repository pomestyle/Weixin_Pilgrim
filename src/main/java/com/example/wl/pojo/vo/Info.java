package com.example.wl.pojo.vo;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @description: 商品详情
 * @author: Pilgrim
 * @time: 2018 2018/12/28 17:43
 */
public class Info {
    /**
     * String	是	项目的名称
     */
    @JSONField(ordinal = 2)
    private String name;

    /**
     * Int	否	项目的数量
     */
    @JSONField(ordinal = 1)
    private Integer num;

    /**
     * String	否	项目的单位，如个
     */
    @JSONField(ordinal = 3)
    private String unit;

    /**
     * Int	是	项目的单价
     */
    private Integer price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}

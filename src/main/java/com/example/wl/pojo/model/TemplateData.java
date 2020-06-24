package com.example.wl.pojo.model;

/**
 * @version 1.0
 * @description: 封装请求参数Demo
 * @author: Pilgrim
 * @time: 2019/2/12 15:03
 */
public class TemplateData {

    private String value;
    private String color = "#173177";

    public TemplateData(String value) {
        this.value = value;
    }

    public TemplateData() {

    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}

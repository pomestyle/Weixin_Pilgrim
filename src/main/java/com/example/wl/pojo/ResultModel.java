package com.example.wl.pojo;

/**
 * @author Pilgrim
 */
public class ResultModel {
    private int code;
    private String msg;
    private Object data;

    public ResultModel(int code, String msg, Object object) {
        this.code = code;
        this.msg = msg;
        this.data = object;
    }

    public ResultModel(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Object getObject() {
        return data;
    }

    public void setObject(Object object) {
        this.data = object;
    }

    public ResultModel() {
    }

    public ResultModel(int code, ResultModel ticket) {
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "ResultModel{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                '}';
    }
}

package com.example.wl.pojo.menu;

/**
 *
 * @author wangl
 * @date 2019/12/3
 */
public class MiniprogramButton extends BasicButton {

    public String appid;
    public String pagepath;
    public String url;

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getPagepath() {
        return pagepath;
    }

    public void setPagepath(String pagepath) {
        this.pagepath = pagepath;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

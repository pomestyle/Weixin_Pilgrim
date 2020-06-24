package com.example.wl.service.tool;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.wl.config.WeChatConfig;
import com.example.wl.config.WeChatUrlParamConfig;
import com.example.wl.pojo.menu.BasicButton;
import com.example.wl.pojo.menu.ClickButton;
import com.example.wl.pojo.menu.Menu;
import com.example.wl.pojo.menu.ViewButton;
import com.example.wl.util.HttpUtil;
import lombok.extern.slf4j.Slf4j;

/**
 * @version 1.0
 * @description: 自动设置菜单
 * @author: Pilgrim
 * @time: 2019/3/7 11:44
 */
@Slf4j
public class OptionTool {

    public static void creatOption() {
        String url = WeChatUrlParamConfig.CREAT_OPTION_URL + AccessTokenTool.getToken();
        String data = JSON.toJSONString(getMenu());
        log.info("发送的菜单json数据为： {}" , data);
        String s = HttpUtil.sendHttpByPost(url, data);
        log.info("返回的菜单json数据为： {}" , s);
        JSONObject jsonObject = JSONObject.parseObject(s);
        if (jsonObject.getInteger("errcode") == 0) {
            log.info("设置自定义菜单成功。");

        } else {
            log.error("设置自定义菜单失败。");
        }
    }



    /**
     * 组装菜单数据
     */
    private static Menu getMenu() {
        ClickButton btn11 = new ClickButton();
        btn11.setName("简介");
        btn11.setType("click");
        btn11.setKey("11");
//
//        ClickButton btn12 = new ClickButton();
//        btn12.setName("联系方式");
//        btn12.setType("click");
//        btn12.setKey("12");

        ClickButton btn13 = new ClickButton();
        btn13.setName("投诉建议");
        btn13.setType("click");
        btn13.setKey("13");

        ViewButton btn21 = new ViewButton();
        btn21.setName("行李管家");
        btn21.setType("view");
        btn21.setUrl(WeChatConfig.packages);

      /**
         菜单设置与小程序appid 关联 点击菜单可以跳转到小程序

        MiniprogramButton btn22 = new MiniprogramButton();
        btn22.setName("航旅购");
        btn22.setType("miniprogram");
        btn22.setUrl("http://mp.weixin.qq.com");
        //小程序 appid  测试接口没有权限 会报错
        btn22.setAppid("wx062ee19c4fe12ba7");
        btn22.setPagepath("pages/index/index");

       */
        ViewButton btn22 = new ViewButton();
        btn22.setName("Pilgrim");
        btn22.setType("view");
        //自己需要跳转的网站
        btn22.setUrl("http://mp.weixin.qq.com");

        ClickButton btn31 = new ClickButton();
        btn31.setName("服务");
        btn31.setType("click");
        btn31.setKey("31");

        ViewButton btn32 = new ViewButton();
        btn32.setName("生成二维码");
        btn32.setType("view");
        //自己需要跳转的网站
        btn32.setUrl(WeChatConfig.getServer() + "/con/qrPage");

        ClickButton btn33 = new ClickButton();
        btn33.setName("调查");
        btn33.setType("click");
        btn33.setKey("33");

        ViewButton btn34 = new ViewButton();
        btn34.setName("网页授权获取用户信息");
        btn34.setType("view");
        //自己需要跳转的网站
        btn34.setUrl(WeChatConfig.getServer() + "/api/wechat/getUserInfo");

        BasicButton mainBtn1 = new BasicButton();
        mainBtn1.setName("关于Pilgrim");
        mainBtn1.setSub_button(new BasicButton[]{ btn11, btn13});

        BasicButton mainBtn2 = new BasicButton();
        mainBtn2.setName("Pilgrim产品");
        mainBtn2.setSub_button(new BasicButton[] { btn21, btn22});

        BasicButton mainBtn3 = new BasicButton();
        mainBtn3.setName("Pilgrim服务");
        mainBtn3.setSub_button(new BasicButton[] { btn31, btn32, btn33,btn34 });

        /**
         * 这是公众号目前的菜单结构，每个一级菜单都有二级菜单项<br>
         *
         * 在某个一级菜单下没有二级菜单的情况，menu该如何定义呢？<br>
         * 比如，第三个一级菜单项不是“便捷服务”，而直接是“发票查询”，那么menu应该这样定义：<br>
         * menu.setButton(new Button[] { mainBtn1, mainBtn2, btn33 });
         */
        Menu menu = new Menu();
        menu.setButton(new BasicButton[] { mainBtn1, mainBtn2, mainBtn3 });

        return menu;
    }

}

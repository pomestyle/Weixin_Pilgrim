package com.example.wl.config;

import com.example.wl.service.tool.AccessTokenTool;
import com.example.wl.service.tool.AuthorPageFieldTool;
import com.example.wl.service.tool.OptionTool;
import com.example.wl.service.tool.OwnCodeTool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * 继承Application接口后项目启动时会按照执行顺序执行run方法
 * 通过设置Order的value来指定执行的顺序
 */
/**
 * @version 1.0
 * @description: 启动 初始化 菜单以及获取平台表示 获取token
 * @author: Pilgrim
 * @time: 2019/1/23 9:24
 */
@Component
@Order(value = 1)
@Slf4j
public class StartConfig implements ApplicationRunner {
    @Override
    public void run(ApplicationArguments args) {
        log.info("------------------------ 获取  access_token ------------------------- ");
        AccessTokenTool.getAccessToken();


        //首次在 服务器配置(已启用)  配置  服务器地址(URL) 和 令牌(Token) 时候把下面 代码注释了，启动服务 , 然后配置 服务器配置 url用于接收微信和本地服务消息交互


        log.info("------------------------ 设置开票表头字段 ------------------------- ");
        AuthorPageFieldTool.doVoid();
        log.info("------------------------ 获取自身表示码 ---------------------------- ");
        OwnCodeTool.getsPappid();
        log.info("------------------------ 微信设置自定义菜单 ------------------------- ");
        OptionTool.creatOption();
    }
}

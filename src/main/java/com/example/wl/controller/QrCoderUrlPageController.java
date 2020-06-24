package com.example.wl.controller;


import com.example.wl.service.tool.TicketTool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *@description: 扫小票二维码 跳转网页二维码专用
 *@author: Pilgrim
 *@time:  2019/3/15 13:48
 *@version 1.0
 */
@Controller
@Slf4j
public class QrCoderUrlPageController {

    /**
     *@description: 生成二维码页面
     *@author: Pilgrim
     *@time:  2019/3/15 13:48
     *@version 1.0
     */
    @GetMapping(value = "/con/qrPage")
    public String getCustomerMsg(ModelMap modelMap) {

        //获取ticktUrl
        String  ticket= TicketTool.getTicketData("此字符串是二维码里的信息");
        if(StringUtils.isEmpty(ticket)){
            //换区ticktUrl失败 返回403页面
            return "403";
        }
        String ticketUrl = TicketTool.getTicket(ticket);
        log.info("返回的二维码 url = {} ", ticketUrl);
        modelMap.addAttribute("img",ticketUrl);

        return "/weChatPage/QrPage";
    }

}

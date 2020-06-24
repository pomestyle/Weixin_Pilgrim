package com.example.wl.controller;

import com.example.wl.config.WeChatConfig;

import com.example.wl.service.DealWeChatIncoiceService;
import com.example.wl.service.tool.AccessTokenTool;
import com.example.wl.service.tool.RequestParamTool;
import com.example.wl.service.tool.UserTool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

/**
 * @description: 采用微信开票平台接口中自建扫码开票 可以添加卡包操作
 * @author: Pilgrim
 * @time: 2018/12/29 8:47
 */
@Controller
@RequestMapping("/api/wechat")
@Slf4j
public class WeChatPlanController extends BaseController {

    @Autowired
    private DealWeChatIncoiceService dealWeChatIncoiceService;



    @GetMapping("/getToken")
    @ResponseBody
    public String getToken(String signature, String timestamp, String nonce, String echostr) {

        log.info("signature = " + signature);
        log.info("timestamp = " + timestamp);
        log.info("nonce = " + nonce);
        log.info("echostr = " + echostr);
        //校验请求
        boolean check = RequestParamTool.check(timestamp, nonce, signature);
        if (check) {
            log.info("接入成功。。");
            return echostr;
        }
        return "接入失败。。";
    }

    /**
     * @description: 此方法用于微信回复消息
     * 该url配置到  【服务器配置】 页面
     * @author: Pilgrim
     * @time: 2018/12/29 2018/12/29 8:48
     */
    @PostMapping(value = "/getToken", produces = "application/xml;charset=UTF-8")
    @ResponseBody
    public String getUserMessage(HttpServletRequest request) throws Exception {
        String responseString = "";
        try {
            log.info(" 接收微信返回信息 {} ", request.getInputStream().toString());
            Map<String, String> xmlData = RequestParamTool.getXmlData(request.getInputStream());
            responseString = dealWeChatIncoiceService.dealBean2XmlForBuild(xmlData);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return responseString;
    }


    /**
     * 自定义菜单+获取网页授权+获取用户信息
     *
     * @return 页面
     */
    @GetMapping("getUserInfo")
    public String cc(HttpServletRequest request) throws IOException {

        String code = request.getParameter("code");
        log.info("code = {} ", code);
        return "redirect:/https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + WeChatConfig.getAppid() + "&redirect_uri=" + WeChatConfig.getServer() + "/api/wechat/aaa" + "&response_type=code&scope=snsapi_base&state=1#wechat_redirect";

    }


    @GetMapping("/aaa")//重定向的url 也就是上面controller重定向的微信url里面重定向自己的url
    public String aa(HttpServletRequest request) throws IOException {
        String code = request.getParameter("code");
        //获取用户openid
        String openid = UserTool.userAuthorzation(code);
        log.info(" 重定向的url  code = {} ", code);
        return "success";
    }


    //对外提供accessToken接口
    @GetMapping("sendAccessToken")
    @ResponseBody
    public String sendAccessToken() {
        return AccessTokenTool.getToken();
    }

























    /*
     *//**
     * @description: 对外提供采用微信生成的带参数二维码接口
     * @author: Pilgrim
     * @time: 2019/1/25 11:46
     * @version 1.0
     *//*
    @GetMapping("getTicket")
    @ResponseBody
    public ResultModel getTicket(String orderId) {

        String ticket = TicketTool.getTicketData(orderId); //拿到ticket
        if (StringUtils.isEmpty(ticket)) {
            log.info("拿到ticket 值为null！");
            return new ResultModel(1, "获取二维失败，请稍后再试！");
        }
        if (ticket.equals("error")) {
            log.info("参数长度限制为1到64位 ！！");
            return new ResultModel(2, "参数长度限制为1到64位！");
        }

        //返回二维码链接
        return new ResultModel(0, TicketTool.getTicket(ticket));
    }


    *//**
     * @description: customerId 和 orderId 必须填写
     *               ortherID1 和 ortherID2 预留参数
     * @author: Pilgrim
     * @time: 2019/1/25 16:50
     * @version 1.0
     *//*
    @PostMapping("getCustomerMsg")
    @ResponseBody
    public ResultModel getCustomerMsg(@RequestBody CustomerMsg customerMsg) {
        String url = request.getServerName();
        if (StringUtils.isEmpty(customerMsg.getOrderId())) {
            return new ResultModel(0, " orderId 字段不能为空！ ");
        }
        if (StringUtils.isEmpty(customerMsg.getCustomerId())) {
            return new ResultModel(0, " customerId 字段不能为空！ ");
        }

        log.info("customerId = " + customerMsg.getCustomerId());
        log.info("orderId = " + customerMsg.getOrderId());
//        log.info("ortherID1 = " + customerMsg.getOrtherID1());
//        log.info("ortherID2 = " + customerMsg.getOrtherID2());

        return new ResultModel(0, getTicket(customerMsg.getOrderId()).getMsg());
    }*/


    /**
     * @description: 扫描离线生成二维码（非微信生成的带参数二维码获取参数）
     * 离线生成二维码，里面包含url
     * Url  分别带4个参数，orderId , 客户id , ortherID1,ortherID2
     * customerId 和 orderId 必须填写 ， ortherID1 和 ortherID2 预留参数
     * @author: Pilgrim
     * @time: 2019/1/25 10:20
     * @version 1.0
     *//*

    @GetMapping("getCustomerMsg")
    public String getId(String customerId, String orderId, String ortherID1, String ortherID2, ModelMap modelMap) {
        log.info("customerId = " + customerId);
        log.info("orderId = " + orderId);
        log.info("ortherID1 = " + ortherID1);
        log.info("ortherID2 = " + ortherID2);
        String ticketUrl = getTicket(orderId).getMsg();

        modelMap.addAttribute("img", ticketUrl);
        return "index";
    }
*/
}


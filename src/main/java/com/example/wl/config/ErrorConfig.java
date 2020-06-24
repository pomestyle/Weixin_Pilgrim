package com.example.wl.config;



import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @version 1.0
 * @description: 错误页面配置
 * @author: Pilgrim
 * @time: 2019/1/30 14:31
 */
@Controller
public class ErrorConfig implements ErrorController {

    @Override
    public String getErrorPath() {
        return "/error";
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        //获取statusCode:401,404,500
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
        if (statusCode == 401) {
            return "/401";
        } else if (statusCode == 404) {
            return "/4004";
        } else if (statusCode == 403) {
            return "/403";
        } else {
            return "/500";
        }

    }
}

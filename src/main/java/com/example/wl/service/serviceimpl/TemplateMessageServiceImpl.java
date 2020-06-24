package com.example.wl.service.serviceimpl;

import com.example.wl.config.WeChatUrlParamConfig;
import com.example.wl.pojo.model.WechatTemplate;
import com.example.wl.pojo.model.WeixinResponse;
import com.example.wl.service.TemplateMessageService;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

/**
 * @author Pilgrim
 */
//@Service
public class TemplateMessageServiceImpl implements TemplateMessageService {
    //@Autowired
    //@Qualifier("restTemplate")
    private RestTemplate restTemplate;


    @Override
    public WeixinResponse sendTemplateMessage(String accessToken, WechatTemplate wechatTemplate) {
        WeixinResponse weixinResponse = null;
        String url = new StringBuilder().append(WeChatUrlParamConfig.SEND_MODLE_NEWS_URL)
                .append(accessToken).toString();
        weixinResponse = restTemplate.postForObject(url, wechatTemplate, WeixinResponse.class, new HashMap<String, String>(12));
        return weixinResponse;
    }
}

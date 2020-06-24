package com.example.wl;

import com.example.wl.pojo.BaseMsg;
import com.example.wl.service.tool.AccessTokenTool;
import com.example.wl.util.FileUtil;
import com.example.wl.util.HttpUtil;
import com.thoughtworks.xstream.XStream;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class PilgrimApplicationTests {

    @Test
    public void contextLoads() {
    }


    @Test
    public void ss() {

        XStream xStream = new XStream();
        BaseMsg baseMsg = new BaseMsg();
        baseMsg.setCreateTime(System.currentTimeMillis() / 1000 + "");
        baseMsg.setToUserName("zs");
        baseMsg.setToUserName("ls");
        baseMsg.setMsgType("text");
        ////如果没有这句，xml中的根元素会是<包.类名>；或者说：注解根本就没生效，所以的元素名就是类的属性
        xStream.processAnnotations(baseMsg.getClass());
        String s = xStream.toXML(baseMsg);
        log.info(s);

        // XStream xstream=new XStream(new DomDriver()); //直接用jaxp dom来解释
        // XStream xstream=new XStream(new DomDriver("utf-8")); //指定编码解析器,直接用jaxp dom来解释
        // //如果没有这句，xml中的根元素会是<包.类名>；或者说：注解根本就没生效，所以的元素名就是类的属性
        // xstream.processAnnotations(obj.getClass()); //通过注解方式的，一定要有这句话

    }


    /**
     * 此方法通过 ticket换取二维码 , 返回一个二维码 url
     * 获取二维码ticket后，开发者可用ticket换取二维码图片。请注意，本接口无须登录态即可调用。
     * 请求说明
     * HTTP GET请求（请使用https协议）https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET
     *
     * @return
     */
    @Test
    public void getTicketTest() {
        String data = "";
        String url = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + data;
    }



    @Test
    public void testDownFile() throws Exception {
        FileUtil.downloadHttpUrl("https://fpnc.bwjf.cn/downInvoice/0cf1c5a2584949f18fad77c839d545a9"," ParamConfig.getPdfFilePath()", UUID.randomUUID().toString());
    }

    /**
     * @description: 上传图片
     * @author: Pilgrim
     * @time: 2019/1/26 17:29
     * @version 1.0
     */
    @Test
    public void upImage() throws Exception {
        HttpUtil.uploadFileByFileType("C:\\Users\\tizzy\\Desktop\\007.jpg", "https://api.weixin.qq.com/shakearound/material/add?access_token=ACCESS_TOKEN&type=TYPEPOST".replace("ACCESS_TOKEN", AccessTokenTool.getToken()), "img");
    }


}

package com.example.wl.util;

import com.sun.mail.util.MailSSLSocketFactory;
import org.springframework.util.StringUtils;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.*;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.util.Properties;

/**
 * @version 1.0
 * @description: 发送邮件工具类
 * @author: Pilgrim
 * @time: 2019/1/28 9:40
 */
public class SendMailAcceUtils {

    /**
     * 发送带附件的邮件
     *
     * @param receive  收件人
     * @param subject  邮件主题
     * @param msg      邮件内容
     * @param filename 附件地址
     * @return
     * @throws GeneralSecurityException
     */
    public static boolean sendMail(String receive, String subject, String msg, String filename)
            throws GeneralSecurityException {
        if (StringUtils.isEmpty(receive)) {
            return false;
        }

        // 发件人电子邮箱
        final String from = "";
        //final String  from =   "18731219625@163.com";
        // 发件人电子邮箱密码
        final String pass ="";
        //final String  pass =   "ai18032622520";

        // 指定发送邮件的主机为 smtp.qq.com
        // 邮件服务器
        final String host = "";
        //final String   host =  "smtp.163.com";

        // 获取系统属性
        Properties properties = System.getProperties();

        // 设置邮件服务器
        properties.setProperty("mail.perp.smtp.host", host);
        properties.put("mail.perp.smtp.auth", "true");
        properties.put("mail.smtp.port", "");
        //properties.put("mail.smtp.port", 25);
        //
        MailSSLSocketFactory sf = new MailSSLSocketFactory();
        sf.setTrustAllHosts(true);
        properties.put("mail.perp.smtp.ssl.enable", "true");
        properties.put("mail.perp.smtp.ssl.socketFactory", sf);
        // 获取默认session对象
        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            @Override
            public PasswordAuthentication getPasswordAuthentication() { // qq邮箱服务器账户、第三方登录授权码
                return new PasswordAuthentication(from, pass); // 发件人邮件用户名、密码
            }
        });

        try {
            // 创建默认的 MimeMessage 对象
            MimeMessage message = new MimeMessage(session);

            // Set From: 头部头字段
            message.setFrom(new InternetAddress(from));

            // Set To: 头部头字段
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(receive));

            // Set Subject: 主题文字
            message.setSubject(subject);

            // 创建消息部分
            BodyPart messageBodyPart = new MimeBodyPart();

            // 消息
            messageBodyPart.setText(msg);

            // 创建多重消息
            Multipart multipart = new MimeMultipart();

            // 设置文本消息部分
            multipart.addBodyPart(messageBodyPart);

            // 附件部分
            messageBodyPart = new MimeBodyPart();
            // 设置要发送附件的文件路径
            DataSource source = new FileDataSource("ParamConfig.getPdfFilePath()" + filename);
            messageBodyPart.setDataHandler(new DataHandler(source));

            // messageBodyPart.setFileName(filename);
            // 处理附件名称中文（附带文件路径）乱码问题
            messageBodyPart.setFileName(MimeUtility.encodeText(filename));
            multipart.addBodyPart(messageBodyPart);

            // 发送完整消息
            message.setContent(multipart);

            // 发送消息
            Transport.send(message);
            return true;
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return false;
    }

   /* public static void main(String[] args) throws GeneralSecurityException {
        SendMailAcceUtils.sendMail("1016258579@qq.com","1111","1211221","C:\\Users\\Pilgrim\\Desktop\\2883353877031485959.pdf");
    }*/
}

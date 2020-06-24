# Weixin_Pilgrim
微信公众号设置菜单,网页授权,生成二维码,推送文本图文消息实例




`希望给个start`


微信公众号设置菜单,网页授权,生成二维码,推送文本图文消息实例


## 申请自己微信测试账号


可以查看博客 

[连小白都能看懂的微信开发之测试账号申请](链接网址 "https://blog.csdn.net/weixin_38361347/article/details/88983765")



[测试账号](链接网址 "https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index")

[连小白都能看懂的微信开发之测试账号申请](链接网址 "https://blog.csdn.net/weixin_38361347/article/details/88983765")


## 开发之环境搭建

 
[开发之环境搭建](链接网址 "https://blog.csdn.net/weixin_38361347/article/details/88983788")


## 微信服务器配置

项目配置文件信息修改

![Alt text](https://github.com/pomestyle/Image_url/tree/master/Weixin_Pilgrim/微信服务器配置.png)![微信服务器配置.png](https://upload-images.jianshu.io/upload_images/7852807-909fd5b189922aa9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 内网穿透

(https://blog.csdn.net/weixin_38361347/article/details/84963643)


微信服务器配置url 需要改成你自己内网穿透的url 



我本机内网穿透

 http://asdasdad.free.idcfengye.com -> 127.0.0.1:8080

如下图
![本机内网穿透.png](https://upload-images.jianshu.io/upload_images/7852807-53d376f9d5fd57fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 http://asdasdad.free.idcfengye.com 内网穿透的对外域名  这个要配置在配置文件里 和 微信服务器url配置里 
 
 也就是下图所示地方
 ![接口配置url.png](https://upload-images.jianshu.io/upload_images/7852807-097cc9bfd845b35b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![接口url配置.png](https://upload-images.jianshu.io/upload_images/7852807-64b0da9828a48703.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 
 127.0.0.1:8080 指的是我本机项目启动的端口
 
 
 微信token配置: 配置文件和微信服务器上配置要相同如图 我的都是 `test`
 
 
 ## 配置校验token
 
 编写校验url和微信服务器进行交互代码在项目controller中get方法getToken
 
 内网穿透的域名和自己项目的url配置即可
![接口配置url.png](https://upload-images.jianshu.io/upload_images/7852807-ba92ada23a81c262.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 
 然后启动项目
 
 启动项目之前先把菜单和获取access_token注释了（如下代码）,这里先验证本机和微信服务器token校验
 
 com.example.wl.config.StartConfig 包中  run 里代码先注释了，然后启动ngrok并且启动本地服务
 
 ![介入成功.png](https://upload-images.jianshu.io/upload_images/7852807-f806631b85c92507.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这里点击确定
  
  然后控制台会打印出 配置成功
  ![![![zjcsdewm.png](https://upload-images.jianshu.io/upload_images/7852807-66921e9f4d9b8df5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
](https://upload-images.jianshu.io/upload_images/7852807-6dfee4bfc11a124e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
](https://upload-images.jianshu.io/upload_images/7852807-173b2691022b0850.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  
  表示介入成功
  
 
 然后放开run方法里的注释重新启动项目会发现，access_token获取成功，并且菜单也设置成功
![设置微信公众号菜单和获取token和设置授权页.png](https://upload-images.jianshu.io/upload_images/7852807-176e8f05b7476a94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 
 
 ## 查看菜单
 
 扫码自己的测试二维码
 
 ![zjcsdewm.png](https://upload-images.jianshu.io/upload_images/7852807-c8e62aa45bb42d7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 网页授权设置回调域名

![image.png](https://upload-images.jianshu.io/upload_images/7852807-c3c6192f19c17f59.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

点击修改

![image.png](https://upload-images.jianshu.io/upload_images/7852807-db6420e92ff3f6f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里配置回调域名不需要http这些字符串

## 最后


生成二维码

[http://asdasdad.free.idcfengye.com/con/qrPage](http://asdasdad.free.idcfengye.com/con/qrPage)

或者点击菜单`生成二维码`

![image.png](https://upload-images.jianshu.io/upload_images/7852807-381b63eeccab6b48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


获取用户信息或者网页授权 点击菜单`网页授权获取用户信息` 可以参考博客 

[https://blog.csdn.net/weixin_38361347/article/details/88983932](https://blog.csdn.net/weixin_38361347/article/details/88983932)
[https://blog.csdn.net/weixin_38361347/article/details/88071066](https://blog.csdn.net/weixin_38361347/article/details/88071066)






 




 
 




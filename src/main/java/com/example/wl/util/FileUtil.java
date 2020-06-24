package com.example.wl.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URL;


/**
 * @version 1.0
 * @description: 上传下载文件工具类
 * @author: Pilgrim
 * @time: 2019/1/17 9:32
 */
@Slf4j
public class FileUtil {
    /**
     * 根据路径确定目录，没有目录，则创建目录
     *
     * @param path
     */
    private static void createDir(String path) {
        File fileDir = new File(path);
        // 判断/download目录是否存在
        if (!fileDir.exists() && !fileDir.isDirectory()) {
            fileDir.mkdir();// 创建目录
        }
    }

    /**
     * @description: 文件上传
     * @author: Pilgrim
     * @time: 2019/1/17 9:45
     * @version 1.0
     */
    public static String uploadFile(byte[] file, String filePath, String fileName) throws Exception {
        File targetFile = new File(filePath);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }
        FileOutputStream out = new FileOutputStream(filePath + fileName);
        out.write(file);
        out.flush();
        out.close();
        return filePath + fileName;
    }

    /**
     * 下载文件---返回下载后的文件存储路径
     *
     * @param url      文件地址
     * @param dir      存储目录
     * @param fileName 存储文件名
     * @return
     */
    public static Integer downloadHttpUrl(String url, String dir, String fileName) {
        Integer flag = 1;
        URL httpurl = null;
        try {
            httpurl = new URL(url);
            File dirfile = new File(dir);
            if (!dirfile.exists()) {
                dirfile.mkdirs();
            }

            FileUtils.copyURLToFile(httpurl, new File(dir + File.separator + fileName));
            File file =  new File(dir + fileName);
            if(file.length()>0){
                flag = 0;
                log.info(" ---------------------- 名字是: " + fileName + " 的发票下载成功！存放路径为：" + dir);
            }
        } catch (Exception e) {
            flag = 1;
            log.info(" ------------------------ 名字是: " + fileName + " 的发票下载失败！");
            e.printStackTrace();
        }
        return flag;
    }

    public static void downloadLocal(HttpServletResponse response, String path, String fileName) throws FileNotFoundException {

        // 读到流中
        // 文件的存放路径
        InputStream inStream = new FileInputStream(path + fileName);
        // 设置输出的格式
        response.reset();
        response.setContentType("bin");
        response.addHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
        // 循环取出流中的数据
        byte[] b = new byte[1024];
        int len;
        try {
            while ((len = inStream.read(b)) > 0)
            {
                response.getOutputStream().write(b, 0, len);
            }
            inStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**

      * TODO 下载文件到本地
      * @author nadim  
      * @date Sep 11, 2015 11:45:31 AM
      * @param fileUrl 远程地址
      * @param fileLocal 本地路径
      * @throws Exception 
      */
/*  build boolean downloadFile(String fileUrl) throws Exception {
    boolean flag=false;
    //读文件流
    DataInputStream in = new DataInputStream(new FileInputStream(new File(fileUrl)));
    DataOutputStream out = new DataOutputStream(new FileOutputStream(new File()));
    byte[] buffer = new byte[2048];
    int count = 0;
    while ((count = in.read(buffer)) > 0) {
      out.write(buffer, 0, count);
    }
    try {
            if(out!=null) {
                out.close();
            }
            if(in!=null) {
                in.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    flag=true;
    return flag;
  }*/

}

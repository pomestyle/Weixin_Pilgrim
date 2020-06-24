package com.example.wl.util;

import lombok.extern.slf4j.Slf4j;

import java.io.*;
import java.net.*;
import java.util.Map;
import java.util.UUID;
/**
 * HttpUtil 工具类
 * @author Pilgrim
 */
@Slf4j
public class HttpUtil {

    private static final String TAG = "uploadFile";
    /**
     * 超时时间
     */
    private static final int TIME_OUT = 10 * 10000000;
    /**
     * 设置编码
     */
    private static final String CHARSET = "utf-8";
    public static final String SUCCESS = "1";
    public static final String FAILURE = "0";

    /**
     * 边界标识 随机生成
     */
    public static final String PREFIX = "--", LINE_END = "\r\n";
    /**
     * 内容类型
     */
    public static final String CONTENT_TYPE = "multipart/form-data";

    /**
     * @param url
     * @param data 发送post 请求工具
     * @return
     */
    public static String sendHttpByPost(String url, String data) {
        URL urlPost = null;
        HttpURLConnection urlConnection = null;
        try {
             urlPost = new URL(url);
             urlConnection = (HttpURLConnection) urlPost.openConnection();
            //要发送数据出去，必须设置为可发送状态
            urlConnection.setDoOutput(true);
            urlConnection.setRequestProperty("Content-Type", "application/json;charset=utf-8");

            //获取输出流
            OutputStream outputStream = urlConnection.getOutputStream();
            //写出数据
            outputStream.write(data.getBytes());
            outputStream.flush();
            outputStream.close();

            //获取输入流
            InputStream is = urlConnection.getInputStream();
            String inputStreamData = getInputStreamData(is);
            return inputStreamData;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }


    /**
     * 图片上传到微信到服务器
     *
     * @param filePath   需要上传的文件的目录
     * @param requestUrl 请求的rul
     * @return 返回响应的内容
     * @author: Pilgrim
     * @create: 2018-12-29 15:47
     */

    public static String uploadFile(String filePath, String requestUrl) throws Exception {

        //生成一个文件
        File file = new File(filePath);

        /**上传文件到服务器
         * @param file 需要上传的文件
         * @param RequestURL 请求的rul
         * @return 返回响应的内容
         */

        String  bounDary= UUID.randomUUID().toString();
       /* //边界标识 随机生成
        String PREFIX = "--", LINE_END = "\r\n";
        String CONTENT_TYPE = "multipart/form-data"; //内容类型*/

        URL url = null;
        HttpURLConnection conn = null;
        try {
             url = new URL(requestUrl);
             conn = (HttpURLConnection) url.openConnection();
            conn.setReadTimeout(TIME_OUT);
            conn.setConnectTimeout(TIME_OUT);
            //允许输入流
            conn.setDoInput(true);
            //允许输出流
            conn.setDoOutput(true);
            //不允许使用缓存
            conn.setUseCaches(false);
            //请求方式
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Charset", CHARSET);
            //设置编码
            conn.setRequestProperty("connection", "keep-alive");
            conn.setRequestProperty("Content-Type", CONTENT_TYPE + ";boundary=" + bounDary);
            if (file != null) {
                /** * 当文件不为空，把文件包装并且上传 */
                OutputStream outputSteam = conn.getOutputStream();
                DataOutputStream dos = new DataOutputStream(outputSteam);
                StringBuffer sb = new StringBuffer();
                sb.append(PREFIX);
                sb.append(bounDary);
                sb.append(LINE_END);
                /**
                 * 这里重点注意：
                 * name里面的值为服务器端需要key 只有这个key 才可以得到对应的文件
                 * filename是文件的名字，包含后缀名的 比如:abc.png
                 */
                sb.append("Content-Disposition: form-data; name=\"pdf\"; filename=\"" + file.getName() + "\"" + LINE_END);
                sb.append("Content-Type: application/octet-stream; charset=" + CHARSET + LINE_END);
                sb.append(LINE_END);
                dos.write(sb.toString().getBytes());
                InputStream is = new FileInputStream(file);
                byte[] bytes = new byte[2048];
                int len = 0;
                while ((len = is.read(bytes)) != -1) {
                    dos.write(bytes, 0, len);
                }
                is.close();
                dos.write(LINE_END.getBytes());
                byte[] endData = (PREFIX + bounDary + PREFIX + LINE_END).getBytes();
                dos.write(endData);
                dos.flush();

                /**
                 * 获取响应码 200=成功
                 * 当响应成功，获取响应的流
                 */
                int res = conn.getResponseCode();
                /**
                 * @description: 获取返回的数据
                 * @author: Pilgrim
                 * @create: 2018-12-29
                 * @version 1.0
                 **/
                InputStream inputStream = conn.getInputStream();
                log.info("response code  =  " + res);
                if (res == 200) {
                    String inputStreamData = getInputStreamData(inputStream);
                    log.info("上传的pdf 成功，返回数据:" + inputStreamData);
                    return inputStreamData;
                }
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return FAILURE;
    }

    /**
     * @param url 发送get请求方法
     * @return
     */
    public static String sendHttpByGet(String url) {
        URL urlGet = null;
        URLConnection urlConnection = null;
        try {
             urlGet = new URL(url);
             urlConnection = urlGet.openConnection();
            InputStream is = urlConnection.getInputStream();
            String inputStreamData = getInputStreamData(is);
            return inputStreamData;
        } catch (Exception e) {
            log.info("发送get请求方法异常！ " + e);
            e.printStackTrace();
        }
        return null;
    }


    public static String doGet(String senUrl, Object object) {
        BufferedReader reader = null;
        String result = null;
        StringBuffer httpUrl = new StringBuffer(senUrl);
        StringBuffer sbf = new StringBuffer();
        try {
            URL url = new URL(httpUrl.toString());
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoOutput(true);
            connection.setDoInput(true);
            // 请求方式设置 POST
            connection.setRequestMethod("POST");
            // 设置文件字符集:
            connection.setRequestProperty("Charset", "UTF-8");
            // 开始连接请求
            connection.connect();
            OutputStream out = connection.getOutputStream();
            out.write((object.toString()).getBytes());
            out.flush();
            out.close();
            if (connection.getResponseCode() == 200) {
                log.info("连接成功,传送数据...");

            } else {
                log.info("连接失败,错误代码:" + connection.getResponseCode());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @param is 输入流
     * @return 返回数据
     */
    public static String getInputStreamData(InputStream is) {

        try {
            int size = 0;
            byte[] jsonBytes = new byte[1024];
            StringBuilder stringBuilder = new StringBuilder();
            while ((size = is.read(jsonBytes)) != -1) {
                stringBuilder.append(new String(jsonBytes, 0, size));
            }
            return stringBuilder.toString();
        } catch (Exception e) {
            log.info(" 读取数据异常 ！ " + e);
            e.printStackTrace();
        }

        try {
            is.close();
        } catch (IOException e) {
            log.info(" 关闭流失败 ！ " + e);
            e.printStackTrace();
        }
        return null;
    }


    /**
     * @description: 上传文件
     * @author: Pilgrim
     * @time: 2019/1/26 17:32
     * @version 1.0
     */

    public static String uploadFileByFileType(String filePath, String requestUrl, String fileType) throws Exception {

        //生成一个文件
        File file = new File(filePath);

        /**上传文件到服务器
         * @param file 需要上传的文件
         * @param RequestURL 请求的rul
         * @return 返回响应的内容
         */

        String bounDary  = UUID.randomUUID().toString();
        //边界标识 随机生成
        /*String PREFIX = "--", LINE_END = "\r\n";
        String CONTENT_TYPE = "multipart/form-data"; //内容类型*/
        try {
            URL url = new URL(requestUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setReadTimeout(TIME_OUT);
            conn.setConnectTimeout(TIME_OUT);
            conn.setDoInput(true); //允许输入流
            conn.setDoOutput(true); //允许输出流
            conn.setUseCaches(false); //不允许使用缓存
            conn.setRequestMethod("POST"); //请求方式
            conn.setRequestProperty("Charset", CHARSET);
            //设置编码
            conn.setRequestProperty("connection", "keep-alive");
            conn.setRequestProperty("Content-Type", CONTENT_TYPE + ";boundary=" + bounDary);
            if (file != null) {
                /** * 当文件不为空，把文件包装并且上传 */
                OutputStream outputSteam = conn.getOutputStream();
                DataOutputStream dos = new DataOutputStream(outputSteam);
                StringBuffer sb = new StringBuffer();
                sb.append(PREFIX);
                sb.append(bounDary);
                sb.append(LINE_END);
                /**
                 * 这里重点注意：
                 * name里面的值为服务器端需要key 只有这个key 才可以得到对应的文件
                 * filename是文件的名字，包含后缀名的 比如:abc.png
                 */
                sb.append("Content-Disposition: form-data; name=\"" + fileType + "\"; filename=\"" + file.getName() + "\"" + LINE_END);
                sb.append("Content-Type: application/octet-stream; charset=" + CHARSET + LINE_END);
                sb.append(LINE_END);
                dos.write(sb.toString().getBytes());
                InputStream is = new FileInputStream(file);
                byte[] bytes = new byte[1024];
                int len = 0;
                while ((len = is.read(bytes)) != -1) {
                    dos.write(bytes, 0, len);
                }
                is.close();
                dos.write(LINE_END.getBytes());
                byte[] endData = (PREFIX + bounDary + PREFIX + LINE_END).getBytes();
                dos.write(endData);
                dos.flush();

                /**
                 * 获取响应码 200=成功
                 * 当响应成功，获取响应的流
                 */
                int res = conn.getResponseCode();
                log.info("upload " + fileType + " 返回的 状态码 ： " + res);
                /**
                 * @description: 获取返回的数据
                 * @author: Pilgrim
                 * @create: 2018-12-29
                 * @version 1.0
                 **/
                InputStream inputStream = conn.getInputStream();
                log.info("response code:" + res);
                if (res == 200) {
                    String inputStreamData = getInputStreamData(inputStream);
                    log.info("上传的" + fileType + " 成功，返回数据:" + inputStreamData);
                    return inputStreamData;
                }
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return FAILURE;
    }



        /**
         * get请求
         *
         * @param url
         * @param param
         * @return
         */
        public static String get(String url,Map<String, Object> param) {
            StringBuilder builder=new StringBuilder();
            try {
                StringBuilder params=new StringBuilder();
                for(Map.Entry<String, Object> entry:param.entrySet()){
                    params.append(entry.getKey());
                    params.append("=");
                    params.append(entry.getValue().toString());
                    params.append("&");
                }
                if(params.length()>0){
                    params.deleteCharAt(params.lastIndexOf("&"));
                }
                URL restServiceUrl = new URL(url+(params.length()>0 ? "?"+params.toString() : ""));
                HttpURLConnection httpConnection = (HttpURLConnection) restServiceUrl.openConnection();
                httpConnection.setRequestMethod("GET");
                httpConnection.setRequestProperty("Accept", "application/json");
                if (httpConnection.getResponseCode() != 200) {
                    throw new RuntimeException("HTTP GET Request Failed with Error code : "
                            + httpConnection.getResponseCode());
                }
                InputStream inStrm = httpConnection.getInputStream();
                byte []b=new byte[1024];
                int length=-1;
                while((length=inStrm.read(b))!=-1){
                    builder.append(new String(b,0,length));
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return builder.toString();
        }
        /**
         * post    请求
         *
         * @param urls
         * @param data
         * @return
         */
        public static String post(String urls,String data) {
            try {
                //创建连接
                URL url = new URL(urls);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setDoOutput(true);
                connection.setDoInput(true);
                connection.setRequestMethod("POST");
                connection.setUseCaches(false);
                connection.setInstanceFollowRedirects(true);
                connection.setRequestProperty("Content-Type", "application/json");
                connection.connect();
                // POST请求
                DataOutputStream out = new DataOutputStream(connection.getOutputStream());
                //JSONObject obj = new JSONObject();
                String json = java.net.URLEncoder.encode(data, "utf-8");
                out.writeBytes(json);
                out.flush();
                out.close();
                // 读取响应
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String lines;
                StringBuffer sb = new StringBuffer("");
                while ((lines = reader.readLine()) != null) {
                    lines = URLDecoder.decode(lines, "utf-8");
                    sb.append(lines);
                }
                data =sb.toString();
                reader.close();
                // 断开连接
                connection.disconnect();
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return data;
        }



    public static void main(String[] args) {
        String ss = "{\"apiName\":\"baiwang.invoice.open\",\"buyerAddressPhone\":\"地址 17694863783\",\"buyerName\":\"单位测试\",\"buyerTaxNo\":\"12345679901234667\",\"checker\":\"张恩达\",\"consolidatedTaxRate\":\"\",\"deductibleAmount\":\"\",\"deviceType\":\"0\",\"drawer\":\"孙剑楠\",\"goodsCodeVersion\":\"\",\"invoiceDetailsList\":[{\"freeTaxMark\":\"\",\"goodsCode\":\"304040101010000000002\",\"goodsDiscountLineNo\":\"\",\"goodsExtendCode\":\"\",\"goodsLineNature\":\"0\",\"goodsLineNo\":\"1\",\"goodsName\":\"*物流辅助服务*代理逾重行李费\",\"goodsPrice\":\"0.94\",\"goodsQuantity\":\"1\",\"goodsSpecification\":\"\",\"goodsTaxItem\":\"\",\"goodsTaxRate\":\"0.06\",\"goodsTotalPrice\":\"0.94\",\"goodsTotalTax\":\"0.06\",\"goodsUnit\":\"\",\"preferentialMark\":\"0\",\"priceTaxMark\":\"0\",\"vatSpecialManagement\":\"\"}],\"invoiceListMark\":\"0\",\"invoiceSpecialMark\":\"00\",\"invoiceTerminalCode\":\"dzfp\",\"invoiceTotalPrice\":\"0.94\",\"invoiceTotalPriceTax\":\"1.00\",\"invoiceTotalTax\":\"0.06\",\"invoiceType\":\"0\",\"invoiceTypeCode\":\"026\",\"methodCode\":\"1000\",\"notificationNo\":\"\",\"organizationCode\":\"\",\"originalInvoiceCode\":\"\",\"originalInvoiceNo\":\"\",\"payee\":\"孙剑楠\",\"redInfoNo\":\"\",\"remarks\":\"\",\"requestId\":\"1c4166d4-7342-4cd1-a093-659785f9d751\",\"sellerTaxNo\":\"91500000747150426A\",\"serialNo\":\"8600046020190415165833000083\",\"signatureParameter\":\"0000004282000000\",\"taxDiskKey\":\"\",\"taxDiskNo\":\"\",\"taxDiskPassword\":\"\",\"taxNo\":\"91120116578300800U\",\"taxationMode\":\"0\"}";
        log.info(sendHttpByPost("http://39.106.51.231:51881/baiwangyun/api", ss));
    }
}

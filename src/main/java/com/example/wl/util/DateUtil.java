package com.example.wl.util;

import lombok.extern.slf4j.Slf4j;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
/**
 * MongoDB存储的日期转换
 * @author Pilgrim
 */
@Slf4j
public class DateUtil {

    /**
     * 计算得到MongoDB存储的日期，（默认情况下mongo中存储的是标准的时间，中国时间是东八区，存在mongo中少8小时，所以增加8小时）
     *
     * @author: Pilgrim
     * @date: 2019年3月16日 上午9:26:23
     * @param: @param
     * date
     * @param: @return
     * @return: Date
     */
    public static Date getMongoDate(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Calendar ca = Calendar.getInstance();
        ca.setTime(date);
        //增加8小时 存到monggo中正好是对应的是gmt北京时间
        ca.add(Calendar.HOUR_OF_DAY, 8);
        return string2Date(sdf.format(ca.getTime()));
    }


    /**
     * 字符转为时间Date
     * @param format
     * @return Date
     */
    private static Date string2Date(String format) {
        synchronized (DateUtil.class){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            try {
                return sdf.parse(format);
            } catch (ParseException e) {
                e.printStackTrace();
            }

        }
        return null;
    }

    /**
     * Date转为字符
     * @param format
     * @return
     */
    private static String string2Date(Date format) {
        synchronized (DateUtil.class){
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            return sdf.format(format);
        }
    }


}

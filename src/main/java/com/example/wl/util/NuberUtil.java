package com.example.wl.util;

import java.math.BigDecimal;
/**
 * @version 1.0
 * @description: 用于金额金三工具类
 * @author: Pilgrim
 * @time: 2019/1/23 9:24
 */
public class NuberUtil {

    /**
     *@description: number 小数位数 ，str 需要转换的字符
     *@author: Pilgrim
     *@time:  2019/4/12 14:52
     *@version 1.0
     */
    public static BigDecimal str2big(int number , String str){
        BigDecimal decimal = new BigDecimal(str);
        //向上四舍五入 2 位小数
        BigDecimal setScale = decimal.setScale(number,BigDecimal.ROUND_HALF_UP);

        return setScale;
    }


    /**
     *@description: b1,b2相乘 , 并且四舍五入保留number为小数
     *@author: Pilgrim
     *@time:  2019/4/12 15:01
     *@version 1.0
     */
    public static BigDecimal getResultMultiply(int number , String b1 , String b2 ){

        BigDecimal loanAmount = new BigDecimal(b1);
        BigDecimal interestRate = new BigDecimal(b2);
        //相乘
        BigDecimal interest = loanAmount.multiply(interestRate);

        //向上四舍五入 number 位小数
        BigDecimal setScale = interest.setScale(number,BigDecimal.ROUND_HALF_UP);

        return setScale;
    }

    /**
     *@description: 两数相除
     *@author: Pilgrim
     *@time:  2019/4/16 15:14
     *@version 1.0
     */
    public static BigDecimal getResultDivide(int number , String b1 , String b2 ){

        BigDecimal loanAmount = new BigDecimal(b1);
        BigDecimal interestRate = new BigDecimal(b2);
        //向上四舍五入 number 位小数
        BigDecimal setScale = loanAmount.divide(interestRate,number,  BigDecimal.ROUND_HALF_UP) ;
//        log.info(setScale);

        return setScale;
    }


    /**
     *@description: 两数相减
     *@author: Pilgrim
     *@time:  2019/4/16 15:14
     *@version 1.0
     */
    public static BigDecimal getResultSubtract(int number , String b1 , String b2 ){

        BigDecimal loanAmount = new BigDecimal(b1);
        BigDecimal interestRate = new BigDecimal(b2);
        //除
        BigDecimal interest = loanAmount.subtract(interestRate);

        //向上四舍五入 number 位小数
        BigDecimal setScale = interest.setScale(number,BigDecimal.ROUND_HALF_UP);

        return setScale;
    }

}

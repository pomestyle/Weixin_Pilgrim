package com.example.wl.aspect;


import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

/**
 * @author Pilgrim
 */
@Component
@Aspect
@Slf4j
public class ControllerTimeConsumingAspect {

    /**
     * 定义切面 ControllerTimeConsumingAspect
     */
    @Around("execution(* com.example.wl.controller.*.*(..))")
    public Object logTome(ProceedingJoinPoint pjp) throws Throwable {
        long begin = System.currentTimeMillis();
        String method = pjp.getSignature().getName();
        String className = pjp.getTarget().getClass().getName();

        Object ret = pjp.proceed();
        log.info("接口耗时统计<" + className + "." + method + "> 耗时 <" + (System.currentTimeMillis() - begin) + ">ms");
        return ret;
    }

}

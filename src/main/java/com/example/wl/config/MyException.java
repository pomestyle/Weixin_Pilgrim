package com.example.wl.config;

/**
 * @author Pilgrim
 */
public class MyException extends Exception {
    public MyException(String message, String message1) {
        super(message);
    }

    public MyException(String message) {
        super(message);
    }
}

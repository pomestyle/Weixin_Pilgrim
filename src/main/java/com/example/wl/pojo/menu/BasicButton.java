package com.example.wl.pojo.menu;

import lombok.Data;

/**
 * Button 基类
 * @author Pilgrim
 */
@Data
public class BasicButton {
    private String name;

    private String type;

    /**
     * 二级菜单的数组标签 为 sub_button
     */
    private BasicButton []sub_button;

}

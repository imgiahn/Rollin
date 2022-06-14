package com.poscoict.rollin.gift.model;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Data
@Component
public class GiftDto {
    private Integer id;
    private Integer price;
    private String content;
    private Integer count;
    private String name;
    private String img;
    private Integer views;
}

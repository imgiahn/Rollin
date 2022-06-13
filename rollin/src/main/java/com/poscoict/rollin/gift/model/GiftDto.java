package com.poscoict.rollin.gift.model;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Data
@Component
public class GiftDto {
    private int id;
    private int price;
    private String content;
    private int count;
    private Date date;
    private String name;
    private String img;


}

package com.poscoict.rollin.user.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class UserDto {

    private Integer id; // ?반환 타입이 왜 Integer
    private String userId;
    private String password;
    private String name;
    private String img;
    private String pcnt;

}
package com.poscoict.rollin.user.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class LoginDto {
    private int id;
    private String userId;

    private String name;
    private String img;
    private String pcnt;
    private String token;
}
package com.poscoict.rollin.paper.model;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Date;

@Data
@Component
public class PaperDTO {
    private int id;
    private int userId;
    private String nickname;
    private String content;
    private Date date;
    private int giftId;
}

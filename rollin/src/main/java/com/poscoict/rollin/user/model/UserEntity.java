package com.poscoict.rollin.user.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@Builder
@Data
@Entity(name = "users")
@Component
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="userId")
    private String userId;
    @Column(name="password")
    private String password;
    @Column(name="name")
    private String name;
    @Column(name="img")
    private String img;
    @Column(name="pcnt")
    private Integer pcnt=0;

    private String token;
}

package com.poscoict.rollin.user.controller;


import com.poscoict.rollin.aspect.TokenRequired;
import com.poscoict.rollin.config.SecurityService;
import com.poscoict.rollin.user.model.LoginDto;
import com.poscoict.rollin.user.model.UserDto;
import com.poscoict.rollin.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserDto userDto;

    @Autowired
    SecurityService securityService;

    @GetMapping
    public List<UserDto> getUser() {
        return userService.getAllUser();
    }
    @GetMapping("/{id}")
    public List<UserDto> getUserById(@PathVariable String id){
        userDto.setId(Integer.valueOf(id));
        return userService.getUserById(userDto);
    }

    @GetMapping("/me")
    @TokenRequired
    public List<UserDto> getUserByMe(){
        userDto.setId(Integer.valueOf(securityService.getIdAtToken()));
        return userService.getUserById(userDto);
    }
    @PostMapping
    public Integer insert(@RequestBody UserDto userDTO){
        return userService.insertUser(userDTO);
    }

    @PostMapping("/Id")
    public Integer idCheck(@RequestBody UserDto userDto){


        return userService.idCheck(userDto);
    }

    @PostMapping("/login")
    public List<UserDto> LoginCheck(@RequestBody  UserDto userDto){
        return userService.LoginCheck(userDto);
    }

    @PostMapping("/kaologin")
    public List<UserDto> kaoCheck(@RequestBody UserDto userDto){
        return userService.kaoCheck(userDto);
    }

    @PostMapping("/Login")
    public LoginDto loginUser(@RequestBody UserDto userDto){
        UserDto returnDto =userService.serviceLogin(userDto); //쿼리 입력 후 결과값
        LoginDto loginDto = new LoginDto();
        loginDto.setUserId(returnDto.getUserId());
        loginDto.setId(returnDto.getId());
        loginDto.setName(returnDto.getName()); //반값으로 형성된 곳에 하나씩 채워진다.
        loginDto.setImg(returnDto.getImg());
        loginDto.setPcnt(returnDto.getPcnt());
//        loginDto.setToken(returnDto.getToken());
        String token = securityService.createToken(returnDto.getId().toString()); //받아온 값을 셋토큰에 넣어준다.
        loginDto.setToken(token);

        return loginDto;
        //리액트에 던져준다
    }


}

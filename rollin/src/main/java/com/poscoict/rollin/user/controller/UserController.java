package com.poscoict.rollin.user.controller;


import com.poscoict.rollin.user.model.UserDto;
import com.poscoict.rollin.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<UserDto> getUser() {
        return userService.getAllUser();
    }

    @PostMapping
    public Integer insert(@RequestBody UserDto userDTO){
        return userService.insertUser(userDTO);
    }

    @PostMapping("/Id")
    public Integer idCheck(@RequestBody UserDto userDto){


        return userService.idCheck(userDto);
    }

    @PostMapping("/Login")
    public List<UserDto> LoginCheck(@RequestBody  UserDto userDto){
        return userService.LoginCheck(userDto);
    }
}

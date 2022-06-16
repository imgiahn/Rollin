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

    @Autowired
    UserDto userDto;
    @GetMapping
    public List<UserDto> getUser() {
        return userService.getAllUser();
    }
    @GetMapping("/{id}")
    public List<UserDto> getUserById(@PathVariable String id){
        userDto.setId(Integer.valueOf(id));
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
}

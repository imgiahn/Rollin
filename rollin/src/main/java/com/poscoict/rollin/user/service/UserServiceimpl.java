package com.poscoict.rollin.user.service;

import com.poscoict.rollin.user.model.UserDto;
import com.poscoict.rollin.user.repo.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceimpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public List<UserDto> getAllUser() {
        return userMapper.getAllUser();
    }

    @Override
    public Integer insertUser(UserDto userDTO) {
        return userMapper.insertUser(userDTO);
    }

    @Override
    public Integer idCheck(UserDto userDto) {
        return userMapper.idCheck(userDto);
    }

    @Override
    public List<UserDto> LoginCheck(UserDto userDto) {
        return userMapper.LoginCheck(userDto);
    }

    @Override
    public List<UserDto> getUserById(UserDto userDto) {
        return userMapper.getUserById(userDto);
    }

    @Override
    public List<UserDto> kaoCheck(UserDto userDto) {
        return userMapper.kaoCheck(userDto);
    }


}

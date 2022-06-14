package com.poscoict.rollin.user.service;

import com.poscoict.rollin.user.model.UserDTO;
import com.poscoict.rollin.user.repo.UserMapper;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceimpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public List<UserDTO> getAllUser() {
        return userMapper.getAllUser();
    }

    @Override
    public Integer insertUser(UserDTO userDTO) {
        return userMapper.insertUser(userDTO);
    }
}

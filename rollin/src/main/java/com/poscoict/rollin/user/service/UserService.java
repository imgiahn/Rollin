package com.poscoict.rollin.user.service;

import com.poscoict.rollin.user.model.UserDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    List<UserDTO> getAllUser();

    Integer insertUser(UserDTO userDTO);
}

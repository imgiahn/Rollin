package com.poscoict.rollin.user.service;

import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.user.model.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    List<UserDto> getAllUser();

    Integer insertUser(UserDto userDTO);

    Integer idCheck(UserDto userDto);

    List<UserDto> LoginCheck(UserDto userDto);

    List<UserDto> getUserById(UserDto userDto);
}

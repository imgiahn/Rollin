package com.poscoict.rollin.user.repo;


import com.poscoict.rollin.user.model.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    List<UserDto> getAllUser();


    Integer insertUser(UserDto userDTO);

    Integer idCheck(UserDto userDto);
    List<UserDto> LoginCheck(UserDto userDto);

    List<UserDto> getUserById(UserDto userDto);

    List<UserDto> kaoCheck(UserDto userDto);
}

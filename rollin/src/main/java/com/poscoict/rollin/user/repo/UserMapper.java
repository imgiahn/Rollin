package com.poscoict.rollin.user.repo;


import com.poscoict.rollin.user.model.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    List<UserDTO> getAllUser();

    Integer insertUser(UserDTO userDTO);


}

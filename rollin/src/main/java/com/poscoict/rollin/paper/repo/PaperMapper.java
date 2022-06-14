package com.poscoict.rollin.paper.repo;

import com.poscoict.rollin.paper.model.PaperDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PaperMapper {
    List<PaperDTO> getAllPaper();

    Integer postPaper(PaperDTO paperDTO);
}

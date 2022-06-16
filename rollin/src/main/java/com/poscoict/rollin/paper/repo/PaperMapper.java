package com.poscoict.rollin.paper.repo;

import com.poscoict.rollin.paper.model.PaperDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PaperMapper {
    List<PaperDto> getAllPaper();

    List<PaperDto> getPaperById(PaperDto paperDTO);
    Integer postPaper(PaperDto paperDTO);
}

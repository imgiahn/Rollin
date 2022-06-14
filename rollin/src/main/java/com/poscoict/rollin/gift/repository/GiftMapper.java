package com.poscoict.rollin.gift.repository;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.paper.model.PaperDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GiftMapper {

    GiftDto getGiftById(Integer id);

    Integer insertPaper(PaperDto paperDto);

    Integer updateGiftCount(Integer id);
}

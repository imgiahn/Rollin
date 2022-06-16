package com.poscoict.rollin.gift.repository;

import com.poscoict.rollin.gift.model.GiftDto;

import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.user.model.UserDto;
import io.swagger.models.auth.In;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GiftMapper {
    List<GiftDto> getAllGift();
    List<GiftDto> searchGiftByName(GiftDto giftDto);

    Integer viewCountById(GiftDto giftDto);

    GiftDto getGiftById(Integer id);

    Integer insertGift(PaperDto paperDto);

    Integer updateGiftCount(Integer id);

    List<UserDto> findReceiverNotUserId(Integer id);
}

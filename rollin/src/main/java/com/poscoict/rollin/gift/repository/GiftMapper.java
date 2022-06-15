package com.poscoict.rollin.gift.repository;

import com.poscoict.rollin.gift.model.GiftDto;

import com.poscoict.rollin.paper.model.PaperDTO;
import com.poscoict.rollin.user.model.UserDTO;
import io.swagger.models.auth.In;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GiftMapper {
    List<GiftDto> getAllGift();
    List<GiftDto> searchGiftByName(GiftDto giftDto);
    List<GiftDto> sortGiftByCount();

    List<GiftDto> sortGiftByViews();

    List<GiftDto> sortGiftByHighPrice();

    List<GiftDto> sortGiftByLowPrice();

    Integer viewCountById(GiftDto giftDto);

    GiftDto getGiftById(Integer id);

    Integer insertGift(PaperDTO paperDto);

    Integer updateGiftCount(Integer id);

    List<UserDTO> findReceiverNotUserId(Integer id);
}

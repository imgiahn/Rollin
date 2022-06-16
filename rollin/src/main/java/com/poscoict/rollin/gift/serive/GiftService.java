package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.user.model.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GiftService {
    List<GiftDto> findAllGift();
    List<GiftDto> findGiftByName(GiftDto giftDto);
    List<GiftDto> findSortGiftByCount();

    List<GiftDto> findSortGiftByViews();

    List<GiftDto> findSortGiftByHighPrice();

    List<GiftDto> findSortGiftByLowPrice();

    Integer viewCount(GiftDto giftDto);

    GiftDto getGiftById(Integer id);

    Integer insertGift(PaperDto paperDto);

    Integer updateGiftCount(Integer id);

    List<UserDto> findReceiverNotUserId(Integer id);

}

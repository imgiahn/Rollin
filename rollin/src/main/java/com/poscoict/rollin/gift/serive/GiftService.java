package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftDto;
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



}

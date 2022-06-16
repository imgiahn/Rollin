package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.paper.model.PaperDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GiftService {
    List<GiftEntity> findAllGift();
    List<GiftEntity> findGiftByName(String name);

    Integer viewCount(GiftDto giftDto);

    GiftDto getGiftById(Integer id);

    Integer insertGift(PaperDto paperDto);

    Integer updateGiftCount(Integer id);

    List<PaperDto> findReceiverNotUserId(Integer id);

}

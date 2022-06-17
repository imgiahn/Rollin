package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.paper.model.PaperEntity;
import com.poscoict.rollin.user.model.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface GiftService {
    List<GiftEntity> findAllGift();
    List<GiftEntity> findGiftByName(String name);

    Optional<GiftEntity> viewCount(Integer id);

    Optional<GiftEntity> getGiftById(Integer id);

    Boolean insertGiftInPaperAndUpdateGiftCount(PaperEntity paperEntity);

    List<UserDto> findReceiverNotUserId(Integer id);

}

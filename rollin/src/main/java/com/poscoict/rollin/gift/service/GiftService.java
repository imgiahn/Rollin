package com.poscoict.rollin.gift.service;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.paper.model.PaperDto;
import org.springframework.stereotype.Service;


public interface GiftService {

    GiftDto getGiftById(Integer id);

    Integer insertPaper(PaperDto paperDto);

    Integer updateGiftCount(Integer id);
}

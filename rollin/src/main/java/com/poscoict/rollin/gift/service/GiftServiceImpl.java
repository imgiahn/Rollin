package com.poscoict.rollin.gift.service;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.repository.GiftMapper;
import com.poscoict.rollin.paper.model.PaperDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GiftServiceImpl implements GiftService{

    @Autowired
    GiftMapper giftMapper;

    @Override
    public GiftDto getGiftById(Integer id) {
        return giftMapper.getGiftById(id);
    }

    @Override
    public Integer insertPaper(PaperDto paperDto) {
        return giftMapper.insertPaper(paperDto);
    }
}

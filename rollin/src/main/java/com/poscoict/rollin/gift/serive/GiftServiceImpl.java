package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.repository.GiftMapper;
import com.poscoict.rollin.paper.model.PaperDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiftServiceImpl implements GiftService {
    @Autowired
    GiftMapper giftMapper;

    @Override
    public List<GiftDto> findAllGift() {
        return giftMapper.getAllGift() ;
    }

    @Override
    public List<GiftDto> findGiftByName(GiftDto giftDto) {
        return giftMapper.searchGiftByName(giftDto);
    }

    @Override
    public List<GiftDto> findSortGiftByCount() {
        return giftMapper.sortGiftByCount();
    }

    @Override
    public List<GiftDto> findSortGiftByViews() {
        return giftMapper.sortGiftByViews();
    }

    @Override
    public List<GiftDto> findSortGiftByHighPrice() {
        return giftMapper.sortGiftByHighPrice();
    }

    @Override
    public List<GiftDto> findSortGiftByLowPrice() {
        return giftMapper.sortGiftByLowPrice();
    }

    @Override
    public Integer viewCount(GiftDto giftDto) {
        return giftMapper.viewCountById(giftDto);
    }

    @Override
    public GiftDto getGiftById(Integer id) {
        return giftMapper.getGiftById(id);
    }

    @Override
    public Integer insertPaper(PaperDto paperDto) {
        return giftMapper.insertPaper(paperDto);
    }

    @Override
    public Integer updateGiftCount(Integer id) {
        return giftMapper.updateGiftCount(id);
    }
}

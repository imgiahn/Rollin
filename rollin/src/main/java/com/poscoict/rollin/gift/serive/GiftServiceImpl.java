package com.poscoict.rollin.gift.serive;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.gift.repository.GiftMapper;
import com.poscoict.rollin.gift.repository.GiftRepository;
import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.user.model.UserDto;
import lombok.extern.slf4j.Slf4j;
import com.poscoict.rollin.user.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class GiftServiceImpl implements GiftService {
    @Autowired
    GiftMapper giftMapper;

    @Autowired
    GiftRepository giftRepository;

    @Override
    public List<GiftEntity> findAllGift() {
        return giftRepository.findAll() ;
    }

    @Override
    public List<GiftEntity> findGiftByName(String name) {
        log.info(name);

        return giftRepository.findByNameLike("%"+name+"%");
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
    public Integer insertGift(PaperDto paperDto) {
        return giftMapper.insertGift(paperDto);
    }

    @Override
    public Integer updateGiftCount(Integer id) {
        return giftMapper.updateGiftCount(id);
    }

    @Override
    public List<UserDto> findReceiverNotUserId(Integer id) {
        return giftMapper.findReceiverNotUserId(id);
    }
}

package com.poscoict.rollin.gift.controller;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.serive.GiftServiceImpl;
import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.user.model.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("gift")
@Slf4j
public class GiftController {
    @Autowired
    GiftServiceImpl giftService;
    @Autowired
    GiftDto giftDto;

    @Autowired
    PaperDto paperDto;

    @Autowired
    UserDto userDto;

    @GetMapping("/")
    public List<GiftDto> getAllGift(){
        return giftService.findAllGift();
    }

    @GetMapping("/search/{name}")
    public List<GiftDto> getGiftByName(@PathVariable String name){
        log.info(name);
        giftDto.setName(name);
        return giftService.findGiftByName(giftDto);
    }

    @GetMapping("/sortcount")
    public List<GiftDto> getSortGiftByCount(){
        return giftService.findSortGiftByCount();
    }

    @GetMapping("/sortview")
    public List<GiftDto> getSortGiftByViews(){
        return giftService.findSortGiftByViews();
    }

    @GetMapping("/sorthprice")
    public List<GiftDto> getSortGiftByHighPrice(){
        return giftService.findSortGiftByHighPrice();
    }

    @GetMapping("/sortlprice")
    public List<GiftDto> getSortGiftByLowPrice(){
        return giftService.findSortGiftByLowPrice();
    }
    @PutMapping("/{id}")
    public Integer updateGiftView(
            @RequestBody GiftDto giftDto,
            @PathVariable String id
    ) {
        giftDto.setId(Integer.valueOf(id));
        return giftService.viewCount(giftDto);
    }

    @GetMapping("/{id}")
    public GiftDto getGiftById(@PathVariable String id){
        return giftService.getGiftById(Integer.valueOf(id));
    }

    // insertGift(papaer에 등록)
    // => 프론트에서  userId, nickname, content (Body에), giftId 받아와서 등록하기
    @PostMapping("")
    public ResponseEntity<?> postGift(@RequestBody PaperDto paperDto){
        log.info(paperDto.toString());
        HttpStatus httpStatus;
        if(giftService.insertGift(paperDto)==1){
            httpStatus = giftService.updateGiftCount(paperDto.getGiftId())==1
                    ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        }else{
            httpStatus = HttpStatus.BAD_REQUEST;
        }

        return new ResponseEntity<>(httpStatus);
    }

    @GetMapping("/receiver/{id}")
    public List<UserDto> getReceiverNotUserId(@PathVariable String id){
        return giftService.findReceiverNotUserId(Integer.valueOf(id));
    }
}

package com.poscoict.rollin.gift.controller;

import com.poscoict.rollin.gift.model.GiftDto;
import com.poscoict.rollin.gift.service.GiftServiceImpl;
import com.poscoict.rollin.paper.model.PaperDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("gift")
public class GiftController {

    @Autowired
    GiftDto giftDto;

    @Autowired
    PaperDto paperDto;

    @Autowired
    GiftServiceImpl giftService;

    // getGiftById
    @GetMapping("/{id}")
    public GiftDto getGiftById(@PathVariable String id){
        return giftService.getGiftById(Integer.valueOf(id));
    }

    // insertGift(papaer에 등록)
    // => 프론트에서  userId, nickname, content (Body에), giftId 받아와서 등록하기
    @PostMapping("")
    public ResponseEntity<?> postGift(@RequestBody PaperDto paperDto){

        HttpStatus httpStatus;
        if(giftService.insertPaper(paperDto)==1){
            httpStatus = giftService.updateGiftCount(paperDto.getGiftId())==1
                    ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        }else{
            httpStatus = HttpStatus.BAD_REQUEST;
        }

        return new ResponseEntity<>(httpStatus);
    }
}

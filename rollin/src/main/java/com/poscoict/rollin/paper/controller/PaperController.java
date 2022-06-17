package com.poscoict.rollin.paper.controller;

import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.paper.model.PaperEntity;
import com.poscoict.rollin.paper.service.PaperService;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/paper")
public class PaperController {
    @Autowired
    PaperService paperService;

    @Autowired
    PaperDto paperDTO;
    @Autowired
    PaperEntity paperEntity;
    @GetMapping
    public List<PaperEntity> getAllPaper(){
        return paperService.getAllPaper();
    }

    @GetMapping("/{userId}")
    public List<PaperEntity> getPaperByUserId(@PathVariable String userId) {
        return paperService.getPaperByUserId(Integer.valueOf(userId));
    }
    @PostMapping
    public Boolean postPaper(@RequestBody PaperEntity paperEntity){
        return paperService.postPaper(paperEntity);
    }
}

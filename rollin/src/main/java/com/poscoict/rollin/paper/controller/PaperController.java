package com.poscoict.rollin.paper.controller;

import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.paper.service.PaperService;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paper")
public class PaperController {
    @Autowired
    PaperService paperService;

    @Autowired
    PaperDto paperDTO;
    @GetMapping
    public List<PaperDto> getAllPaper(){
        return paperService.getAllPaper();
    }

    @GetMapping("/{id}")
    public List<PaperDto> getPaperById(@PathVariable String id) {
        paperDTO.setUserId(Integer.valueOf(id));
        return paperService.getPaperById(paperDTO);
    }
    @PostMapping
    public Integer postPaper(@RequestBody PaperDto paperDTO){
        return paperService.postPaper(paperDTO);
    }
}

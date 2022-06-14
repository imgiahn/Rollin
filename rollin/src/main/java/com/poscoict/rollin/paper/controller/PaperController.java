package com.poscoict.rollin.paper.controller;

import com.poscoict.rollin.paper.model.PaperDTO;
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
    PaperDTO paperDTO;
    @GetMapping
    public List<PaperDTO> getAllPaper(){
        return paperService.getAllPaper();
    }

    @GetMapping("/{id}")
    public List<PaperDTO> getPaperById(@PathVariable String id) {
        paperDTO.setUserId(Integer.valueOf(id));
        return paperService.getPaperById(paperDTO);
    }
    @PostMapping
    public Integer postPaper(@RequestBody PaperDTO paperDTO){
        return paperService.postPaper(paperDTO);
    }
}

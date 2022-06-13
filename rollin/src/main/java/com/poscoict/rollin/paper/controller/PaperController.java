package com.poscoict.rollin.paper.controller;

import com.poscoict.rollin.paper.model.PaperDTO;
import com.poscoict.rollin.paper.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/paper")
public class PaperController {
    @Autowired
    PaperService paperService;

    @GetMapping
    public List<PaperDTO> getAllPaper(){
        return paperService.getAllPaper();
    }
}

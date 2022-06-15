package com.poscoict.rollin.paper.service;

import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.paper.repo.PaperMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaperServiceimpl implements PaperService{
    @Autowired
    PaperMapper paperMapper;


    @Override
    public List<PaperDto> getAllPaper() {
        return paperMapper.getAllPaper();
    }

    @Override
    public List<PaperDto> getPaperById(PaperDto paperDTO) {
        return paperMapper.getPaperById(paperDTO);
    }

    @Override
    public Integer postPaper(PaperDto paperDTO) {
        return paperMapper.postPaper(paperDTO);
    }
}

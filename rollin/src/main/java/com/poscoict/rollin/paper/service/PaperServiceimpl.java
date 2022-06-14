package com.poscoict.rollin.paper.service;

import com.poscoict.rollin.paper.model.PaperDTO;
import com.poscoict.rollin.paper.repo.PaperMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaperServiceimpl implements PaperService{
    @Autowired
    PaperMapper paperMapper;


    @Override
    public List<PaperDTO> getAllPaper() {
        return paperMapper.getAllPaper();
    }

    @Override
    public List<PaperDTO> getPaperById(PaperDTO paperDTO) {
        return paperMapper.getPaperById(paperDTO);
    }

    @Override
    public Integer postPaper(PaperDTO paperDTO) {
        return paperMapper.postPaper(paperDTO);
    }
}

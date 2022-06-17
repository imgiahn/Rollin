package com.poscoict.rollin.paper.service;

import com.poscoict.rollin.paper.model.PaperDto;
import com.poscoict.rollin.paper.model.PaperEntity;
import com.poscoict.rollin.paper.repo.PaperMapper;
import com.poscoict.rollin.paper.repo.PaperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaperServiceimpl implements PaperService{
    @Autowired
    PaperMapper paperMapper;
    @Autowired
    PaperRepository paperRepository;

    
    @Override
    public List<PaperEntity> getAllPaper() {
        return paperRepository.findAll();
    }

    @Override
    public List<PaperEntity> getPaperByUserId(Integer userId) {
        return paperRepository.findAllByUserId(userId);
    }

    @Override
    public Boolean postPaper(PaperEntity paperEntity) {
        PaperEntity new_paper=paperRepository.save(paperEntity);
        if(new_paper.getId()!=null){
            return true;
        }else{
            return false;
        }
    }
}

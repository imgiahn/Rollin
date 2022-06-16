package com.poscoict.rollin.paper.service;

import com.poscoict.rollin.paper.model.PaperDto;

import java.util.List;

public interface PaperService {
    List<PaperDto> getAllPaper();

    List<PaperDto> getPaperById(PaperDto paperDTO);
    Integer postPaper(PaperDto paperDTO);
}

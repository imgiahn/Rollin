package com.poscoict.rollin.paper.service;

import com.poscoict.rollin.paper.model.PaperDTO;

import java.util.List;

public interface PaperService {
    List<PaperDTO> getAllPaper();

    List<PaperDTO> getPaperById(PaperDTO paperDTO);
    Integer postPaper(PaperDTO paperDTO);
}

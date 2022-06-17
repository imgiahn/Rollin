package com.poscoict.rollin.paper.repo;

import com.poscoict.rollin.gift.model.GiftEntity;
import com.poscoict.rollin.paper.model.PaperEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaperRepository extends JpaRepository<PaperEntity,Integer> {
}

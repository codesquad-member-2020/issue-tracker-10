package com.group10.issuemaker.milestone;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MilestoneService {

    private final MilestoneDao mileStoneDao;

    public MilestoneService(MilestoneDao mileStoneDao) {
        this.mileStoneDao = mileStoneDao;
    }

    public void save (MilestoneRequest milestoneRequest) {
        this.mileStoneDao.save(milestoneRequest);
    }

    public List<MilestoneResponse> findAll() {
        return this.mileStoneDao.findAll();
    }
}

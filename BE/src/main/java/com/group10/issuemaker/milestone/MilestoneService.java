package com.group10.issuemaker.milestone;

import org.springframework.stereotype.Service;

@Service
public class MilestoneService {

    private final MilestoneDao mileStoneDao;

    public MilestoneService(MilestoneDao mileStoneDao) {
        this.mileStoneDao = mileStoneDao;
    }

    public void save (MilestoneRequest milestoneRequest) {
        this.mileStoneDao.save(milestoneRequest);
    }
}

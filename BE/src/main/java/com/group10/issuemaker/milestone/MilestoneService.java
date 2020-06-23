package com.group10.issuemaker.milestone;

import com.group10.issuemaker.issue.IssueDAO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MilestoneService {

    private final MilestoneDao milestoneDao;

    private final IssueDAO issueDAO;

    public MilestoneService(MilestoneDao mileStoneDao, IssueDAO issueDAO) {

        this.milestoneDao = mileStoneDao;
        this.issueDAO = issueDAO;
    }

    public void save(MilestoneRequest milestoneRequest) {
        this.milestoneDao.save(milestoneRequest);
    }

    public List<MilestoneResponse> findAll() {
        return this.milestoneDao.findAll();
    }

    public void deleteMilestone(Long milestoneId) {
        issueDAO.updateIssueOnDeleteMilestone(milestoneId);
        milestoneDao.deleteByMilestoneId(milestoneId);
    }

    public void updateMilestone(Long milestoneId, MilestoneRequest milestoneRequest) {
        milestoneDao.updateMilestone(milestoneId, milestoneRequest);
    }
}

package com.group10.issuemaker.milestone;

import com.group10.issuemaker.issue.IssueDAO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MilestoneService {

    private final MilestoneDAO milestoneDao;

    private final IssueDAO issueDAO;

    public MilestoneService(MilestoneDAO mileStoneDao, IssueDAO issueDAO) {

        this.milestoneDao = mileStoneDao;
        this.issueDAO = issueDAO;
    }

    public Long save(MilestoneRequest milestoneRequest) {
        return this.milestoneDao.save(milestoneRequest);
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

    public MilestoneResponse findMilestoneById(Long id) {
        return milestoneDao.findMilestoneById(id);
    }
}

package com.group10.issuemaker.issue;

import com.group10.issuemaker.Trinity;
import com.group10.issuemaker.User.UserDao;
import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.label.LabelDAO;
import com.group10.issuemaker.milestone.MilestoneDao;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.util.List;

@RestController
public class IssueController {

    private final IssueDAO issueDAO;
    private final MilestoneDao milestoneDao;
    private final LabelDAO labelDAO;
    private final UserDao userDao;

    public IssueController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
        this.milestoneDao = new MilestoneDao(dataSource);
        this.issueDAO = new IssueDAO(dataSource);
        this.userDao = new UserDao(dataSource);
    }

    @GetMapping("/issues")
    public List<Issue> getAllIssues() {
        return issueDAO.findAllIssues();
    }

    @GetMapping("issues/{issueId}")
    public Issue getParticularIssue(@PathVariable Long issueId) {
        return issueDAO.findIssue(issueId);
    }

    @GetMapping("issues/{issueId}/labels")
    public List<Label> getLabelsRelatedWithSpecificIssue(@PathVariable Long issueId) {
        return labelDAO.findRelatedLabels(issueId);
    }

    @GetMapping("issues/post")
    public String makeIssue(@RequestBody Issue issue) {

        return "updated";
    }

    @GetMapping("/info")
    public Trinity getTrinity() {
        Trinity trinity = new Trinity();
        trinity.setLabels(labelDAO.findLabels());
        trinity.setMilestones(milestoneDao.findAll());
        trinity.setUsers(userDao.findAllUses());
        return trinity;
    }


}

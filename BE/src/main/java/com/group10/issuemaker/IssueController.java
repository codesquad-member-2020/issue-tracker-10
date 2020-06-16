package com.group10.issuemaker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class IssueController {

    private final IssueDAO issueDAO;
    private final LabelDAO labelDAO;

    public IssueController(IssueDAO issueDAO, LabelDAO labelDAO) {
        this.labelDAO = labelDAO;
        this.issueDAO = issueDAO;
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


}

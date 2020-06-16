package com.group10.issuemaker.Issue;

import com.group10.issuemaker.Label.Label;
import com.group10.issuemaker.Label.LabelDAO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IssueController {

    private final IssueDAO issueDAO;
    private final LabelDAO labelDAO;
    private final IssueService issueService;

    public IssueController(IssueDAO issueDAO, LabelDAO labelDAO, IssueService issueService) {
        this.labelDAO = labelDAO;
        this.issueDAO = issueDAO;
        this.issueService = issueService;
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

    ///create a new issue
    @PostMapping("/issues")
    public ResponseEntity createNewIssue(@RequestBody IssueRequest issueRequest) {
        issueService.createIssue(issueRequest);
        return new ResponseEntity("OK", HttpStatus.OK);
    }



}

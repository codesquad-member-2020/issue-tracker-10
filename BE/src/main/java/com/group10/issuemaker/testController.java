package com.group10.issuemaker;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class testController {

    private final IssueDAO issueDAO;
    private final LabelDAO labelDAO;

    public testController(IssueDAO issueDAO, LabelDAO labelDAO) {
        this.labelDAO = labelDAO;
        this.issueDAO = issueDAO;
    }

    @GetMapping("/issues")
    public List<Issue> test2() {
        return issueDAO.getIssues();
    }

//    @GetMapping("/issues")
//    public Issue test2() {
//        return issueDAO.getIssues();
//    }

    @GetMapping("issues/{issueId}")
    public Issue test(@PathVariable Long issueId) {
        return issueDAO.findIssue(issueId);
    }


    @GetMapping("labels/{labelId}")
    public List<Label> test3(@PathVariable Long labelId) {
        return labelDAO.findLabels();
    }

    @GetMapping("/labels")
    public List<Label> test4() {
        return labelDAO.findLabels();
    }

    @GetMapping("issues/{issueId}/labels")
    public List<Label> test4(@PathVariable Long issueId) {
        return labelDAO.findRelatedLabels(issueId);
    }

    @GetMapping("issues/post")
    public String makeIssue(@RequestBody Issue issue) {

        return "updated";
    }


}

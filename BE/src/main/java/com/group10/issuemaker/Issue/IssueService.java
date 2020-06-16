package com.group10.issuemaker.Issue;

import org.springframework.stereotype.Service;

@Service
public class IssueService {

    private final IssueDAO issueDAO;

    public IssueService(IssueDAO issueDAO) {
        this.issueDAO = issueDAO;
    }

    public void createIssue(IssueRequest issueRequest) {
        issueDAO.createIssue(issueRequest, 1L);
    }
}

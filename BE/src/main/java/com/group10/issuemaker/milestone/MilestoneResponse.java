package com.group10.issuemaker.milestone;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@Builder
@ToString
public class MilestoneResponse {
    private Long id;

    private String title;

    private String description;

    private String dueDate;

    private Boolean opened;

    private List<IssueResponse> linkIssues;
}

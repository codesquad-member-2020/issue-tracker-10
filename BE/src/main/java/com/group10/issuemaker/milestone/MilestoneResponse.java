package com.group10.issuemaker.milestone;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class MilestoneResponse {

    @Id
    private Long milestone_id;

    private String title;

    private String description;

    private String dueDate;

    private Boolean opened;

    private List<IssueResponse> linkIssues;

    public void setLineIssues(List<IssueResponse> issues) {
        this.linkIssues = issues;
    }

    public void setOpened(Boolean opened) {
        this.opened = opened;
    }

    public MilestoneResponse() {
    }
}

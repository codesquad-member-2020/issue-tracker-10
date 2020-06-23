package com.group10.issuemaker.issue;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter @ToString
public class IssueRequest {

    private String title;
    private String content;
    private String openedDate;
    private int milestoneId;
    private int authorId;
    private List<Integer> labelIds;
    private List<Integer> assigneeIds;

}

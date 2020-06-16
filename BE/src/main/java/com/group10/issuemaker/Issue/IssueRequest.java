package com.group10.issuemaker.Issue;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter @ToString
public class IssueRequest {

    private String title;

    private String content;

    private List<Long> labelIds;

    private List<Long> assigneeIds;

    private Long mileStoneId;

}

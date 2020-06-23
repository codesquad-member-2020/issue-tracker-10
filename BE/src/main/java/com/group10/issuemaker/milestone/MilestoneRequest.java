package com.group10.issuemaker.milestone;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MilestoneRequest {

    private String title;

    private String description;

    private String dueDate;
}

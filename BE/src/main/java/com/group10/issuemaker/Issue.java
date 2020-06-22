package com.group10.issuemaker;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.group10.issuemaker.milestone.MilestoneDao;
import com.group10.issuemaker.milestone.MilestoneResponse;
import lombok.*;
import org.springframework.data.annotation.Id;

import javax.xml.stream.events.Comment;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter @ToString
public class Issue {

    private Long issue_id;

    private String title;

    private String content;

    private LocalDate opened_date;

    private LocalDate closed_date;

    @JsonProperty("isOpen")
    private boolean opened;

    private List<Label> labels;

    private List<Comment> comments;

    private List<User> assignees;

    private MilestoneResponse milestone;


}

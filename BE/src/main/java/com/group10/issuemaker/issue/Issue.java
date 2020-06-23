package com.group10.issuemaker.issue;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.group10.issuemaker.comment.CommentResponse;
import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.User.User;
import com.group10.issuemaker.milestone.MilestoneResponse;
import lombok.*;

import javax.xml.stream.events.Comment;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter @ToString
public class Issue {

    private Long issue_id;

    private String title;

    private String content;

    private String opened_date;

    private String closed_date;

    @JsonProperty("isOpen")
    private boolean opened;

    private List<Label> labels;

    private List<CommentResponse> comments;

    private List<User> assignees;

    private MilestoneResponse milestone;


}

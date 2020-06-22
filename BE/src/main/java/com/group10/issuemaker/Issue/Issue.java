package com.group10.issuemaker.Issue;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.group10.issuemaker.Label.Label;
import com.group10.issuemaker.comment.Comment;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.List;

@Getter @Setter @ToString
public class Issue {

    @Id
    private Long issue_id;

    private String title;

    private String content;

    private LocalDate opened_date;

    private LocalDate closed_date;

    private boolean opened;

    private List<Label> labels;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Comment> comments;

}

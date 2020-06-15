package com.group10.issuemaker;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty("isOpen")
    private boolean opened;

    private List<Label> labels;
}

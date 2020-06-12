package com.group10.issuemaker;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.List;

@Getter @Setter @ToString @Builder
public class Issue {

    @Id
    private Long issue_id;

    private String title;

    private String content;

    private LocalDate opened_date;

    private LocalDate closed_date;

    private boolean opened;

    private List<Label> labels;
}

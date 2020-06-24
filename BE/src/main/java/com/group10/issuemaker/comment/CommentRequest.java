package com.group10.issuemaker.comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CommentRequest {

    private Long issueId;

    private Long authorId;

    private String description;
}

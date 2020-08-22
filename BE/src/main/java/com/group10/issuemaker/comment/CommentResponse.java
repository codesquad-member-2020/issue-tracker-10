package com.group10.issuemaker.comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CommentResponse {

    private String writer;

    private String description;
}

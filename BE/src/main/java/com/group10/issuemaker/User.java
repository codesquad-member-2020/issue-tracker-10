package com.group10.issuemaker;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter @Builder @ToString
public class User {

    private String id;
    private String url;
}

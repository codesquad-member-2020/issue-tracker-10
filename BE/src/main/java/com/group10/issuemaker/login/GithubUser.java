package com.group10.issuemaker.login;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GithubUser {

    private String login;

    @JsonProperty("avatar_url")
    private String avatarUrl;
}

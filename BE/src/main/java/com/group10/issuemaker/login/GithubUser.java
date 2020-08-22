package com.group10.issuemaker.login;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GithubUser {

    @JsonProperty("login")
    private String username;

    @JsonProperty("avatar_url")
    private String avatarUrl;
}

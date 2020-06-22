package com.group10.issuemaker.login;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserResponse {

    @JsonProperty("user_id")
    private Long userId;

    private String name;

    private String url;
}

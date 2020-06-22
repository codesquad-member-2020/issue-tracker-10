package com.group10.issuemaker.login;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserResponse {

    private Long id;

    private String name;

    private String profile_url;
}

package com.group10.issuemaker.milestone;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class IssueResponse {

    private Long id;

    private Boolean isOpen;

}

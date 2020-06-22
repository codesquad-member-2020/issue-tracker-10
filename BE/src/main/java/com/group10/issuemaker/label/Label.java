package com.group10.issuemaker.label;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter @Setter @ToString
public class Label {

    @Id
    private Long label_id;

    private String textColor;

    private String backGroundColor;

    private String description;

    private String labelName;

}

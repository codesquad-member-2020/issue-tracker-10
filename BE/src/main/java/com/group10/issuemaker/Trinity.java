package com.group10.issuemaker;

import com.group10.issuemaker.User.User;
import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.milestone.MilestoneResponse;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter @ToString
public class Trinity {

    private List<Label> labels;
    private List<MilestoneResponse> milestones;
    private List<User> users;

}

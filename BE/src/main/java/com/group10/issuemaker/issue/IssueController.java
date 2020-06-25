package com.group10.issuemaker.issue;

import com.group10.issuemaker.ResponseMessage;
import com.group10.issuemaker.Trinity;
import com.group10.issuemaker.User.UserDAO;
import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.label.LabelDAO;
import com.group10.issuemaker.login.LoginService;
import com.group10.issuemaker.login.LoginUserDAO;
import com.group10.issuemaker.login.UserResponse;
import com.group10.issuemaker.milestone.MilestoneDAO;
import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;

@RestController
public class IssueController {

    private final IssueDAO issueDAO;
    private final MilestoneDAO milestoneDao;
    private final LabelDAO labelDAO;
    private final UserDAO userDao;
    private final LoginService loginService;

    public IssueController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
        this.milestoneDao = new MilestoneDAO(dataSource);
        this.issueDAO = new IssueDAO(dataSource);
        this.userDao = new UserDAO(dataSource);
        this.loginService = new LoginService(dataSource);
    }

    @GetMapping("/issues")
    public ResponseMessage<List<Issue>> getAllIssues() {
        return new ResponseMessage<>(HttpStatus.OK, "Requested Successfully", issueDAO.findAllIssues());
    }

    @GetMapping("issues/{issueId}")
    public ResponseMessage<Issue> getParticularIssue(@PathVariable Long issueId) {
        return new ResponseMessage<>(HttpStatus.OK, "Requested Successfully", issueDAO.findIssue(issueId));
    }

    @GetMapping("issues/{issueId}/labels")
    public ResponseMessage<List<Label>> getLabelsRelatedWithSpecificIssue(@PathVariable Long issueId) {
        return new ResponseMessage(HttpStatus.OK, "Requested Successfully", labelDAO.findRelatedLabels(issueId));
    }

    @PostMapping("/issues")
    public ResponseMessage<Issue> makeIssue(@CookieValue(name = "token") String token, @RequestBody IssueRequest issueRequest) {
        UserResponse user = loginService.getUserByJwt(token);
        Long issueId = issueDAO.makeIssue(issueRequest, user);
        return new ResponseMessage<>(HttpStatus.OK, "Issue has been created", issueDAO.findIssue(issueId));
    }

    @DeleteMapping("/issues/{issueId}")
    public ResponseMessage deleteIssue(@PathVariable Long issueId) {
        issueDAO.deleteIssue(issueId);
        return new ResponseMessage(HttpStatus.OK, "issue has been deleted");
    }

    @PutMapping("issues/{issueId}")
    public ResponseMessage editIssue(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueDAO.editIssue(issueRequest, issueId);
        return new ResponseMessage(HttpStatus.OK, "Updated Successfully", issueDAO.findIssue(issueId));
    }

    @GetMapping("/info")
    public ResponseMessage<Trinity> getTrinity() {
        Trinity trinity = new Trinity();
        trinity.setLabels(labelDAO.findLabels());
        trinity.setMilestones(milestoneDao.findAll());
        trinity.setUsers(userDao.findAllUses());
        return new ResponseMessage(HttpStatus.OK, "Requested Successfully", trinity);
    }


    @PutMapping("/close/{issueId}")
    public ResponseMessage closeIssue(@PathVariable Long issueId, @RequestBody String closedTime) {
        issueDAO.closeIssue(issueId, closedTime);
        return new ResponseMessage(HttpStatus.OK, "Closed Successfully");
    }

    @PutMapping("/open/{issueId}")
    public ResponseMessage openIssue(@PathVariable Long issueId) {
        issueDAO.openIssue(issueId);
        return new ResponseMessage(HttpStatus.OK, "Opened Successfully");
    }

}

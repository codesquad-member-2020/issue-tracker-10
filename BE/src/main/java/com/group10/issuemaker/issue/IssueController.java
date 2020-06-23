package com.group10.issuemaker.issue;

import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.label.LabelDAO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class IssueController {

    private final IssueDAO issueDAO;
    private final LabelDAO labelDAO;

    public IssueController(IssueDAO issueDAO, LabelDAO labelDAO) {
        this.labelDAO = labelDAO;
        this.issueDAO = issueDAO;
    }

    ///이슈 목록에서 코멘트는 갯수(int)만 주고 코멘트 상세정보는 이슈 상세페이지에서 주기
    ///그리고 null 값은 빈 배열로 주기
    ///이슈 상세페이지 가면, 모든 레이블을 반환하고 썼는지 안썼는지 체크 1)
    //이슈 생성 페이지에서 프론트에서 라벨, 유저, 마일스톤의 전체 리스트를 사용하 수 있도록 주기
    @GetMapping("/issues")
    public List<Issue> getAllIssues() {
        return issueDAO.findAllIssues();
    }

    @GetMapping("issues/{issueId}")
    public Issue getParticularIssue(@PathVariable Long issueId) {
        return issueDAO.findIssue(issueId);
    }

    @GetMapping("issues/{issueId}/labels")
    public List<Label> getLabelsRelatedWithSpecificIssue(@PathVariable Long issueId) {
        return labelDAO.findRelatedLabels(issueId);
    }

    @GetMapping("issues/post")
    public String makeIssue(@RequestBody Issue issue) {

        return "updated";
    }


}

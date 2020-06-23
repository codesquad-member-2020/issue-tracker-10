package com.group10.issuemaker.comment;

import com.group10.issuemaker.issue.Issue;
import com.group10.issuemaker.issue.IssueDAO;
import com.group10.issuemaker.label.LabelDAO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommentController {

    private final IssueDAO issueDAO;
    private final CommentDao commentDao;
    private final LabelDAO labelDAO;

    public CommentController(IssueDAO issueDAO, LabelDAO labelDAO, CommentDao commentDao) {
        this.labelDAO = labelDAO;
        this.issueDAO = issueDAO;
        this.commentDao = commentDao;
    }

    @GetMapping("/comments")
    public Integer cmt() {

        return commentDao.findNumberOfComments(1L);
    }

}

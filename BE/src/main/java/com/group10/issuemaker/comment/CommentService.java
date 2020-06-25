package com.group10.issuemaker.comment;

import com.group10.issuemaker.login.LoginService;
import com.group10.issuemaker.login.UserResponse;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;

@Service
public class CommentService {

    private final CommentDao commentDao;
    private LoginService loginService;

    public CommentService(DataSource dataSource) {

        this.commentDao = new CommentDao(dataSource);
        this.loginService = new LoginService(dataSource);
    }

    public CommentResponse save(CommentRequest commentRequest, String token) {
        UserResponse user = loginService.getUserByJwt(token);
        System.out.println(user);
        Long id = commentDao.save(commentRequest, user);
        return  commentDao.findCommentById(id);
    }

    public CommentResponse update(Long commentId,  CommentUpdateRequest commentUpdateRequest) {
        commentDao.update(commentId, commentUpdateRequest);
        return commentDao.findCommentById(commentId);
    }

    public void delete(Long commentId) {
        commentDao.delete(commentId);
    }
}

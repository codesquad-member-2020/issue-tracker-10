package com.group10.issuemaker.comment;

import org.springframework.stereotype.Service;

@Service
public class CommentService {

    private final CommentDao commentDao;

    public CommentService(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    public CommentResponse save(CommentRequest commentRequest) {
        Long id = commentDao.save(commentRequest);
        return  commentDao.findCommentById(id);
    }

}

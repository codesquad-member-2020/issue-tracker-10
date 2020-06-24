package com.group10.issuemaker.comment;

import com.group10.issuemaker.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/comments")
    public ResponseMessage<CommentResponse> createComment(@RequestBody CommentRequest commentRequest) {
        CommentResponse comment = commentService.save(commentRequest);

        return new ResponseMessage(HttpStatus.OK, "", comment);
    }
}

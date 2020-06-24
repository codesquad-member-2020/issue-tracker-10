package com.group10.issuemaker.comment;

import com.group10.issuemaker.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/comments/{commentId}")
    public ResponseMessage<CommentResponse> editComment(@RequestBody CommentUpdateRequest commentUpdateRequest, @PathVariable Long commentId) {

        CommentResponse comment = commentService.update(commentId, commentUpdateRequest);
        return new ResponseMessage(HttpStatus.OK, "", comment);
    }
}

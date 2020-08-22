package com.group10.issuemaker.comment;

import com.group10.issuemaker.label.Label;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class CommentDao {

    private final JdbcTemplate jdbcTemplate;

    public CommentDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<CommentResponse> findCommentByIssueId(Long issueId) {
        String sql = "SELECT U.name as writer, C.description FROM COMMENT C JOIN USER U WHERE C.issue_id = ? AND C.author_id = U.user_id";
        return jdbcTemplate.query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(CommentResponse.class));
    }

    public Integer findNumberOfComments(Long issueId) {
        String sql = "SELECT COUNT(comment_id) from comment where issue_id = ?";

        return jdbcTemplate.queryForObject(sql, new Object[]{issueId}, Integer.class);
    }
}

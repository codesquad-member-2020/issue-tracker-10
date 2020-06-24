package com.group10.issuemaker.comment;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class CommentDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public CommentDao(DataSource dataSource) {
        namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<CommentResponse> findCommentByIssueId(Long issueId) {
        String sql = "SELECT C.comment_id as id, U.name as writer, C.description FROM COMMENT C JOIN USER U WHERE C.issue_id = ? AND C.author_id = U.user_id";
        return namedParameterJdbcTemplate
                .getJdbcTemplate()
                .query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(CommentResponse.class));
    }

    public Integer findNumberOfComments(Long issueId) {
        String sql = "SELECT COUNT(comment_id) from comment where issue_id = ?";

        return namedParameterJdbcTemplate
                .getJdbcTemplate()
                .queryForObject(sql, new Object[]{issueId}, Integer.class);
    }

    public Long save(CommentRequest commentRequest) {
        String sql = "INSERT INTO comment (issue_id, author_id, description) VALUES (:issueId, :authorId, :description)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("issueId", commentRequest.getIssueId())
                .addValue("authorId", commentRequest.getAuthorId())
                .addValue("description", commentRequest.getDescription());

        KeyHolder keyHolder = new GeneratedKeyHolder();

        namedParameterJdbcTemplate.update(sql, sqlParameterSource, keyHolder);

        return keyHolder.getKey().longValue();
    }

    public CommentResponse findCommentById(Long id) {
        String sql = "SELECT C.comment_id as id, U.name as writer, C.description FROM comment C JOIN user U WHERE C.comment_id = ? AND C.author_id = U.user_id";

        return namedParameterJdbcTemplate.getJdbcTemplate().queryForObject(sql, new Object[]{id}, BeanPropertyRowMapper.newInstance(CommentResponse.class));
    }
}


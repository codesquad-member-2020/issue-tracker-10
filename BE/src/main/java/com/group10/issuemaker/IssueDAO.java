package com.group10.issuemaker;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import javax.xml.transform.Result;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Repository
public class IssueDAO {

    private JdbcTemplate jdbcTemplate;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private LabelDAO labelDAO;

    public IssueDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }
    public List<Label> findRelatedLabels(Long issueId) {
        String sql = "select * from label L\n" +
                "join issue_label X \n" +
                "where X.issue_id = ? AND X.label_id = L.label_id";
        return jdbcTemplate.query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(Label.class));
    }

    public Issue findIssue(Long issueId) {
        String sql = "SELECT * from issue where issue_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(Issue.class));
    }

    public List<Issue> getIssues() {
        String sql = "select I.issue_id, I.title, I.content, I.opened from ISSUE I";

        List<Issue> issues = namedParameterJdbcTemplate.query(sql, new RowMapper<Issue>() {

            @Override
            public Issue mapRow(ResultSet rs, int rowNum) throws SQLException {
                Issue issue = new Issue();
                issue.setIssue_id(rs.getLong("issue_id"));
                List<Label> labels = findRelatedLabels(rs.getLong("issue_id"));
                issue.setTitle(rs.getString("title"));
                issue.setContent(rs.getString("content"));
                issue.setOpened(rs.getBoolean("opened"));

                issue.setLabels(labels);

                return issue;
            }
        });
        return issues;
    }


}

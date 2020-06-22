package com.group10.issuemaker.Issue;

import com.group10.issuemaker.Label.Label;
import com.group10.issuemaker.Label.LabelDAO;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

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
        String sql = "SELECT * FROM ISSUE I JOIN COMMENT C ON I.ISSUE_ID = C.ISSUE_ID WHERE I.ISSUE_ID = " + issueId;

        return jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Issue.class));
    }

    public List<Issue> findAllIssues() {
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

    public void createIssue(IssueRequest issueRequest, Long authorId) {
        String sql = "INSERT INTO ISSUE (TITLE, CONTENT, OPENED_DATE, OPENED, AUTHOR_ID, MILESTONE_ID) " +
                "VALUES ( :title, :content, :opened_date, :opened, :author_id, :milestone_id)";

        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("title", issueRequest.getTitle())
                .addValue("content", issueRequest.getContent())
                .addValue("opened_date", LocalDate.now())
                .addValue("opened", true)
                .addValue("author_id", authorId)
                .addValue("milestone_id", issueRequest.getMileStoneId());

        KeyHolder keyHolder = new GeneratedKeyHolder();

        namedParameterJdbcTemplate.update(sql, sqlParameterSource, keyHolder);
        /// 이슈 레이블 추가를 위해 방금 만든 이슈의 아이디를 가져옴.
        Long issueId = (Long) keyHolder.getKey();
        for (Long l : issueRequest.getLabelIds()) {
            createIssueLabel(issueId, l);
        }
    }

    private void createIssueLabel (Long issue_id, Long label_id) {
        String sql = "INSERT INTO ISSUE_LABEL (ISSUE_ID, LABEL_ID) VALUES (:issue_id, :label_id)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("issue_id", issue_id)
                .addValue("label_id", label_id);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }


}

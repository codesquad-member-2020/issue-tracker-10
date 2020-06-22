package com.group10.issuemaker;

import com.group10.issuemaker.milestone.MilestoneDao;
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
    private MilestoneDao milestoneDao;

    public IssueDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.milestoneDao = new MilestoneDao(dataSource);
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

    public List<Issue> findAllIssues() {
        String sql = "select I.issue_id, I.title, I.content, I.opened from ISSUE I";

        List<Issue> issues = namedParameterJdbcTemplate.query(sql, new RowMapper<Issue>() {
            @Override
            public Issue mapRow(ResultSet rs, int rowNum) throws SQLException {
                Issue issue = new Issue();
                Long issueId = rs.getLong("issue_id");
                issue.setIssue_id(issueId);

                List<Label> labels = findRelatedLabels(issueId);

                issue.setTitle(rs.getString("title"));
                issue.setContent(rs.getString("content"));
                issue.setOpened(rs.getBoolean("opened"));
                issue.setLabels(labels);
                issue.setMilestone(milestoneDao.findMilestoneByIssueId(issueId));
                return issue;
            }
        });
        return issues;
    }

    public void createLabel(String textColor, String backColor, String description, String name) {
        String sql = "INSERT INTO LABEL (TEXTCOLOR, BACKGROUNDCOLOR, DESCRIPTION, LABELNAME) VALUES ( :textColor, :backColor, :description, :name)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("textColor", textColor)
                .addValue("backColor", backColor)
                .addValue("description", description)
                .addValue("name", name);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }
}

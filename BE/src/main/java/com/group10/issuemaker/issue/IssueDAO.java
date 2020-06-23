package com.group10.issuemaker.issue;

import com.group10.issuemaker.comment.CommentDao;
import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.User.UserDao;
import com.group10.issuemaker.label.LabelDAO;
import com.group10.issuemaker.milestone.MilestoneDao;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class IssueDAO {

    private JdbcTemplate jdbcTemplate;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private UserDao userDao;
    private MilestoneDao milestoneDao;
    private CommentDao commentDao;
    private LabelDAO labelDAO;

    public IssueDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.milestoneDao = new MilestoneDao(dataSource);
        this.userDao = new UserDao(dataSource);
        this.commentDao = new CommentDao(dataSource);
        this.labelDAO = new LabelDAO(dataSource);
    }

    public List<Label> findRelatedLabels(Long issueId) {
        String sql = "select * from label L\n" +
                "join issue_label X \n" +
                "where X.issue_id = ? AND X.label_id = L.label_id";
        return jdbcTemplate.query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(Label.class));
    }

    public Issue findIssue(Long issueId) {
        String sql = "SELECT * from issue where issue_id = ?";
        Issue issue = jdbcTemplate.queryForObject(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(Issue.class));
        issue.setAssignees(userDao.findUserByIssueId(issueId));
        issue.setComments(commentDao.findCommentByIssueId(issueId));
        issue.setMilestone(milestoneDao.findMilestoneByIssueId(issueId));
        issue.setLabels(labelDAO.getLabelsWithUsedLabels(issueId));

        return issue;
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
                issue.setAssignees(userDao.findUserByIssueId(issueId));
                issue.setNumberOfComments(commentDao.findNumberOfComments(issueId));
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

    public void updateIssueOnDeleteMilestone(Long milestoneId) {
        String sql = "UPDATE issue SET issue.milestone_id = null WHERE issue.milestone_id = :milestoneId";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("milestoneId", milestoneId);

        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }
}

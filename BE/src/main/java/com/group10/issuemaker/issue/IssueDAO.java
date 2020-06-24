package com.group10.issuemaker.issue;

import com.group10.issuemaker.comment.CommentDao;
import com.group10.issuemaker.label.Label;
import com.group10.issuemaker.User.UserDAO;
import com.group10.issuemaker.label.LabelDAO;
import com.group10.issuemaker.milestone.MilestoneDAO;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class IssueDAO {

    private JdbcTemplate jdbcTemplate;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private UserDAO userDao;
    private MilestoneDAO milestoneDao;
    private CommentDao commentDao;
    private LabelDAO labelDAO;

    public IssueDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.milestoneDao = new MilestoneDAO(dataSource);
        this.userDao = new UserDAO(dataSource);
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
        issue.setNumberOfComments(commentDao.findNumberOfComments(issueId));
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

    public Long makeIssue(@RequestBody IssueRequest issueRequest) {
        System.out.println(issueRequest);
        String sql = "insert into issue (title, content, opened_date, closed_date, opened, milestone_id, author_id) values (:title, :content, :openedDate, :closedDate, 1, :milestoneId, :authorId)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("title", issueRequest.getTitle())
                .addValue("content", issueRequest.getContent())
                .addValue("openedDate", issueRequest.getOpenedDate())
                .addValue("closedDate", "tbd")
                .addValue("milestoneId", issueRequest.getMilestoneId())
                .addValue("authorId", issueRequest.getAuthorId());
        KeyHolder keyHolder = new GeneratedKeyHolder();
        namedParameterJdbcTemplate.update(sql, sqlParameterSource, keyHolder);

        Long issueId = keyHolder.getKey().longValue();

        if (issueRequest.getLabelIds().length != 0) {
            for (Long labelId : issueRequest.getLabelIds()) {
                updateIssueLabel(issueId, labelId );
                System.out.println(" issue label id : " +  labelId  + " has been added");
            }
        } if (issueRequest.getAssigneeIds().length != 0) {
            for (Long assigneeId : issueRequest.getAssigneeIds()) {
                updateAssignee(issueId, assigneeId);
                System.out.println(" assignee id : " + assigneeId + " has been added");
            }
        }
        return issueId;
    }

    public void updateIssueLabel(Long issueId, Long labelId) {
        String sql = "insert into issue_label (issue_id, label_id) values ( :issueId, :labelId)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("issueId", issueId)
                .addValue("labelId", labelId);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }

    public void updateAssignee(Long issueId, Long assigneeId) {
        String sql = "insert into issue_assignee (issue_id, assignee_id) values ( :issueId, :assigneeId)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("issueId", issueId)
                .addValue("assigneeId", assigneeId);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }


    public void deleteIssue(Long issueId) {
        deleteIssueAssignee(issueId);
        deleteIssueLabel(issueId);
        deleteComment(issueId);
        String sql = "DELETE FROM ISSUE WHERE ISSUE_ID = ?";
        jdbcTemplate.update(sql, issueId);
    }

    public void deleteIssueLabel(Long issueId) {
        String sql = "DELETE FROM issue_label where issue_id = ?";
        jdbcTemplate.update(sql, issueId);
    }

    public void deleteIssueAssignee(Long issueId) {
        String sql = "DELETE FROM issue_assignee where issue_id = ?";
        jdbcTemplate.update(sql, issueId);
    }

    public void deleteComment(Long issueId) {
        String sql = "DELETE FROM comment where issue_id = ?";
        jdbcTemplate.update(sql, issueId);
    }

    public void updateIssueOnDeleteMilestone(Long milestoneId) {
        String sql = "UPDATE issue SET issue.milestone_id = null WHERE issue.milestone_id = :milestoneId";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("milestoneId", milestoneId);

        namedParameterJdbcTemplate.update(sql, sqlParameterSource);

    }
}

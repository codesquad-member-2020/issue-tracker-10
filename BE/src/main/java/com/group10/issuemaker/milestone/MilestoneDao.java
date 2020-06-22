package com.group10.issuemaker.milestone;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public class MilestoneDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final JdbcTemplate jdbcTemplate;

    public MilestoneDao(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public void save(MilestoneRequest milestoneRequest) {
        String query = "INSERT INTO milestone (title, due_date, description) values (:title, :due_date, :description)";
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("title", milestoneRequest.getTitle());
        paramMap.put("due_date", milestoneRequest.getDueDate());
        paramMap.put("description", milestoneRequest.getDescription());

        namedParameterJdbcTemplate.update(query, paramMap);
    }

    private List<IssueResponse> findIssueByMilestoneId(Long milestoneId) {
        String query = "SELECT issue.issue_id, issue.opened FROM issue where issue.milestone_id = :milestoneId";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("milestoneId", milestoneId);

        return namedParameterJdbcTemplate.query(query, paramMap, new IssueMapper());
    }

    public List<MilestoneResponse> findAll() {
        String query = "SELECT milestone_id, title, description, due_date FROM milestone";
        List<MilestoneResponse> res = namedParameterJdbcTemplate.query(query, new MilestoneMapper());
        return res.stream().map(milestone -> {
            List<IssueResponse> issueList = findIssueByMilestoneId(milestone.getMilestone_id());
            milestone.setLineIssues(issueList);
            milestone.setOpened(isOpenMilestone(issueList));
            return milestone;
        }).collect(Collectors.toList());
    }

    private Boolean isOpenMilestone(List<IssueResponse> issues) {
        Boolean isOpen = false;
        for (IssueResponse issue : issues) {
            isOpen = isOpen || issue.getIsOpen();
        }
        return isOpen;
    }

    public MilestoneResponse findMilestoneByIssueId(Long issueId) {
        String sql = "SELECT m.milestone_id, m.title FROM MILESTONE m JOIN ISSUE i where i.issue_id = ? AND i.milestone_id = m.milestone_id";
        return jdbcTemplate.queryForObject(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(MilestoneResponse.class));
    }
}

package com.group10.issuemaker.milestone;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public class MilestoneDAO {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final JdbcTemplate jdbcTemplate;

    public MilestoneDAO(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public Long save(MilestoneRequest milestoneRequest) {
        String query = "INSERT INTO milestone (title, due_date, description) values (:title, :due_date, :description)";
        SqlParameterSource parameterSource = new MapSqlParameterSource("title", milestoneRequest.getTitle())
                .addValue("due_date", milestoneRequest.getDueDate())
                .addValue("description", milestoneRequest.getDescription());
        KeyHolder keyHolder = new GeneratedKeyHolder();
        namedParameterJdbcTemplate.update(query, parameterSource, keyHolder);
        return keyHolder.getKey().longValue();
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
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(MilestoneResponse.class));
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public void deleteByMilestoneId(Long milestoneId) {
        String sql = "DELETE FROM milestone where milestone.milestone_id = :milestoneId";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("milestoneId", milestoneId);

        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }

    public void updateMilestone(Long milestoneId, MilestoneRequest milestoneRequest) {

        HashMap<String, Object> changeFields = new HashMap<>();
        if (milestoneRequest.getDescription() != null) {
            changeFields.put("description", milestoneRequest.getDescription());
        }
        if (milestoneRequest.getTitle() != null) {
            changeFields.put("title", milestoneRequest.getTitle());
        }
        if (milestoneRequest.getDueDate() != null) {
            changeFields.put("due_date", milestoneRequest.getDueDate());
        }

        if (changeFields.size() == 0) {
            return;
        }

        StringBuilder sql = new StringBuilder("UPDATE milestone SET ");

        Iterator it = changeFields.entrySet().iterator();

        while(it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            sql.append(pair.getKey());
            sql.append(" = '");
            sql.append(pair.getValue());
            sql.append("' ");

            if(it.hasNext()) {
                sql.append(" , ");
            }
        }

        sql.append(" WHERE milestone.milestone_id = :milestoneId");

        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("milestoneId", milestoneId);

        namedParameterJdbcTemplate.update(sql.toString(), sqlParameterSource);
    }

    public MilestoneResponse findMilestoneById(Long id) {
        String sql = "SELECT milestone_id, title, description, due_date FROM milestone Where milestone.milestone_id = ?";

        MilestoneResponse milestone = jdbcTemplate.queryForObject(sql, new Object[]{id}, BeanPropertyRowMapper.newInstance(MilestoneResponse.class));
        List<IssueResponse> issueList = findIssueByMilestoneId(milestone.getMilestone_id());
        milestone.setLineIssues(issueList);
        milestone.setOpened(isOpenMilestone(issueList));

        return milestone;
    }
}

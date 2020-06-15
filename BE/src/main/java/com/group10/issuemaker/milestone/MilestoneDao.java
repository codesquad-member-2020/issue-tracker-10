package com.group10.issuemaker.milestone;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Repository
public class MilestoneDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public MilestoneDao(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public void save(MilestoneRequest milestoneRequest) {
        String query = "INSERT INTO milestone (title, due_date, description) values (:title, :due_date, :description)";
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("title", milestoneRequest.getTitle());
        paramMap.put("due_date", milestoneRequest.getDueDate());
        paramMap.put("description", milestoneRequest.getDescription());

        namedParameterJdbcTemplate.update(query, paramMap);
    }
}

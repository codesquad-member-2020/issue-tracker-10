package com.group10.issuemaker.milestone;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MilestoneMapper implements RowMapper<MilestoneResponse> {

    @Override
    public MilestoneResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
        return MilestoneResponse
                .builder()
                .id(rs.getLong("milestone_id"))
                .dueDate(rs.getString("due_date"))
                .title(rs.getString("title"))
                .description(rs.getString("description"))
                .build();
    }
}

package com.group10.issuemaker.milestone;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IssueMapper implements RowMapper<IssueResponse> {

    @Override
    public IssueResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
        return IssueResponse
                .builder()
                .id(rs.getLong("issue_id"))
                .isOpen(rs.getBoolean("opened"))
                .build();
    }
}

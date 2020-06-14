package com.group10.issuemaker;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class LabelDAO {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public LabelDAO(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<Label> findLabels() {
        String sql = "SELECT * from label";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Label.class));
    }

    public List<Label> findRelatedLabels(Long issueId) {
        String sql = "select * from label L\n" +
                "join issue_label X \n" +
                "where X.issue_id = ? AND X.label_id = L.label_id";
        return jdbcTemplate.query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(Label.class));
    }

    public List<Label> findRelatedLabels2(Long issueId) {
        String sql = "SELECT * from label l JOIN issue_label i where l.label_id = i.label_id AND i.issue_id = :issue_id";
        SqlParameterSource namedParameters = new MapSqlParameterSource("issue_id", issueId);
        return namedParameterJdbcTemplate.queryForList(sql, namedParameters, Label.class);
    }

}

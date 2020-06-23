package com.group10.issuemaker.User;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class UserDao {

    private JdbcTemplate jdbcTemplate;
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public UserDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<User> findUserByIssueId(Long issueId) {
        String sql = "select u.user_id, u.name, u.url from user u join issue_assignee a where u.user_id = a.assignee_id AND a.issue_id = ? ";

        return jdbcTemplate.query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(User.class));
    }
}

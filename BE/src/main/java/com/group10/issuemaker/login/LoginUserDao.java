package com.group10.issuemaker.login;

import com.group10.issuemaker.User.User;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public class LoginUserDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public LoginUserDao(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public void save(GithubUser user) {
        String sql = "INSERT INTO user (name, url) VALUES (:name, :url)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("name", user.getLogin())
                .addValue("url", user.getAvatarUrl());

        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }

    public Optional<UserResponse> findByUsername(String username) {
        String sql = "SELECT user_id, name, url FROM user WHERE name = ?";

        try {
            UserResponse userResponse = namedParameterJdbcTemplate.getJdbcTemplate().queryForObject(sql, new Object[]{username}, BeanPropertyRowMapper.newInstance(UserResponse.class));
            return Optional.of(userResponse);
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }
}

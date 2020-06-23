package com.group10.issuemaker.label;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.stream.Collectors;

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
        String sql = "select * from label L join issue_label X where X.issue_id = ? AND X.label_id = L.label_id";
        return jdbcTemplate.query(sql, new Object[]{issueId}, BeanPropertyRowMapper.newInstance(Label.class));
    }

    public List<Label> getLabelsWithUsedLabels(Long issueId) {
        List<Label> labels = findLabels();
        List<Label> usedLabels = findRelatedLabels(issueId);
        List<Long> idList = usedLabels.stream().map(Label::getLabel_id).collect(Collectors.toList());

        for (Label l : labels) {
            if (idList.contains(l.getLabel_id())) {
                l.setBChecked(true);
            }
        }
        return labels;
    }

    public void createLabel(String textColor, String backColor, String description, String name) {
        String sql = "INSERT INTO LABEL (TEXTCOLOR, BACKGROUNDCOLOR, DESCRIPTION, LABELNAME) VALUES ( :textColor, :backColor, :description, :name)";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("textColor", textColor)
                .addValue("backColor", backColor)
                .addValue("description", description)
                .addValue("name", name);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }

    public void deleteLabel(Long labelId) {
        String sql1 = "DELETE FROM ISSUE_LABEL WHERE LABEL_ID = ?";
        String sql2 = "DELETE FROM LABEL WHERE LABEL_ID = ?";
        jdbcTemplate.update(sql1, labelId);
        jdbcTemplate.update(sql2, labelId);
    }

    public void editLabel(Long labelId, String labelName, String description, String textColor, String backGroundColor) {
        String sql = "update label SET LABELNAME = :labelName, DESCRIPTION = :description, TEXTCOLOR = :textColor, BACKGROUNDCOLOR = :backGroundColor where label_id = :id";
        SqlParameterSource sqlParameterSource = new MapSqlParameterSource("labelName", labelName)
                .addValue("description", description)
                .addValue("textColor", textColor)
                .addValue("backGroundColor", backGroundColor)
                .addValue("id", labelId);
        namedParameterJdbcTemplate.update(sql, sqlParameterSource);
    }
}

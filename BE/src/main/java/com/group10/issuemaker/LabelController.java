package com.group10.issuemaker;

import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;

@RestController
public class LabelController {

    private final LabelDAO labelDAO;

    public LabelController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
    }

    public Label makeNewLabel() {
        Label label = new Label();
        labelDAO.createLabel();
        return label;
    }
}

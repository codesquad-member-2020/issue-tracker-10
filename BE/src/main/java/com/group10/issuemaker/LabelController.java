package com.group10.issuemaker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.util.List;

@RestController
public class LabelController {

    private final LabelDAO labelDAO;

    public LabelController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
    }

    @GetMapping("/labels/create")
    public List<Label> makeNewLabel() {
        labelDAO.createLabel("black", "blue", "jeju-coding", "will be awesome");
        return labelDAO.findLabels();
    }
}

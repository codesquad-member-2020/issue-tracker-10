package com.group10.issuemaker;

import org.springframework.web.bind.annotation.*;
import javax.sql.DataSource;
import java.util.List;

@RestController
public class LabelController {

    private final LabelDAO labelDAO;

    public LabelController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
    }

//    @PostMapping(value = "/labels/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping(value = "/labels/create")
    public List<Label> makeNewLabel(@RequestBody Label label) {
        labelDAO.createLabel(label.getTextColor(), label.getBackgroundColor(), label.getDescription(), label.getLabelName());
        return labelDAO.findLabels();
    }

    @DeleteMapping("/labels/{labelId}/delete")
    public List<Label> deleteLabel(@PathVariable Long labelId) {
        labelDAO.deleteLabel(labelId);
        return labelDAO.findLabels();
    }

    @PostMapping("/labels/{labelId}/edit")
    public List<Label> editLabel(@RequestBody Label label, @PathVariable Long labelId) {
        labelDAO.editLabel(labelId,label.getLabelName(), label.getDescription(), label.getTextColor());
        return labelDAO.findLabels();
    }
}

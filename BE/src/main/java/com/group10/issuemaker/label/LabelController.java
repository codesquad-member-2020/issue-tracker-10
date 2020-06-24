package com.group10.issuemaker.label;

import com.group10.issuemaker.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import javax.sql.DataSource;
import java.util.List;

@RestController
public class LabelController {

    private final LabelDAO labelDAO;

    public LabelController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
    }

    @GetMapping("/labels")
    public ResponseMessage<List<Label>> findAllLabels() {
        return new ResponseMessage<>(HttpStatus.OK, "Requested Successfully", labelDAO.findLabels());
    }

    @PostMapping("/labels")
    public ResponseMessage<Label> makeNewLabel(@RequestBody Label label) {
        Long id = labelDAO.createLabel(label.getTextColor(), label.getBackGroundColor(), label.getDescription(), label.getLabelName());
        return new ResponseMessage<>(HttpStatus.OK, "Label has been added", labelDAO.findLabelWithId(id));
    }

    @DeleteMapping("/labels/{labelId}")
    public ResponseMessage deleteLabel(@PathVariable Long labelId) {
        labelDAO.deleteLabel(labelId);
        return new ResponseMessage(HttpStatus.OK, "label has been deleted");
    }

    @PutMapping("/labels/{labelId}")
    public ResponseMessage<Label> editLabel(@RequestBody Label label, @PathVariable Long labelId) {
        Long id = labelDAO.editLabel(labelId, label.getLabelName(), label.getDescription(), label.getTextColor(), label.getBackGroundColor());
        return new ResponseMessage(HttpStatus.OK, "label has been edited", labelDAO.findLabelWithId(id));
    }
}

package com.group10.issuemaker;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@RestController
public class LabelController {

    private final LabelDAO labelDAO;

    public LabelController(DataSource dataSource) {
        this.labelDAO = new LabelDAO(dataSource);
    }

//    @PostMapping(value = "/labels/create", consumes = MediaType.APPLICATION_JSON_VALUE)
@PostMapping(value = "/labels/create")
public List<Label> makeNewLabel(@RequestBody Map<String, String> label) {


        labelDAO.createLabel(label.get("textColor"), label.get("backgroundColor"), label.get("description"), label.get("labelName"));
//        labelDAO.createLabel("black", "blue", "jeju-coding", "will be awesome");
        return labelDAO.findLabels();
    }

    @GetMapping("/labels/{labelId}/delete")
    public List<Label> deleteLabel(@PathVariable Long labelId) {
        labelDAO.deleteLabel(labelId);
        return labelDAO.findLabels();
    }
}

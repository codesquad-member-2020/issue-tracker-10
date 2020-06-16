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

    @GetMapping("labels/{labelId}")
    public List<Label> test3(@PathVariable Long labelId) {
        return labelDAO.findLabels();
    }

    @GetMapping("/labels")
    public List<Label> test4() {
        return labelDAO.findLabels();
    }


    //    @PostMapping(value = "/labels/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping(value = "/labels/create")
    public List<Label> makeNewLabel(@RequestBody Label label) {
        labelDAO.createLabel(label.getTextColor(), label.getBackGroundColor(), label.getDescription(), label.getLabelName());
        return labelDAO.findLabels();
    }

    ///레이블 삭제하면 기존에 만들어놓은 이슈에 사용된 레이블도 다 삭제해주어야함
    @DeleteMapping("/labels/{labelId}/delete")
    public List<Label> deleteLabel(@PathVariable Long labelId) {
        labelDAO.deleteLabel(labelId);
        return labelDAO.findLabels();
    }

    ///모든 항목을 변경하지 않고 몇 가지 항목만 변경할 때는 리퀘스트 바디 어떻게 받음?
    @PostMapping("/labels/{labelId}/edit")
    public List<Label> editLabel(@RequestBody Label label, @PathVariable Long labelId) {
        labelDAO.editLabel(labelId, label.getLabelName(), label.getDescription(), label.getTextColor(), label.getBackGroundColor());
        return labelDAO.findLabels();
    }
}

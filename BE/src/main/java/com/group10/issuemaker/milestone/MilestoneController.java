package com.group10.issuemaker.milestone;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @PostMapping("/milestones")
    public ResponseEntity<String> createMilestone(@RequestBody MilestoneRequest milestoneRequest) {

        milestoneService.save(milestoneRequest);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @GetMapping("/milestones")
    public ResponseEntity<List<MilestoneResponse>> getMilestone() {
        List<MilestoneResponse> res = milestoneService.findAll();
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}

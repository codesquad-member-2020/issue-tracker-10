package com.group10.issuemaker.milestone;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @PostMapping("/milestones")
    public ResponseEntity<String> createMilestone(@RequestBody MilestoneRequest milestoneRequest) {

        milestoneService.save(milestoneRequest);
        return new ResponseEntity<>("OK",  HttpStatus.OK);
    }
}

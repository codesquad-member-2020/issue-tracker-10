package com.group10.issuemaker.milestone;

import com.group10.issuemaker.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @PostMapping("/milestones")
    public ResponseMessage<MilestoneResponse> createMilestone(@RequestBody MilestoneRequest milestoneRequest) {
        Long id = milestoneService.save(milestoneRequest);
        return new ResponseMessage(HttpStatus.OK, "Milestone has been created", milestoneService.findMilestoneById(id));
    }

    @GetMapping("/milestones")
    public ResponseMessage<List<MilestoneResponse>> getMilestone() {
        List<MilestoneResponse> response = milestoneService.findAll();
        return new ResponseMessage<>(HttpStatus.OK, "Requested Successfully", response);
    }

    @DeleteMapping("/milestones/{milestoneId}")
    public ResponseMessage deleteMilestone(@PathVariable Long milestoneId) {
        milestoneService.deleteMilestone(milestoneId);
        return new ResponseMessage(HttpStatus.OK, "Deleted Successfully");
    }

    @PutMapping("/milestones/{milestoneId}")
    public ResponseMessage<MilestoneResponse> updateMilestone(@PathVariable Long milestoneId , @RequestBody MilestoneRequest milestoneRequest)  {
        milestoneService.updateMilestone(milestoneId,  milestoneRequest);

        return new ResponseMessage<>(HttpStatus.OK, "Milestone has been edited",milestoneService.findMilestoneById(milestoneId));
    }
}

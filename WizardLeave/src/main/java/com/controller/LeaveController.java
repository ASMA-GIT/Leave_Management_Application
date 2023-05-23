package com.controller;

import com.model.Leave;
import com.services.LeaveService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5500/")
@RequestMapping(value = "/leave")
public class LeaveController {

    @Autowired
    LeaveService leaveService;
    public static final Logger logger = LoggerFactory.getLogger(LeaveController.class);
    @GetMapping
    public List<Leave> getLeave(){
        logger.info("Student Leave");
        return leaveService.getLeave();
    }
    @PostMapping
    public Leave createLeave(@RequestBody Leave leave){
        logger.info("createLeave is invoked {}",leave);
        return leaveService.create(leave);
    }
    @GetMapping("/{id}")
    public Leave getleaveById(@PathVariable ("id") int id) {
        logger.info("getleaveById is invoked with Leave Id {}", id);
        return leaveService.getLeaveById(id);
    }

    @PutMapping("/update")
    public Leave updateLeave(@RequestBody Leave leave){
        return leaveService.updateLeave(leave);
    }

    @DeleteMapping("/{id}")
    public Leave deleteLeaveById(@PathVariable ("id") int id) {
        return leaveService.deleteLeaveById(id);
    }
}

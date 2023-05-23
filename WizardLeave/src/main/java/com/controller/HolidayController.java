package com.controller;

import com.model.Holiday;
import com.services.HolidayService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5500/")
@RequestMapping(value = "/holiday")
public class HolidayController {

    @Autowired
    HolidayService holidayService;
    public static final Logger logger = LoggerFactory.getLogger(HolidayController.class);
    @GetMapping
    public List<Holiday> getHoliday(){
        logger.info("Student Holiday");
        return holidayService.getHoliday();
    }
}


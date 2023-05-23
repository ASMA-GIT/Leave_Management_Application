package com.controller;

import com.model.Admin;
import com.services.AdminService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5500/")
@RequestMapping(value = "/admin")
public class AdminController {

    @Autowired
    AdminService adminService;
    public static final Logger logger = LoggerFactory.getLogger(AdminController.class);
    @GetMapping
    public List<Admin> getAdmin(){
        logger.info("Student Admin");
        return adminService.getAdmin();
    }
}


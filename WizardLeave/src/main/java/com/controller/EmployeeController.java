package com.controller;

import com.model.Employee;
import com.services.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5500/")
@RequestMapping(value = "/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;
    public static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);
    @GetMapping
    public List<Employee> getEmployee(){
        logger.info("Student Employee");
        return employeeService.getEmployee();
    }
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        logger.info("createEmployee is invoked {}",employee);
        return employeeService.create(employee);
    }
    @GetMapping("/{id}")
    public Employee getemployeeById(@PathVariable ("id") int id) {
        logger.info("getemployeeById is invoked with Employee Id {}", id);
        return employeeService.getEmployeeById(id);
    }

    @PutMapping("/update")
    public Employee updateEmployee(@RequestBody Employee employee){
        return employeeService.updateEmployee(employee);
    }

    @PutMapping ("/{id}")
    public Employee updateEmployeeById(@PathVariable ("id") int id){
        return employeeService.updateEmployeeById(id);
    }

    @DeleteMapping("/{id}")
    public Employee deleteEmployeeById(@PathVariable ("id") int id) {
        return employeeService.deleteEmployeeById(id);
    }
}


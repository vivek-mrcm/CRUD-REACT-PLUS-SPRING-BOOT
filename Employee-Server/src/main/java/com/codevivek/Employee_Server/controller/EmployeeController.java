package com.codevivek.Employee_Server.controller;

import com.codevivek.Employee_Server.entity.Employee;
import com.codevivek.Employee_Server.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {
    private final EmployeeService employeeService;
    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee)
    {
        return employeeService.postEmployee(employee);
    }
    @GetMapping("/employee")
    public List<Employee> getAllEmployee()
    {
        return employeeService.getAllEmployee();
    }
}

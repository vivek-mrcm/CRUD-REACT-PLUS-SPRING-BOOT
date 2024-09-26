package com.codevivek.Employee_Server.controller;

import com.codevivek.Employee_Server.entity.Employee;
import com.codevivek.Employee_Server.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;
    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee)
    {
        return employeeService.postEmployee(employee);
    }
}

package com.codevivek.Employee_Server.service;

import com.codevivek.Employee_Server.entity.Employee;
import com.codevivek.Employee_Server.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    public Employee postEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }
    public List<Employee> getAllEmployee()
    {
        return employeeRepository.findAll();
    }
}

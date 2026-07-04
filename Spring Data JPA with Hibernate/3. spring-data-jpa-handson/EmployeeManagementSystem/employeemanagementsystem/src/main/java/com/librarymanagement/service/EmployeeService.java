package com.librarymanagement.service;
import com.librarymanagement.model.Employee;
import com.librarymanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Component
public class EmployeeService {

    private static EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        EmployeeService.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllPermanentEmployees() {
        return employeeRepository.getAllPermanentEmployees();
    }
}
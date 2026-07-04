package com.librarymanagement;

import com.librarymanagement.model.Employee;
import com.librarymanagement.service.EmployeeService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

public class Main {
    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(Main.class);
    private static EmployeeService employeeService;

    public Main(EmployeeService employeeService) {
        Main.employeeService = employeeService;
    }

    private static void testGetAllPermanentEmployees() {
        LOGGER.info("Start......");

        List<Employee> employees = employeeService.getAllPermanentEmployees();
        LOGGER.debug("Permanent Employees: {}", employees);

        employees.forEach(e -> {
            LOGGER.debug("Employee: {}", e.getName());
            LOGGER.debug("Department: {}", e.getDepartment().getName());
            LOGGER.debug("Skills: {}", e.getSkillList());
        });

        LOGGER.info("End.......");
    }
    public static void main(String[] args) {
        SpringApplication.run(AppConfig.class, args);

        testGetAllPermanentEmployees();
    }
}

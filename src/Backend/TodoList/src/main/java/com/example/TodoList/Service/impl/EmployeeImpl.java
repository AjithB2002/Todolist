package com.example.TodoList.Service.impl;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.TodoList.DTO.EmployeeDTO;
import com.example.TodoList.DTO.LoginDTO;
import com.example.TodoList.Entity.Employee;
import com.example.TodoList.Repo.EmployeeRepo;
import com.example.TodoList.Service.EmployeeService;
import com.example.TodoList.exception.EmailAlreadyExistsException;
import com.example.TodoList.response.LoginResponse;

@Service
public class EmployeeImpl implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
public String addEmployee(EmployeeDTO employeeDTO) {
    if (employeeRepo.findByEmail(employeeDTO.getEmail()) != null) {
        throw new EmailAlreadyExistsException("This email is already registered. Please use a different email.");
    }

    Employee employee = new Employee(
            employeeDTO.get_id(),
            employeeDTO.getUserName(),
            employeeDTO.getEmail(),
            this.passwordEncoder.encode(employeeDTO.getPassword())
    );
    employeeRepo.save(employee);
    return employee.getUserName();
}

    
    EmployeeDTO employeeDTO;
    @Override
    public LoginResponse  loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepo.findByEmail(loginDTO.getEmail());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
}
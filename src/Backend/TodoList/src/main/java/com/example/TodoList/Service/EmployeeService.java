package com.example.TodoList.Service;

import com.example.TodoList.DTO.EmployeeDTO;
import com.example.TodoList.DTO.LoginDTO;
import com.example.TodoList.response.LoginResponse;

public interface EmployeeService {
    
    String addEmployee(EmployeeDTO employeeDTO);
    LoginResponse loginEmployee(LoginDTO loginDTO);
}
package com.example.TodoList.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmployeeDTO {
 
    private String _id;

    @NotBlank(message = "Username cannot be empty")
    private String userName;
    @Email(message = "Email should be valid")
    @NotBlank(message = "Email cannot be empty")
    private String email;
    @NotBlank(message = "Password cannot be empty")
    private String password;
    
    public EmployeeDTO(String _id, String userName, String email, String password) {
        this._id = _id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public EmployeeDTO() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "EmployeeDTO [_id=" + _id + ", userName=" + userName + ", email=" + email + ", password=" + password
                + "]";
    }

    
}

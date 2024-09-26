package com.example.TodoList.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "Employee")
public class Employee {
    
     @Id
    private String _id;
    
    @JsonProperty("UserName")
    private String userName;

    @JsonProperty("Email")
    private String email;

    @JsonProperty("Password")
    private String password;

    public Employee(String _id, String userName, String email, String password) {
        this._id = _id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public Employee() {
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
        return "User [_id=" + _id + ", userName=" + userName + ", email=" + email + ", password=" + password + "]";
    }

   

}
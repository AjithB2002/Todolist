package com.example.TodoList.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection ="students")
public class Student {
    
    @Id
    private String _id;


    private String studentName;


    private String taskName;

    private String description;

    // @JsonProperty("Enddate")
    private String enddate;
    
    public Student() {
    }

    public Student(String _id, String studentName, String taskName, String description, String enddate) {
        this._id = _id;
        this.studentName = studentName;
        this.taskName = taskName;
        this.description = description;
        this.enddate = enddate;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    @Override
    public String toString() {
        return "Student [_id=" + _id + ", studentName=" + studentName + ", taskName=" + taskName + ", description=" + description + ", enddate=" + enddate + "]";
    }
}
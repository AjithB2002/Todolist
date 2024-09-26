package com.example.TodoList.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TodoList.Entity.Student;
import com.example.TodoList.Repo.StudentRepo;

@Service
public class StudentServices {


    @Autowired
    private StudentRepo repo;

    public void saveorUpdate(Student students) {
        System.out.println("Saving student: " + students); // Log what is being saved
        repo.save(students);
    }
    
    
    
    public Iterable<Student> listAll() {

        return this.repo.findAll();
    }


    public void deleteStudent(String id) {

        repo.deleteById(id);
    }

    public Student getStudentByID(String studentid) {

        return repo.findById(studentid).get();
    }
}

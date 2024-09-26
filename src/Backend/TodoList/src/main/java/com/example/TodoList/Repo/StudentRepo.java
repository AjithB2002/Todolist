package com.example.TodoList.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.TodoList.Entity.Student;

@Repository
public interface StudentRepo extends MongoRepository<Student,String>{
    
}

package com.example.TodoList.Repo;


import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.TodoList.Entity.Employee;

@Repository
public interface EmployeeRepo extends MongoRepository<Employee,String>
{
      Optional<Employee> findOneByEmailAndPassword(String email, String password);
    Employee findByEmail(String email);
}

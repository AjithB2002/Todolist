package com.example.TodoList.exception;

public class EmailAlreadyExistsException  extends RuntimeException{
    public EmailAlreadyExistsException(String message) {
        super(message);
    }
}

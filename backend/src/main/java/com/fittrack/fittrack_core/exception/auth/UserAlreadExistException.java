package com.fittrack.fittrack_core.exception.auth;

public class UserAlreadExistException extends RuntimeException {
    public UserAlreadExistException(String message) {
        super(message);
    }
}

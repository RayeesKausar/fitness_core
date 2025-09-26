package com.fittrack.fittrack_core.dtos.auth;

public class ErrorDTO {
    private boolean error;
    private String errorMessage;

    public ErrorDTO() {

    }

    public ErrorDTO(boolean error, String errorMessage) {
        this.error = error;
        this.errorMessage = errorMessage;
    }

    public boolean getError() {
        return this.error;
    }

    public void setError(boolean error) {
        this.error = error;
    }

    public String getErrorMessage() {
        return  this.errorMessage;
    }

    public void setErrorMessage(String message) {
        this.errorMessage = message;
    }
}

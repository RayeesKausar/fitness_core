package com.fittrack.fittrack_core.dtos.auth;

import org.springframework.stereotype.Component;

@Component
public class UserAuthResponseDTO {
    private String id;
    private boolean isVerified;
    private boolean error;
    private String errorMessage;

    public UserAuthResponseDTO() {

    }

    public UserAuthResponseDTO(String id, boolean status, boolean error, String errorMessage) {
        this.id = id;
        this.isVerified =  status;
        this.error = error;
        this.errorMessage = errorMessage;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setVerified(boolean verified) {
        this.isVerified = verified;
    }

    public void setError(boolean isError) {
        this.error = isError;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

}

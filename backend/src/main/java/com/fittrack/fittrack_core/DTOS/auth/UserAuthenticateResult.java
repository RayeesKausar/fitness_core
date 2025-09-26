package com.fittrack.fittrack_core.dtos.auth;

public class UserAuthenticateResult {
    private String userId;
    private String phoneNumber;
    private boolean isVerified;
    private int registrationScreen;
    private ErrorDTO errorObject;

    public UserAuthenticateResult(){

    }

    public UserAuthenticateResult(String id, String phone, boolean isVerified, int screen,ErrorDTO errorObject) {
        this.userId = id;
        this.phoneNumber = phone;
        this.isVerified = isVerified;
        this.registrationScreen = screen;
        this.errorObject = errorObject;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String id) {
        this.userId = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phone) {
        this.phoneNumber = phone;
    }

    public boolean isVerified() {
        return isVerified;
    }

    public void setVerified(boolean isVerified) {
        this.isVerified = isVerified;
    }

    public int getRegistrationScreen() {
        return this.registrationScreen;
    }

    public void setRegistrationScreen(int screen) {
        this.registrationScreen = screen;
    }

    public ErrorDTO getErrorObject() {
        return this.errorObject;
    }

    public void setErrorObject(ErrorDTO errorDto) {
        this.errorObject = errorDto;
    }
}

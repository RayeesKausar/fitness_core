package com.fittrack.fittrack_core.entity.auth;

public class UserAuthenticateInfo {
    private String userId;
    private String phoneNumber;
    private boolean isVerified;
    private int registrationScreen;

    public UserAuthenticateInfo(){

    }

    public UserAuthenticateInfo(String userId, String phone, boolean isVerified, int screen) {
        this.userId = userId;
        this.phoneNumber = phone;
        this.isVerified = isVerified;
        this.registrationScreen = screen;
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
}

package com.fittrack.fittrack_core.entity.auth;


public class UserAuth {
    private String uid;
    private String  phoneNumber;
    private boolean phoneVerified;
    private String authMedium;

    public UserAuth() {

    }

    public UserAuth(String uuid, String phoneNumber, boolean phoneVerified, String authMedium) {
        this.uid = uuid;
        this.phoneNumber = phoneNumber;
        this.phoneVerified = phoneVerified;
        this.authMedium = authMedium;
    }

    public String getUid() {
        return this.uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public  String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phone) {
        this.phoneNumber = phone;
    }

    public boolean isPhoneVerified() {
        return this.phoneVerified;
    }

    public void setPhoneVerified(boolean isVerified) {
        this.phoneVerified = isVerified;
    }

    public String getAuthMedium() {
        return this.authMedium;
    }

    public void setAuthMedium(String medium) {
        this.authMedium = medium;
    }
}

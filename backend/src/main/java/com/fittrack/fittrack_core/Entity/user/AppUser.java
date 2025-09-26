package com.fittrack.fittrack_core.entity.user;

import jakarta.persistence.*;
import org.checkerframework.common.aliasing.qual.Unique;

@Entity
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String firebaseUid;

    @Column(unique = true)
    private String phoneNo;

    private String name;
    private String roles;

    public void setFirebaseUid(String firebaseUid) {
        this.firebaseUid = firebaseUid;
    }

    public void setPhoneNo(String phone) {
        this.phoneNo = phone;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public Long getUserId() {
        return this.id;
    }

    public String getFirebaseUid() {
        return this.firebaseUid;
    }

    public String getPhoneNo() {
        return this.phoneNo;
    }

    public String getName() {
        return this.name;
    }

    public String getRoles() {
        return this.roles;
    }
}

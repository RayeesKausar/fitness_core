package com.fittrack.fittrack_core.repository.interfaces;

import com.fittrack.fittrack_core.entity.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByFirebaseUid(String fireBaseUid);
    Optional<AppUser> findByPhoneNo(String phoneNo);
}

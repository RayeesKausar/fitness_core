package com.fittrack.fittrack_core.repository.auth;

import com.fittrack.fittrack_core.entity.auth.UserAuth;
import com.fittrack.fittrack_core.entity.auth.UserAuthenticateInfo;
import com.fittrack.fittrack_core.exception.auth.UserAlreadExistException;
import com.fittrack.fittrack_core.exception.auth.UserDoesNotExistException;
import com.fittrack.fittrack_core.repository.interfaces.IUserAuth;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public class UserAuthRepository implements IUserAuth {
    @PersistenceContext
    EntityManager entityManager;

    public UserAuthRepository() {

    }

    @Autowired
    public UserAuthRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public String saveUser(UserAuth userAuth) {
        String sql = "Insert into users (id, phone_number, is_verified, created_at, updated_at, auth_medium)" +
                        "values(:uid, :phone, :verified, current_date, current_date, :auth_medium)" +
                        "returning id";
        Object row = (Object) entityManager.createNativeQuery(sql)
                .setParameter("uid", userAuth.getUid())
                .setParameter("phone", userAuth.getPhoneNumber())
                .setParameter("verified", userAuth.isPhoneVerified())
                .setParameter("auth_medium", userAuth.getAuthMedium())
                .getSingleResult();

        return  row.toString();
    }

    @Override
    @Transactional
    public String getUser(String phone) {
        String sql = "select id from users where phone_number like :phone";

        @SuppressWarnings("unchecked")
        List<Object> row = (List<Object>) entityManager.createNativeQuery(sql)
                .setParameter("phone", phone)
                .getResultList();

        if(row.isEmpty()) {
            return "";
        }
        return row.toString();
    }

    @Override
    @Transactional
    public UserAuthenticateInfo getUserLoginDetails(String phone) {
        String sql = "select id, phone_number, is_verified, onboarding_step from users where phone=:phone";
        Object[] row = (Object[]) entityManager.createNativeQuery(sql)
                .setParameter("phone", phone)
                .getSingleResult();
        if(row == null) {
            throw  new UserDoesNotExistException("User does not exist!!");
        }
        String id = row[0].toString();
        String phoneNumber = row[1].toString();
        boolean verified = (boolean) row[2];
        int onboardingStep = (int) row[3];
        return new UserAuthenticateInfo(id, phoneNumber, verified, onboardingStep);
    }
}

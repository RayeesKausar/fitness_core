package com.fittrack.fittrack_core.service.auth.firebase;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.stereotype.Service;

@Service
public class FirebaseAuthService {
    public FirebaseToken verifyIdToken(String token) throws FirebaseAuthException {
        boolean checkeRevoked = true;
        return FirebaseAuth.getInstance().verifyIdToken(token, checkeRevoked);
    }
}

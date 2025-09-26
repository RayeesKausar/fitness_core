package com.fittrack.fittrack_core.controller.auth;

import com.fittrack.fittrack_core.dtos.auth.ErrorDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthResponseDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthenticateResult;
import com.fittrack.fittrack_core.entity.user.AppUser;
import com.fittrack.fittrack_core.exception.auth.UserAlreadExistException;
import com.fittrack.fittrack_core.exception.auth.UserDoesNotExistException;
import com.fittrack.fittrack_core.repository.interfaces.AppUserRepository;
import com.fittrack.fittrack_core.service.auth.AuthService;
import com.fittrack.fittrack_core.service.auth.firebase.FirebaseAuthService;
import com.fittrack.fittrack_core.service.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path="/api/auth")
public class AuthController {

    private final AuthService authService;
    private final FirebaseAuthService firebaseAuthService;
    private final JwtUtil   jwtUtil;
    private final AppUserRepository userRepo;

    @Autowired
    public AuthController(AuthService authService,
                          FirebaseAuthService firebaseAuthService,
                          JwtUtil jwtUtil,
                          AppUserRepository userRepo) {
        this.authService = authService;
        this.firebaseAuthService = firebaseAuthService;
        this.jwtUtil = jwtUtil;
        this.userRepo = userRepo;
    }


    @PostMapping(path="/firebase")
    public ResponseEntity<?> firebaseSignIn(@RequestBody Map<String, String> body) {
        String idToken = body.get("idToken");
        if(idToken == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "id token required"));
        }

        try{
            var decodedToken = firebaseAuthService.verifyIdToken(idToken);
            String fireBaseUid = decodedToken.getUid();
            String phoneNo = (String) decodedToken.getClaims().get("phone_number");

            AppUser user = userRepo.findByFirebaseUid(fireBaseUid)
                    .orElseGet(()->{
                        AppUser newUser = new AppUser();
                        newUser.setFirebaseUid(fireBaseUid);
                        newUser.setPhoneNo(phoneNo);
                        newUser.setRoles("ROLE_USER");
                        return userRepo.save(newUser);
                    });

            String token = jwtUtil.generateToken(user.getUserId(), user.getRoles(), Map.of(
                    "firebaseUid", fireBaseUid,
                    "phone", phoneNo
            ));

            return ResponseEntity.ok(Map.of("token", token, "userId", user.getUserId()));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error","server_error", "detail", ex.getMessage()));
        }
    }


    @PostMapping(path = "/auth/verify")
    public ResponseEntity<UserAuthResponseDTO> verifyUser(@RequestBody UserAuthDTO userAuthDTO) {
        UserAuthResponseDTO response = new UserAuthResponseDTO();
        try {
            response = authService.verifyUser(userAuthDTO);
        } catch (UserAlreadExistException exception) {
            response.setError(true);
            response.setErrorMessage(exception.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/auth/authenticate/{phone}")
    public ResponseEntity<UserAuthenticateResult> authenticateUser(@PathVariable String phoneNumber) {
        UserAuthenticateResult result = new UserAuthenticateResult();
        try {
            result = authService.authenticateUser(phoneNumber);
            result.setErrorObject(new ErrorDTO(false, ""));
        } catch (UserDoesNotExistException exception) {
            result.setErrorObject(new ErrorDTO(true, exception.getMessage()));
            return ResponseEntity.status(HttpStatus.CONFLICT).body(result);
        }
        return ResponseEntity.ok().body(result);
    }
}

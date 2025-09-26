package com.fittrack.fittrack_core.service.auth;

import com.fittrack.fittrack_core.controller.auth.AuthController;
import com.fittrack.fittrack_core.dtos.auth.UserAuthDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthResponseDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthenticateResult;
import com.fittrack.fittrack_core.entity.auth.UserAuth;
import com.fittrack.fittrack_core.entity.auth.UserAuthenticateInfo;
import com.fittrack.fittrack_core.exception.auth.UserAlreadExistException;
import com.fittrack.fittrack_core.repository.auth.UserAuthRepository;
import com.fittrack.fittrack_core.service.interfaces.IUserAuthService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IUserAuthService {
    private final ModelMapper modelMapper;
    private final UserAuthRepository userAuthRepository;

    @Autowired
    public AuthService(ModelMapper modelMapper, UserAuthRepository userAuthRepository) {
        this.modelMapper = modelMapper;
        this.userAuthRepository = userAuthRepository;
    }

    @Override
    public UserAuthResponseDTO verifyUser(UserAuthDTO user) {
        UserAuth userEntity = this.modelMapper.map(user, UserAuth.class);
        UserAuthResponseDTO response = new UserAuthResponseDTO();
        String id = userAuthRepository.getUser(user.getPhoneNumber());
        if(id != null && !id.isEmpty()) {
            throw new UserAlreadExistException("user already exists");
        }
        String uid = userAuthRepository.saveUser(userEntity);
        response.setError(false);
        response.setId(uid);
        response.setVerified(true);
        return response;
    }

    @Override
    public UserAuthenticateResult authenticateUser(String phoneNumber) {
        UserAuthenticateResult result = new UserAuthenticateResult();
        UserAuthenticateInfo userStatus = userAuthRepository.getUserLoginDetails(phoneNumber);
        return this.modelMapper.map(userStatus, UserAuthenticateResult.class    );
    }
}

package com.fittrack.fittrack_core.service.interfaces;

import com.fittrack.fittrack_core.dtos.auth.UserAuthDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthResponseDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthenticateResult;
import com.fittrack.fittrack_core.entity.auth.UserAuth;

public interface IUserAuthService {
    public UserAuthResponseDTO verifyUser(UserAuthDTO userAuthDTO);
    public UserAuthenticateResult authenticateUser(String phoneNumber);
}

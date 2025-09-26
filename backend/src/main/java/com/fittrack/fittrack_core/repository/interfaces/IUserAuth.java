package com.fittrack.fittrack_core.repository.interfaces;

import com.fittrack.fittrack_core.dtos.auth.UserAuthenticateResult;
import com.fittrack.fittrack_core.entity.auth.UserAuth;
import com.fittrack.fittrack_core.entity.auth.UserAuthenticateInfo;

public interface IUserAuth {
    public String saveUser(UserAuth userAuth);
    public String getUser(String phone);
    public UserAuthenticateInfo getUserLoginDetails(String phone);
}

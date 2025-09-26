package com.fittrack.fittrack_core.config;

import com.fittrack.fittrack_core.dtos.auth.UserAuthDTO;
import com.fittrack.fittrack_core.dtos.auth.UserAuthenticateResult;
import com.fittrack.fittrack_core.entity.auth.UserAuth;
import com.fittrack.fittrack_core.entity.auth.UserAuthenticateInfo;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
     public ModelMapper modelMapper() {
         ModelMapper mapper = new ModelMapper();
         mapper.typeMap(UserAuthDTO.class, UserAuth.class);
         mapper.typeMap(UserAuthenticateInfo.class, UserAuthenticateResult.class);
         return mapper;
     }
}

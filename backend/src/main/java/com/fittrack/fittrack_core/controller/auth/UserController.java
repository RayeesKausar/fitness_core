package com.fittrack.fittrack_core.controller.auth;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping(path = "/get/user/{userId}")
    public String getUser(@PathVariable("userId") String userId) {
        return "UserId: " + userId;
    }

}

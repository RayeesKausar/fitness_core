package com.fittrack.fittrack_core.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("api/home")
    public String home() {
        return "Welcome to home screen";
    }
}

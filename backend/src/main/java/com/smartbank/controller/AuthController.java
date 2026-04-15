package com.smartbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartbank.model.User;
import com.smartbank.service.userservice;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private userservice userservice;

    // ✅ REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userservice.register(user);
    }

    // ✅ LOGIN
    @PostMapping("/login")
public User login(@RequestBody User user) {
    return userservice.login(user.getEmail(), user.getPassword());
}
}
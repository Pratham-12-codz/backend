package com.smartbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartbank.model.User;
import com.smartbank.service.userservice;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private userservice userservice;

    // ✅ GET USER PROFILE
    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        return userservice.getUserById(id);
    }
}
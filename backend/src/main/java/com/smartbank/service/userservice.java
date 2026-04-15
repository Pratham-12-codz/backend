package com.smartbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartbank.model.User;
import com.smartbank.model.Account;
import com.smartbank.repository.UserRepository;
import com.smartbank.repository.accountrepository;

@Service
public class userservice {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private accountrepository accountrepository;

    public User getUserById(int id) {
    return userRepository.findById(id).orElse(null);
    }

    // REGISTER + CREATE ACCOUNT
    public User register(User user) {

        User savedUser = userRepository.save(user);

        Account acc = new Account();
        acc.setUserId(savedUser.getId());
        acc.setBalance(1000);
        acc.setAccountType("SAVINGS");

        accountrepository.save(acc);

        return savedUser;
    }

    // LOGIN
    public User login(String email, String password) {
    User user = userRepository.findByEmail(email);

    if (user != null && user.getPassword().equals(password)) {
        return user; // ✅ RETURN FULL USER
    }

    return null;
}
}
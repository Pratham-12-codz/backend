package com.smartbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smartbank.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    // 🔥 ADD THIS METHOD
    User findByEmail(String email);
}
package com.smartbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smartbank.model.Account;

public interface accountrepository extends JpaRepository<Account, Integer> {

    // 🔥 get account by userId
    Account findByUserId(int userId);
}
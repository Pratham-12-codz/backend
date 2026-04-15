package com.smartbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartbank.model.Account;
import com.smartbank.repository.accountrepository;

@Service
public class AccountService {

    @Autowired
    private accountrepository accountrepository;

    // ✅ CREATE ACCOUNT
    public Account createAccount(Account account) {
        return accountrepository.save(account);
    }

    // ✅ GET ACCOUNT BY USER ID
    public Account getAccount(int userId) {
        return accountrepository.findByUserId(userId);
    }

    // 💰 DEPOSIT MONEY
    public String deposit(int accountId, double amount) {

        Account acc = accountrepository.findById(accountId).orElse(null);

        if (acc == null) {
            return "Account not found";
        }

        if (amount <= 0) {
            return "Invalid amount";
        }

        acc.setBalance(acc.getBalance() + amount);
        accountrepository.save(acc);

        return "Amount Deposited Successfully";
    }

    // 💸 WITHDRAW MONEY
    public String withdraw(int accountId, double amount) {

        Account acc = accountrepository.findById(accountId).orElse(null);

        if (acc == null) {
            return "Account not found";
        }

        if (amount <= 0) {
            return "Invalid amount";
        }

        if (acc.getBalance() < amount) {
            return "Insufficient balance";
        }

        acc.setBalance(acc.getBalance() - amount);
        accountrepository.save(acc);

        return "Amount Withdrawn Successfully";
    }
}
package com.smartbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartbank.model.Account;
import com.smartbank.service.AccountService;

@RestController
@RequestMapping("/api/account")
@CrossOrigin("*")
public class AccountController {

    @Autowired
    private AccountService accountService;

    // ✅ CREATE ACCOUNT (optional)
    @PostMapping("/create")
    public Account create(@RequestBody Account account) {
        return accountService.createAccount(account);
    }
    @PostMapping("/deposit")
public String deposit(
        @RequestParam int accountId,
        @RequestParam double amount) {

    return accountService.deposit(accountId, amount);
}

@PostMapping("/withdraw")
public String withdraw(
        @RequestParam int accountId,
        @RequestParam double amount) {

    return accountService.withdraw(accountId, amount);
}

    // ✅ GET ACCOUNT BY USER ID (IMPORTANT FOR DASHBOARD)
    @GetMapping("/user/{userId}")
    public Account getByUser(@PathVariable int userId) {
        return accountService.getAccount(userId);
    }

    // ✅ GET BALANCE (OPTIONAL)
    @GetMapping("/balance/{userId}")
    public Account getBalance(@PathVariable int userId) {
        return accountService.getAccount(userId);
    }
}
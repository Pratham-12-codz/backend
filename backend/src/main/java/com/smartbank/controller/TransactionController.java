package com.smartbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartbank.service.TransactionService;
import com.smartbank.model.Transaction;

import java.util.List;

@RestController
@RequestMapping("/api/transaction")
@CrossOrigin("*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    // Transfer API
    @PostMapping("/transfer")
    public String transfer(
            @RequestParam int fromId,
            @RequestParam int toId,
            @RequestParam double amount) {

        return transactionService.transfer(fromId, toId, amount);
    }

    // 🔥 ADD THIS (History API)
    @GetMapping("/history/{accountId}")
    public List<Transaction> history(@PathVariable int accountId) {
        return transactionService.getHistory(accountId);
    }
}
package com.smartbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartbank.model.Account;
import com.smartbank.model.Transaction;
import com.smartbank.repository.accountrepository;
import com.smartbank.repository.TransactionRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private accountrepository accountrepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // 🔄 TRANSFER MONEY
    public String transfer(int fromId, int toId, double amount) {

        Account from = accountrepository.findById(fromId).orElse(null);
        Account to = accountrepository.findById(toId).orElse(null);

        // ❌ CHECK ACCOUNTS
        if (from == null || to == null) {
            return "Account not found";
        }

        // ❌ CHECK BALANCE
        if (from.getBalance() < amount) {
            return "Insufficient balance";
        }

        // 💰 UPDATE BALANCE
        from.setBalance(from.getBalance() - amount);
        to.setBalance(to.getBalance() + amount);

        accountrepository.save(from);
        accountrepository.save(to);

        // 🧾 SAVE TRANSACTION
        Transaction tx = new Transaction();
        tx.setFromAccount(fromId);
        tx.setToAccount(toId);
        tx.setAmount(amount);
        tx.setType("TRANSFER");
        tx.setDate(LocalDateTime.now());

        transactionRepository.save(tx);

        return "Transfer Successful";
    }

    // 📜 GET TRANSACTION HISTORY
    public List<Transaction> getHistory(int accountId) {
        return transactionRepository.findByFromAccountOrToAccount(accountId, accountId);
    }
}
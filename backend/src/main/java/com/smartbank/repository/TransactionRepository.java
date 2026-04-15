package com.smartbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.smartbank.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    // 🔥 get transactions by account
    List<Transaction> findByFromAccountOrToAccount(int from, int to);
}
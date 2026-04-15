package com.smartbank.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "transactions")
@Data
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transactionId;

    private int fromAccount;
    private int toAccount;
    private double amount;
    private LocalDateTime date;
    private String type;
    public void save(Transaction tx) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }
    public List<Transaction> findByFromAccountOrToAccount(int accountId, int accountId2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByFromAccountOrToAccount'");
    }
}
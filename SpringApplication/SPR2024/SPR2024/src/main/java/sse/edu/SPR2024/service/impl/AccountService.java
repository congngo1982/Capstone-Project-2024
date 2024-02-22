package sse.edu.SPR2024.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.repository.IAccountRepository;
import sse.edu.SPR2024.service.IAccountService;

public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Account GetAccountByEmail(String email) {
        Account account = accountRepository.getAccountByEmail(email).orElseThrow(() -> new RuntimeException("Cannot Get Account"));
        return account;
    }
}

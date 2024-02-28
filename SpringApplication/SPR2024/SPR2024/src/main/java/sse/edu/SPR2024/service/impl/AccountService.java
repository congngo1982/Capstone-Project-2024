package sse.edu.SPR2024.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.repository.IAccountRepository;
import sse.edu.SPR2024.service.IAccountService;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Account GetAccountByEmail(String email) {
        Account account = accountRepository.getAccountByEmail(email)
                .orElseThrow(() -> new RuntimeException("Cannot Get Account"));
        return account;
    }

    @Override
    public void CreateAccount(Account account) {
        accountRepository.save(account);
    }
}

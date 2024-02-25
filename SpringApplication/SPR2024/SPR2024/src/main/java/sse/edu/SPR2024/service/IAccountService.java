package sse.edu.SPR2024.service;

import org.springframework.stereotype.Service;
import sse.edu.SPR2024.entity.Account;
public interface IAccountService {
    public Account GetAccountByEmail(String email);
    public void CreateAccount(Account account);
}

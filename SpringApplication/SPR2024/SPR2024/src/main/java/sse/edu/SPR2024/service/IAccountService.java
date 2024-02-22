package sse.edu.SPR2024.service;

import org.springframework.stereotype.Service;
import sse.edu.SPR2024.entity.Account;
@Service
public interface IAccountService {
    public Account GetAccountByEmail(String email);
}

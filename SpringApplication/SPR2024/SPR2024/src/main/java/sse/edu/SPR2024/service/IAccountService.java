package sse.edu.SPR2024.service;

import org.springframework.stereotype.Service;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.entity.Account;

import java.util.List;

public interface IAccountService {
    public Account GetAccountByEmail(String email);
    public void CreateAccount(Account account);
    public String createManager(RegisterDTO registerDTO);
    public List<Account> viewAllCustomerAccount();
    public List<Account> viewAllCustomerAccountByEmailOrFullName();
    public List<Account> viewAllStaffAccount();


}

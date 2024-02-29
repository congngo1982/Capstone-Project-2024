package sse.edu.SPR2024.service;

import org.springframework.stereotype.Service;
import sse.edu.SPR2024.dto.AccountResponseDTO;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.entity.Account;

import java.util.List;

public interface IAccountService {
    public Account GetAccountByEmail(String email);
    public void CreateAccount(Account account);
    public String createManager(RegisterDTO registerDTO);
    public String createLearner(RegisterDTO registerDTO);
    public String createMentor(RegisterDTO registerDTO);
    public String createEmployee(RegisterDTO registerDTO);
    public String createModerator(RegisterDTO registerDTO);

    public List<AccountResponseDTO> viewAllCustomerAccounts();
    public List<AccountResponseDTO> viewAllCustomerAccountsByEmailOrFullName();
    public List<AccountResponseDTO> viewAllStaffAccounts();
    public List<AccountResponseDTO> viewAllAccounts();
}

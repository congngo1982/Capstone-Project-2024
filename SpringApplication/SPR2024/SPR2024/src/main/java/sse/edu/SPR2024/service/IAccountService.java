package sse.edu.SPR2024.service;

import org.springframework.stereotype.Service;
import sse.edu.SPR2024.dto.AccountResponseDTO;
import sse.edu.SPR2024.dto.ModeratorDTO;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.entity.Account;

import java.util.List;

public interface IAccountService {
    public Account GetAccountByEmail(String email);
    public void CreateAccount(Account account);
    public String createManager(RegisterDTO registerDTO);
    public String createEmployee(RegisterDTO registerDTO);
    public List<AccountResponseDTO> viewAllCustomerAccount();
    public List<AccountResponseDTO> viewAllCustomerAccountByEmailOrFullName();
    public List<AccountResponseDTO> viewAllStaffAccount();
    public String createModerator(ModeratorDTO moderatorDTO) ;
    public String activateAccount (String id);
    public String inactivateAccount (String id);

}

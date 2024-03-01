package sse.edu.SPR2024.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.dto.AccountResponseDTO;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.exception.CustomException;
import sse.edu.SPR2024.repository.IAccountRepository;
import sse.edu.SPR2024.service.IAccountService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AccountService implements IAccountService {

    @Autowired
    private IAccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ModelMapper modelMapper;

//    @Autowired
//    public AccountService(IAccountRepository accountRepository, PasswordEncoder passwordEncoder, IRoleRepository roleRepository, ModelMapper modelMapper) {
//        this.accountRepository = accountRepository;
//        this.passwordEncoder = passwordEncoder;
//        this.roleRepository=roleRepository;
//        this.modelMapper=modelMapper;
//    }

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


    // Son doing this
    @Override
    public String createManager(RegisterDTO registerDTO) {

        //check if manager exists
        if (accountRepository.existsByUserId(registerDTO.getUserId())) {
            throw new CustomException(HttpStatus.BAD_REQUEST, "UserId already exists!");
        }
        if (accountRepository.existsByEmail(registerDTO.getEmail())) {
            throw new CustomException(HttpStatus.BAD_REQUEST, "Email already exists!");
        }
       //create manager
        Account account= new Account();
        account= modelMapper.map(registerDTO, Account.class);
        account.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
        account.setRole(Role.ROLE_MANAGER);
        account.setStatus(true);
        //save to database
        accountRepository.save(account);
        //return message
        return "Manager register is successful!!";
    }

    @Override
    public List<AccountResponseDTO> viewAllActiveAccounts() {
        //get list account
        List<Account> accounts= accountRepository.findAllByStatus(true);
        //remove account admin
        Account accountAdmin= accountRepository.findByRole(Role.ROLE_ADMIN).get();
        accounts.remove(accountAdmin);
        //change to dto and return
        List<AccountResponseDTO> accountsDTOList= accounts.stream()
                .map(account -> modelMapper.map(account, AccountResponseDTO.class))
                .collect(Collectors.toList());
        return accountsDTOList;
    }

    @Override
    public List<AccountResponseDTO> viewAllInactiveAccounts() {
        //get list account
        List<Account> accounts= accountRepository.findAllByStatus(false);
        //remove account admin
        Account accountAdmin= accountRepository.findByRole(Role.ROLE_ADMIN).get();
        accounts.remove(accountAdmin);
        //change to dto and return
        List<AccountResponseDTO> accountsDTOList= accounts.stream()
                .map(account -> modelMapper.map(account, AccountResponseDTO.class))
                .collect(Collectors.toList());
        return accountsDTOList;
    }

    @Override
    public AccountResponseDTO activateAccount(String accountId) {
        //check if id exist
        Account checkAccount= accountRepository.findById(accountId)
                .orElseThrow(()-> new CustomException(HttpStatus.BAD_REQUEST,"This account id does not exist!"));
        //update status
        checkAccount.setStatus(true);
        //save to database
        accountRepository.save(checkAccount);
        // return account
        return modelMapper.map(checkAccount, AccountResponseDTO.class);
    }

    @Override
    public AccountResponseDTO deactivateAccount(String accountId) {
        Account checkAccount= accountRepository.findById(accountId)
                .orElseThrow(()-> new CustomException(HttpStatus.BAD_REQUEST,"This account id does not exist!"));
        //update status
        checkAccount.setStatus(false);
        //save to database
        accountRepository.save(checkAccount);
        // return account
        return modelMapper.map(checkAccount, AccountResponseDTO.class);
    }

    @Override
    public AccountResponseDTO viewAccountByEmail() {
        return null;
    }

    @Override
    public List<AccountResponseDTO> viewAllAccountsByRole() {
        return null;
    }

}

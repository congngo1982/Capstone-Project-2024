package sse.edu.SPR2024.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.exception.CustomException;
import sse.edu.SPR2024.repository.IAccountRepository;
import sse.edu.SPR2024.repository.IRoleRepository;
import sse.edu.SPR2024.service.IAccountService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AccountService implements IAccountService {

    private IAccountRepository accountRepository;
    private PasswordEncoder passwordEncoder;
    private IRoleRepository roleRepository;
    private ModelMapper modelMapper;

    @Autowired
    public AccountService(IAccountRepository accountRepository, PasswordEncoder passwordEncoder, IRoleRepository roleRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository=roleRepository;
        this.modelMapper=modelMapper;
    }

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
        if(accountRepository.existsByUserId(registerDTO.getUserId())){
            throw  new CustomException(HttpStatus.BAD_REQUEST,"UserId already exists!");
        }
        if(accountRepository.existsByEmail(registerDTO.getEmail())){
            throw  new CustomException(HttpStatus.BAD_REQUEST,"Email already exists!");
        }
        //create manager
        Account account= new Account();
        account.setUserId(registerDTO.getUserId());
        account.setEmail(registerDTO.getEmail());
        account.setFullName(registerDTO.getFullName());
        account.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
        account.setAge(registerDTO.getAge());
        account.setAddress(registerDTO.getAddress());
        account.setBirthDate(registerDTO.getBirthDate());
        account.setGender(registerDTO.getGender());

        //create role for manager
        Set<Role> roles= new HashSet<>();
        Role role= roleRepository.findByName("ROLE_MANAGER")
                .orElseThrow(()->new CustomException(HttpStatus.BAD_REQUEST,"This role does not exists!"));
        roles.add(role);
        account.setRoles(roles);
        //save to database
        accountRepository.save(account);
        //
        return "Manager register is successful!!";
    }

    @Override
    public List<Account> viewAllCustomerAccount() {

        return null;
    }

    @Override
    public List<Account> viewAllCustomerAccountByEmailOrFullName() {
        return null;
    }

    @Override
    public List<Account> viewAllStaffAccount() {
        return null;
    }
}

package sse.edu.SPR2024.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.dto.AccountResponseDTO;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.entity.AccountRole;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.exception.CustomException;
import sse.edu.SPR2024.repository.IAccountRepository;
import sse.edu.SPR2024.repository.IAccountRoleRepository;
import sse.edu.SPR2024.repository.IRoleRepository;
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
    private IRoleRepository roleRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IAccountRoleRepository accountRoleRepository;

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
        Role role= roleRepository.findByName("ROLE_MANAGER")
                .orElseThrow(()->new CustomException(HttpStatus.BAD_REQUEST,"This role does not exists!"));
        //add role to account role
        AccountRole accountRole= new AccountRole();
        accountRole.setAccount(account);
        accountRole.setRole(role);

        //save to database
        //save account
        accountRepository.save(account);
        //save account role
        accountRoleRepository.save(accountRole);

        //return message
        return "Manager register is successful!!";
    }

    @Override
    public String createLearner(RegisterDTO registerDTO) {
        return null;
    }

    @Override
    public String createMentor(RegisterDTO registerDTO) {
        return null;
    }

    @Override
    public String createEmployee(RegisterDTO registerDTO) {
        return null;
    }

    @Override
    public String createModerator(RegisterDTO registerDTO) {
        return null;
    }

    @Override
    public List<AccountResponseDTO> viewAllCustomerAccounts() {
        //find all role to search
        Set<Role> roles= new HashSet<>();
        Role mentorRole= roleRepository.findByName("ROLE_LEARNER").get();
        Role learnerRole= roleRepository.findByName("ROLE_MENTOR").get();
        roles.add(mentorRole);
        roles.add(learnerRole);
        //find all by account role
        Set<AccountRole> accountRoles = accountRoleRepository.findAllByRoleIn(roles);
        //find account list
        List<Account> customerAccountList=accountRepository.findByRolesIn(accountRoles);
        //change to dto
        List<AccountResponseDTO> accountResponseDTOList=customerAccountList.stream()
                .map(account->mapToAccountResponseDto(account))
                .collect(Collectors.toList());
        //return list account dto
        return accountResponseDTOList;
    }

    @Override
    public List<AccountResponseDTO> viewAllCustomerAccountsByEmailOrFullName() {
        return null;
    }

    @Override
    public List<AccountResponseDTO> viewAllStaffAccounts() {

        return null;
    }

    @Override
    public List<AccountResponseDTO> viewAllAccounts() {
        return null;
    }

    private AccountResponseDTO mapToAccountResponseDto(Account account){
        AccountResponseDTO accountResponseDTO= new AccountResponseDTO();
        accountResponseDTO.setUserId(account.getUserId());
        accountResponseDTO.setAddress(account.getAddress());
        accountResponseDTO.setAge(account.getAge());
        accountResponseDTO.setBirthDate(account.getBirthDate());
        accountResponseDTO.setEmail(account.getEmail());
        accountResponseDTO.setFullName(account.getFullName());
        accountResponseDTO.setGender(account.getGender());
        // set role for account
        Set<Role> roles= new HashSet<>();
        //find all accountRole
        Set<AccountRole> accountRoles= accountRoleRepository.findAllByAccount(account);
        for (AccountRole accountRole:accountRoles) {
            Role role= roleRepository.findById(accountRole.getRole().getId()).get();
            roles.add(role);
        }
        accountResponseDTO.setRoles(roles);
        //return account
        return accountResponseDTO;
    }
    private String createNewAccount(RegisterDTO registerDTO, String roleSetting, String message){
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
        Role role= roleRepository.findByName(roleSetting)
                .orElseThrow(()->new CustomException(HttpStatus.BAD_REQUEST,"This role does not exists!"));
        //add role to account role
        AccountRole accountRole= new AccountRole();
        accountRole.setAccount(account);
        accountRole.setRole(role);

        //save to database
        //save account
        accountRepository.save(account);
        //save account role
        accountRoleRepository.save(accountRole);

        //return message
        return  message+"register is successful!!";
    }
}

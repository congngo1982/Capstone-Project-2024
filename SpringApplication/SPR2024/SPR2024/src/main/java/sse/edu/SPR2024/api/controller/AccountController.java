package sse.edu.SPR2024.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import sse.edu.SPR2024.dto.AccountResponseDTO;
import sse.edu.SPR2024.dto.AuthResponseDTO;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.security.Bcrypt;
import sse.edu.SPR2024.security.JWTGenerator;
import sse.edu.SPR2024.service.IAccountService;

import java.util.List;

@RestController
@RequestMapping("/")
public class AccountController {

    @Autowired
    private IAccountService accountService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTGenerator jwtGenerator;



    @PostMapping("/auth/account_create")
    public ResponseEntity<String> CreateAccount() {
        //Account account = new Account("ngonc", "ngonc@gmail.com", Bcrypt.hashPassword("ngonc"), "NgoNC", null, null, null, null, null);
        Account account = new Account();
        accountService.CreateAccount(account);
        return new ResponseEntity<>("Account Create Successfully", HttpStatus.OK);
    }

    @GetMapping("/auth/getAccount")
    public ResponseEntity<Account> GetAccount() {
        Account account = accountService.GetAccountByEmail("ngonc@gmail.com");
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestParam(name = "txtUsername") String userName, @RequestParam(name = "txtPassword") String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userName, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }

    @PostMapping("/accounts/customers")
    public ResponseEntity<List<AccountResponseDTO>> viewAllCustomerAccount(){
        List<AccountResponseDTO> list= accountService.viewAllCustomerAccount();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}

package sse.edu.SPR2024.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sse.edu.SPR2024.dto.AccountResponseDTO;
import sse.edu.SPR2024.dto.RegisterDTO;
import sse.edu.SPR2024.service.IAccountService;

import java.util.List;

@RestController
@RequestMapping("admin")
public class AdminController {
    @Autowired
    private IAccountService accountService;
    @PostMapping("/managers")
    public ResponseEntity<String> createManager(@RequestBody RegisterDTO registerDTO){
        String response= accountService.createManager(registerDTO);
        return new ResponseEntity<String>(response, HttpStatus.CREATED);
    }

    @GetMapping("/accounts/active")
    public ResponseEntity<List<AccountResponseDTO>> viewAllActiveAccounts(){
        return  new ResponseEntity<List<AccountResponseDTO>>(accountService.viewAllActiveAccounts(), HttpStatus.OK);
    }
    @GetMapping("/accounts/inactive")
    public ResponseEntity<List<AccountResponseDTO>> viewAllActiveInaccounts(){
        return  new ResponseEntity<List<AccountResponseDTO>>(accountService.viewAllInactiveAccounts(), HttpStatus.OK);
    }

    @PutMapping("/accounts/{id}/inactive")
    public ResponseEntity<AccountResponseDTO> deactivateAccount(@PathVariable("id") String accountId){
        return  new ResponseEntity<AccountResponseDTO>(accountService.deactivateAccount(accountId), HttpStatus.OK);
    }

    @PutMapping("/accounts/{id}/active")
    public ResponseEntity<AccountResponseDTO> activateAccount(@PathVariable("id") String accountId){
        return  new ResponseEntity<AccountResponseDTO>(accountService.activateAccount(accountId), HttpStatus.OK);
    }
}

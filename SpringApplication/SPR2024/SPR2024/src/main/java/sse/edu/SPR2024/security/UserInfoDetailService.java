package sse.edu.SPR2024.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.service.IAccountService;

@Component
public class UserInfoDetailService implements UserDetailsService {

    @Autowired
    private IAccountService iAccountService;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = iAccountService.GetAccountByEmail(email);
        UserDetails userDetails = User.builder().username(email)
                .password(account.getPassword())
                .roles(account.getRole().getName().substring(0))
                .build();
        System.out.println(account.getRole().getName());
        System.out.println(userDetails.getAuthorities());
        return userDetails;
    }
}

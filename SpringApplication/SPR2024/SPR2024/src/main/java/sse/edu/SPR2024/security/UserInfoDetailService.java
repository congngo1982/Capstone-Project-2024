package sse.edu.SPR2024.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.service.IRoleService;
import sse.edu.SPR2024.service.IAccountService;

import java.util.Collections;
import java.util.List;

@Component
public class UserInfoDetailService implements UserDetailsService {

    @Autowired
    private IAccountService iAccountService;
    @Autowired
    private IRoleService accountRoleService;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = iAccountService.GetAccountByEmail(email);
        List<Role> accountRoles = accountRoleService.getRoleByAccountEmail(email);
        List<Role> hasRoles = accountRoles != null && accountRoles.size() > 0 ? accountRoles : null;
        System.out.println("UserInfo: " + hasRoles == null);
        List<SimpleGrantedAuthority> roles = hasRoles == null ? Collections.emptyList() :
                hasRoles
                        .stream()
                        .map(roleRef -> new SimpleGrantedAuthority(roleRef.getName()))
                        .toList();

//        UserDetails userDetails = User.builder().username(email)
//                .password(account.getPassword())
//                .roles(roles);
//                .build();
        UserDetails userDetails = new User(email, account.getPassword(), roles);
        System.out.println(userDetails.getAuthorities());
        return userDetails;
    }
}

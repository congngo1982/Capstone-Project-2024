package sse.edu.SPR2024.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.service.IRoleService;
import sse.edu.SPR2024.service.IAccountService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private IAccountService accountService;
    @Autowired
    private IRoleService roleService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account user = accountService.GetAccountByEmail(username);
        System.out.println("Custom User: " + user.getEmail());
        List<Role> roles = roleService.getRoleByAccountEmail(user.getEmail());
        try{
            System.out.println("Custom User: OK" + roles.get(0).getName());
        }catch (Exception e){
            System.out.println("CC");
        }
        List<Role> role = roles != null && roles.size() > 0 ? roles : new ArrayList<>();
        return new User(user.getEmail(), user.getPassword(), mapRolesToAuthorities(role));
    }

    private Collection<GrantedAuthority> mapRolesToAuthorities(List<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
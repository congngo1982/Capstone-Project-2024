package sse.edu.SPR2024.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.entity.AccountRole;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.repository.IAccountRepository;
import sse.edu.SPR2024.repository.IAccountRoleRepository;
import sse.edu.SPR2024.repository.IRoleRepository;
import sse.edu.SPR2024.service.IRoleService;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleServiceImp implements IRoleService {
    @Autowired
    private IAccountRoleRepository accountRoleRepository;
    @Autowired
    private IRoleRepository roleRepository;
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public List<Role> getRoleByAccountEmail(String email) {

        List<AccountRole> accountRoles = accountRoleRepository.getByAccount_Email(email);
        List<Role> roles = new ArrayList<>();
        if (accountRoles != null && accountRoles.size() > 0) {
            int l = accountRoles.size();
            for(int i = 0; i< l; i++){
                Long roleID = accountRoles.get(i).getRole().getId();
                Role role = roleRepository.findById(roleID).orElseThrow();
                roles.add(role);
            }
        }
        return roles;
    }
}

package sse.edu.SPR2024.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sse.edu.SPR2024.entity.Role;
import sse.edu.SPR2024.repository.IAccountRoleRepository;
import sse.edu.SPR2024.service.IAccountRoleService;

import java.util.List;

@Service
public class AccountRoleServiceImp implements IAccountRoleService {
    @Autowired
    private IAccountRoleRepository accountRoleRepository;
    @Override
    public List<Role> getRoleByAccountEmail(String email) {
        return accountRoleRepository.getByAccount_Email(email);
    }
}

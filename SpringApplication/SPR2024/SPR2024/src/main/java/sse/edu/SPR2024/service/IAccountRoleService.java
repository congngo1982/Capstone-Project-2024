package sse.edu.SPR2024.service;

import sse.edu.SPR2024.entity.Role;

import java.util.List;

public interface IAccountRoleService {
    public List<Role> getRoleByAccountEmail(String email);
}

package sse.edu.SPR2024.service;

import sse.edu.SPR2024.entity.Role;

import java.util.List;

public interface IRoleService {
    public List<Role> getRoleByAccountEmail(String email);
}

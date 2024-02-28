package sse.edu.SPR2024.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sse.edu.SPR2024.entity.AccountRole;
import sse.edu.SPR2024.entity.Role;

import java.util.List;
import java.util.Optional;

@Repository
public interface IAccountRoleRepository extends JpaRepository<AccountRole, Long> {
    public List<Role> getByAccount_Email(String email);
}

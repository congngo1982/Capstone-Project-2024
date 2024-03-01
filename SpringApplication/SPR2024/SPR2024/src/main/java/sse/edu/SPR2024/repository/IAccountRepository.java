package sse.edu.SPR2024.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sse.edu.SPR2024.entity.Account;
import sse.edu.SPR2024.entity.Role;

import java.util.List;
import java.util.Optional;
@Repository
public interface IAccountRepository extends JpaRepository<Account, String> {
    Optional<Account> getAccountByEmail(String email);
    Optional<Account> findByRole(Role role);
    List<Account> findAllByStatus(boolean status);
    List<Account> findAllByStatusAndEmail(boolean status, String email);
    List<Account> findAllByStatusAndRole(boolean status, Role role);

    Boolean existsByUserId(String userId);
    Boolean existsByEmail(String email);

}

package sse.edu.SPR2024.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sse.edu.SPR2024.entity.Account;

import java.util.List;
import java.util.Optional;
@Repository
public interface IAccountRepository extends JpaRepository<Account, String> {
    Optional<Account> getAccountByEmail(String email);
    List<Account> findAllByFullNameOrEmail(String fullName, String email);
    Boolean existsByUserId(String userId);
    Boolean existsByEmail(String email);

}

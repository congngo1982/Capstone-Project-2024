package sse.edu.SPR2024.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import sse.edu.SPR2024.entity.AccountRole;
import sse.edu.SPR2024.entity.Role;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponseDTO {
    private String userId;
    private String email;
    private String fullName;
    private String address;
    private String gender;
    private Integer age;
    private Date birthDate;
    private Set<Role> roles;
}

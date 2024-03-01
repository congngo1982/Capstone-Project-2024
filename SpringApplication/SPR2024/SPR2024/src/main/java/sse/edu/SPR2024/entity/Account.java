package sse.edu.SPR2024.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "gcp_account")
public class Account {
    @Id
    private String userId;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String fullName;
    private String address;
    private String gender;
    private Integer age;
    private Date birthDate;
    private boolean status;
    private String currentLoginAddress;

    // set many to one to other table----------------------------------------

    @Enumerated(EnumType.STRING)
    @Column(name = "role", length = 20, nullable = false)
    private Role role;
    //learner
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private Learner learner;

    //moderator
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private Moderator moderator;

    //mentor
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    private Mentor mentor;

    public String GetRoleName(){
        return role.name();
    }

}
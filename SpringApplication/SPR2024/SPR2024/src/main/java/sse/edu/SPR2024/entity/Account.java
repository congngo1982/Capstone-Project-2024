package sse.edu.SPR2024.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Entity
@Getter@Setter
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
    private String currentLoginAddress;

    // set many to one to other table----------------------------------------

//    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    @JoinTable(name = "users_roles",
//            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "role_id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "userId")
//    )
    @OneToMany(mappedBy = "account")
    @JsonIgnore
    private Set<AccountRole> roles;

    //learner
    @OneToOne(mappedBy = "account",cascade = CascadeType.ALL)
    private Learner learner;

    //moderator
    @OneToOne(mappedBy = "account",cascade = CascadeType.ALL)
    private Moderator moderator;

    //mentor
    @OneToOne(mappedBy = "account",cascade = CascadeType.ALL)
    private Mentor mentor;

}

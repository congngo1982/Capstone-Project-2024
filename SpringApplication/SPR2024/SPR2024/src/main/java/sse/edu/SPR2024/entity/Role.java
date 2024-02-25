package sse.edu.SPR2024.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "gcp_role")
public class Role {
    @Id
    @Column(name = "role_id")
    private long Id;
    private String name;
    @OneToMany(mappedBy = "role")
    @JsonIgnore
    private List<Account> accounts;
}

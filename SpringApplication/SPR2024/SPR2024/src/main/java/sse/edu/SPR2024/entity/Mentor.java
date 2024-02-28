package sse.edu.SPR2024.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gcp_mentor")
public class Mentor {

    @Id
    private String id;
    private String imgUrl;

    //connect to other table
    //account
    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Account account;
    //organization
    @ManyToOne
    @JoinColumn(name = "organization_id", nullable = false)
    private Organization organization;
    //group
    @OneToMany(mappedBy = "mentor")
    private List<Group> groupList;

}

package sse.edu.SPR2024.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gcp_moderator")
public class Moderator {

    @Id
    private String id;

    private String imgUrl;

    //connect to other table
    //account
    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Account account;
    //organization
    @OneToOne(mappedBy = "moderator")
    private Organization organization;

}

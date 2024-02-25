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
@Table(name = "gcp_organization")
public class Organization {

    @Id
    private  String id;
    private String logoUrl;

    //connect to other
    //learner
    @OneToMany(mappedBy = "organization")
    private List<Learner> learnerList;
    //mentor
    @OneToMany(mappedBy = "organization")
    private List<Mentor> mentorList;
    //moderator
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "moderator_id", referencedColumnName = "id")
    private Moderator moderator;

}

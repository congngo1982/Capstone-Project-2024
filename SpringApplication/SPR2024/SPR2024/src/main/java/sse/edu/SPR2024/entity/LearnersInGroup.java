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
@Table(name = "gcp_learner_group")
public class LearnersInGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status;

    //connect to other table

    //learner
    @ManyToOne
    @JoinColumn(name = "learner_id",referencedColumnName = "id", nullable = false)
    private Learner learner;

    //group
    @ManyToOne
    @JoinColumn(name = "group_id", referencedColumnName = "id",nullable = false)
    private Group group;


}

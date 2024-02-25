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
@Table(name = "gcp_group")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String status;

    //connect to other table
    // learner in group
    @OneToMany(mappedBy = "group")
    private List<LearnersInGroup> learnersInGroupList;
    // mentor
    @ManyToOne
    @JoinColumn(name = "mentor_id",referencedColumnName = "id", nullable = false)
    private Mentor mentor;
    // group course
    @OneToMany(mappedBy = "group")
    private List<GroupCourse> groupCourseList;

}

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
@Table(name = "gcp_group_course")
public class GroupCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //connect to other table
    //group
    @ManyToOne
    @JoinColumn(name = "group_id",nullable = false)
    private Group group;
    // course cycle
    @ManyToOne
    @JoinColumn(name = "group_cycle_id", nullable = false)
    private CourseCycle courseCycle;


}

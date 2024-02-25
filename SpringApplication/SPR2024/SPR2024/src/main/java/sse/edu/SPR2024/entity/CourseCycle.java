package sse.edu.SPR2024.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gcp_group_cycle")
public class CourseCycle {

    @Id
    private Long id;
    private Date startDate;
    private Date endeDate;

    //connect to other table

    //group course
    @OneToMany(mappedBy = "courseCycle")
    private List<GroupCourse> groupCourseList;

    //course
    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}

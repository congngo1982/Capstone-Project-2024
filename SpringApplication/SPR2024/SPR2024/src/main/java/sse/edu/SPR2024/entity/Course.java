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
@Table(name = "gcp_course")
public class Course {

    @Id
    private String id;
    private String status;
    private String name;
    private Long duration;
    private String imgUrl;
    private String age;

    //connect to other table

    //course cycle
    @OneToMany(mappedBy = "course")
    private List<CourseCycle> courseCycleList;

    //course price
    @OneToMany(mappedBy = "course")
    private  List<CoursePrice> coursePriceList;

    //enrollment
    @OneToMany(mappedBy = "course")
    private List<Enrollment> enrollmentList;

    //project
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

}

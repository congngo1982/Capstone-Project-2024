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
@Table(name = "gcp_lesson")
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private String videoUrl;
    private String title;

    //connect to  other table
    // module
    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;
    // feedback course
    @OneToMany(mappedBy = "lesson")
    private List<FeedBackCourse> feedBackCourseList;

}

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
@Table(name = "gcp_module")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    //connect to other table

    //quizz
    //lesson
    @OneToMany(mappedBy = "module")
    private List<Lesson> lessonList;
    //mission
    @OneToMany(mappedBy = "module")
    private List<Misson> missonList;
    //document
    @OneToMany(mappedBy = "module")
    private List<Document>documentList;
    //feedback


}

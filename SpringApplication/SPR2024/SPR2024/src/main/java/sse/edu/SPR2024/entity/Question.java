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
@Table(name = "gcp_question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private String type;

    //connect to other table
    //quizz
    @ManyToOne
    @JoinColumn(name = "quizz_id", nullable = false)
    private Quizz quizz;
    //answer
    @OneToMany(mappedBy = "question")
    private List<Answer> answerList;
}

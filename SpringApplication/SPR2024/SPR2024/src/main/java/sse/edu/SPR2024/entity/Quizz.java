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
@Table(name = "gcp_quizz")
public class Quizz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean isPass;
    private String title;
    private Long duration;

    //connect to other table
    // attempt
    @OneToMany(mappedBy = "quizz")
    private List<Attempt> attemptList;
    //question
    @OneToMany(mappedBy = "quizz")
    private List<Question> questionList;

}

package sse.edu.SPR2024.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gcp_attempt")
public class Attempt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date startTime;
    private Date endTIme;
    private Long score;

    //connect to other table
    //Learner
    @ManyToOne
    @JoinColumn(name = "learner_id",nullable = false )
    private Learner learner;
    //quizz
    @ManyToOne
    @JoinColumn(name = "quizz_id", nullable = false)
    private Quizz quizz;
}

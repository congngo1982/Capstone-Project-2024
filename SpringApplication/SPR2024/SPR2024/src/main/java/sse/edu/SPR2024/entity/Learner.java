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
@Table(name = "gcp_learner")
public class Learner {

    @Id
    private String id;
    private int ranking;
    private long point;
    private String avatarUrl;

    // set to connect other table
    //account
    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Account account;

    //avatar achieve
    @OneToMany(mappedBy = "learner")
    private List<AvatarAchieve> avatarAchieveList;
    //learners in group\
    @OneToMany(mappedBy = "learner")
    private List<LearnersInGroup> learnersInGroupList;
    //organization
    @ManyToOne
    @JoinColumn(name = "organization_id", nullable = false)
    private Organization organization;
    // enrollment
    @OneToMany(mappedBy = "learner")
    private List<Enrollment> enrollmentList;
    //feedback
    @OneToMany(mappedBy = "learner")
    private List<FeedBackCourse> feedBackCourseList;
    //attempt
    @OneToMany(mappedBy = "learner")
    private List<Attempt> attemptList;


}

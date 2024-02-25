package sse.edu.SPR2024.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "gcp_project")
public class Project {

    @Id
    private String id;

    private String introVideoUrl;
    private String goal;
    private String ageRecomment;

    //connect to other table
    @OneToMany(mappedBy = "project")
    private List<Course> courseList;


}

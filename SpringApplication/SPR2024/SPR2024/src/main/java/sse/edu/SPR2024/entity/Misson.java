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
@Table(name = "gcp_misson")
public class Misson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    //connect to other table
    // MissionVertification
    @OneToMany(mappedBy = "mission")
    private List<MissionVerification> missionVerificationList;
    // Module
    @ManyToOne
    @JoinColumn(name = "module_id",nullable = false)
    private Module module;

}

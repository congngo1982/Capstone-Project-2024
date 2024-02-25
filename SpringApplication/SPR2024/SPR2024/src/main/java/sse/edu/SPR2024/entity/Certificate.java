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
@Table(name = "gcp_certificate")
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date receiveDate;
    private String imgUrl;
    private String certificateUrl;
    private String name;
    private String description;

    //connect to other table
    // enrollment
    @OneToOne(mappedBy = "certificate")
    private Enrollment enrollment;


}

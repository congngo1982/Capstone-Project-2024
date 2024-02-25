package sse.edu.SPR2024.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gcp_document")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String documentUrl;
    private String description;

    //connect to other table
    // module
    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;
}

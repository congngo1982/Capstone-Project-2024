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

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gcp_avatar")
public class Avatar {

    @Id
    private Long id;

    private String avatarUrl;

    //conect to avatar achieve
    @OneToMany(mappedBy = "avatar")
    private List<AvatarAchieve> avatarAchieves;

}

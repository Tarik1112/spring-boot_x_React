package com.tarikmujkic.webinfo_133.user;

import javax.persistence.*;
import lombok.Data;
@Entity
@Data
@Table

public class UserEntity {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private String Id;
    private String Username;
    private String email;
    private String Password;
    private String ConfirmPassword;
    private Integer role;

    public UserEntity(){

    }

    public UserEntity(String id, String username, String email, String password, String confirmPassword) {
        Id = id;
        Username = username;
        this.email = email;
        Password = password;
        ConfirmPassword = confirmPassword;
    }
}

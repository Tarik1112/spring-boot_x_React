package com.tarikmujkic.webinfo_133.user;

import javax.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Entity
@Data
@Table

public class UserEntity implements UserDetails {
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
    private String username;
    private String email;
    private String Password;
    private String ConfirmPassword;
    private Integer role;

    public UserEntity(){

    }

    public UserEntity(String id, String username, String email, String password, String confirmPassword) {
        Id = id;
        this.username = username;
        this.email = email;
        Password = password;
        ConfirmPassword = confirmPassword;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}

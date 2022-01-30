package com.tarikmujkic.webinfo_133.news;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tarikmujkic.webinfo_133.comments.CommentsEntity;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import java.util.Collection;
import java.util.HashSet;


@Entity
@Data
@Table
public class NewsEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String Id;
    private String text;
    private String title;
    @OneToMany(mappedBy = "news")
    @JsonIgnore
    private Collection<CommentsEntity> comment;
}

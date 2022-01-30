package com.tarikmujkic.webinfo_133.comments;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tarikmujkic.webinfo_133.news.NewsEntity;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.mapping.Join;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import java.util.Collection;


@Entity
@Data
@Table
public class CommentsEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String IdComment;
    private String text;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_comment_id", referencedColumnName = "id")
    private NewsEntity news;
}

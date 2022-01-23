package com.tarikmujkic.webinfo_133.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UserRepository
        extends JpaRepository<UserEntity, String> {

    Optional<UserEntity> findByUsername(String username);

//    @Query("FROM UserEntity u WHERE u.username LIKE :username AND u.password LIKE :password")
    Optional<UserEntity> findByUsernameAndPassword(String username, String password);
}
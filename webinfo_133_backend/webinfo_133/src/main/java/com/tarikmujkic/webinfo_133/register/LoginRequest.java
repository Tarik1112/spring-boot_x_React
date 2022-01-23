package com.tarikmujkic.webinfo_133.register;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Data
public class LoginRequest {
    private final String username;
    private final String password;
}
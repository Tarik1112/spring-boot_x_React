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
public class RegisterRequest {
    private final String username;
    private final String email;
    private final String password;
    private final String confirm_password;
}

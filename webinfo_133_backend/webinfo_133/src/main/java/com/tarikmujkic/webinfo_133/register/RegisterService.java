package com.tarikmujkic.webinfo_133.register;

import com.tarikmujkic.webinfo_133.user.UserEntity;
import com.tarikmujkic.webinfo_133.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegisterService {

    private final UserService userService;
    private EmailValidation emailValidation;


    public String register(RegisterRequest request) {
        boolean isValid = emailValidation.test(request.getEmail());
        if(!isValid){
            throw new IllegalStateException("Email is not valid!");
        }


        return userService.registerUser(
                new UserEntity(
                        request.getUsername(),
                        request.getEmail(),
                        request.getPassword(),
                        request.getConfirm_password()
                )
        );

    }

    String login(LoginRequest request){
        return userService.signIn(
                new UserEntity(
                        request.getUsername(),
                        request.getPassword()
                )
        );
    }

}

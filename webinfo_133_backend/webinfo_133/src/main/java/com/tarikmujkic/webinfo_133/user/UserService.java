package com.tarikmujkic.webinfo_133.user;

import com.tarikmujkic.webinfo_133.security.PasswordEncoder;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@AllArgsConstructor
@Service
public class UserService implements UserDetailsService {
    private final static String USER_ERROR = "Korisnik nije pronadjen!";

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final PasswordEncoder pw;
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return  userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(USER_ERROR, username)));
    }

    public String registerUser(UserEntity user){
        boolean isUser = userRepository.findByUsername(user.getUsername()).isPresent();

        if(isUser){
            throw new IllegalStateException("Username already taken!");
        }

        if(!(user.getPassword().equals(user.getConfirmPassword()))){
            throw new IllegalStateException("Passwords don't match. Please try again");
        }
        user.setRole(1);
        user.setStatus(1);
        userRepository.save(user);
        return "User is registered successfully";
    }

    public String signIn(UserEntity user){

        boolean isRegistered = userRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword()).isPresent();
        if(isRegistered){
            return "Signed in successfully";

        }else{
            throw new IllegalStateException("Username or password are incorrect!");
        }


    }
}

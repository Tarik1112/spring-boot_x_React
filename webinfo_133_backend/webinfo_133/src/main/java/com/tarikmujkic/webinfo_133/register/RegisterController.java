package com.tarikmujkic.webinfo_133.register;

import com.tarikmujkic.webinfo_133.user.UserEntity;
import com.tarikmujkic.webinfo_133.user.UserRepository;
import com.tarikmujkic.webinfo_133.user.UserService;
import io.swagger.models.Response;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/user")
@AllArgsConstructor
public class RegisterController {
    private UserService userService;
    private RegisterService registerService;
    private UserRepository userRepository;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request){
        return registerService.login(request);
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request){
        return registerService.register(request);
    }

    @GetMapping("/get_user")
    public List<UserEntity> getAllUsers(){
        return userRepository.findAll();
    }
    @PutMapping("/update_user/{id}")
    public ResponseEntity<UserEntity> updateUser(@RequestBody UserEntity user, @PathVariable String id){
        Optional<UserEntity> userData = userRepository.findById(id);

        if(userData.isPresent()){
            UserEntity _user = userData.get();
            _user.setStatus(user.getStatus());
            _user.setUsername(user.getUsername());
            _user.setPassword(user.getPassword());
            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

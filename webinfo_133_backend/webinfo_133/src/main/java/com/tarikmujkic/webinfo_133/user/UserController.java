package com.tarikmujkic.webinfo_133.user;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/user")
public class UserController {

//    @Autowired
//    private UserRepository userRepository;
//
//
//
//    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<String> register(@RequestBody UserEntity user) throws JSONException {
//        JSONObject jsonObject = new JSONObject();
//        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//        user.setRole(1);
//        UserEntity userSave = userRepository.save(user);
//        String response = "User " + userSave.getUsername() + " je registrovan uspjesno!";
//        jsonObject.put("message", response);
//        return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
//    }
}

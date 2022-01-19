package com.tarikmujkic.webinfo_133.register;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/user")
@AllArgsConstructor
public class RegisterController {

    private RegisterService registerService;

    public String register(@RequestBody RegisterRequest request){
        return registerService.register(request);
    }
}

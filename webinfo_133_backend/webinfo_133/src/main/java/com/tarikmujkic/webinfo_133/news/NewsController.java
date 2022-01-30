package com.tarikmujkic.webinfo_133.news;


import com.tarikmujkic.webinfo_133.register.LoginRequest;
import com.tarikmujkic.webinfo_133.register.RegisterRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/news")
@AllArgsConstructor
public class NewsController {

    private NewsService newsService;

    @PostMapping("/add_news")
    public String register(@RequestBody NewsEntity news){
        return newsService.addNews(news);
    }


}

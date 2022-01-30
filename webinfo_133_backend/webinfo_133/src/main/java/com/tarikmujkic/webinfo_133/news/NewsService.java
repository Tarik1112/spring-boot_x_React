package com.tarikmujkic.webinfo_133.news;

import com.tarikmujkic.webinfo_133.register.LoginRequest;
import com.tarikmujkic.webinfo_133.user.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class NewsService {

    private NewsRepository newsRepository;

    String addNews(NewsEntity news){
        newsRepository.save(news);
        return "News saved successfully";
    }
}

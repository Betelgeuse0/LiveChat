package com.github.betelgeuse0.livechat;

import com.github.betelgeuse0.livechat.example.controller.controller.UserController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
@RestController
public class LiveChatApplication {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    public static void main(String[] args) {
        SpringApplication.run(LiveChatApplication.class, args);
    }

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

}

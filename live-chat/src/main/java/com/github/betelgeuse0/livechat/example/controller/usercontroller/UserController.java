package com.github.betelgeuse0.livechat.example.controller.usercontroller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        logger.info("Received user: {}", user);
        return user;
    }

    public static class User {
        private String name;
        private String email;

        // Getters and setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        @Override
        public String toString() {
            return "User{" +
                    "name='" + name + '\'' +
                    ", email='" + email + '\'' +
                    '}';
        }
    }
}

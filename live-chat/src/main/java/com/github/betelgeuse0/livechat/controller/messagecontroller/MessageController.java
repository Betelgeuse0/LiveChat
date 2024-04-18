package com.github.betelgeuse0.livechat.controller.messagecontroller;

import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class MessageController {
    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/send-message")
    public String sendMessage(@RequestBody MessageDto messageDto) {
        logger.info("Received message: {}", messageDto.getMessage());
        return messageDto.getMessage();
    }

    public static class MessageDto {
        private String message;

        // Getters and setters
        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }

}


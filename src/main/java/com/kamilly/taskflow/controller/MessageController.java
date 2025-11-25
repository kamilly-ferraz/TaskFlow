package com.kamilly.taskflow.controller;

import com.kamilly.taskflow.dto.MessageRequest;
import com.kamilly.taskflow.service.MessageService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notify")
public class MessageController {

    private final MessageService service;

    public MessageController(MessageService service) {
        this.service = service;
    }

    @PostMapping
    public String send(@RequestBody MessageRequest req) {
        return service.process(req.getMessage());
    }
}

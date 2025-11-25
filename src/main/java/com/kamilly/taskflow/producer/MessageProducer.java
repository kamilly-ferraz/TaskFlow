package com.kamilly.taskflow.producer;

import com.kamilly.taskflow.config.RabbitMQConfig;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageProducer {

    private final RabbitTemplate rabbitTemplate;

    public MessageProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendToQueue(String message) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.QUEUE, message);
        System.out.println("[x] Mensagem enviada: " + message);
    }
}

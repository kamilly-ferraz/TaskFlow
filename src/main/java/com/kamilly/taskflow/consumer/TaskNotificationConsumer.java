package com.kamilly.taskflow.consumer;

import com.kamilly.taskflow.config.RabbitMQConfig;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class TaskNotificationConsumer {

    @RabbitListener(queues = RabbitMQConfig.QUEUE)
    public void receiveMessage(String message) {
        System.out.println("╔════════════════════════════════════════╗");
        System.out.println("║   📬 NOTIFICAÇÃO RECEBIDA              ║");
        System.out.println("╠════════════════════════════════════════╣");
        System.out.println("║ " + message);
        System.out.println("╚════════════════════════════════════════╝");
    }
}
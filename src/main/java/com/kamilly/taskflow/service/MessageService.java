package com.kamilly.taskflow.service;

import com.kamilly.taskflow.producer.MessageProducer;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    private final MessageProducer producer;

    public MessageService(MessageProducer producer) {
        this.producer = producer;
    }

    /**
     * Processa a mensagem recebida e envia para a fila do RabbitMQ.
     *
     * @param message conteúdo da mensagem
     * @return confirmação de publicação
     */
    public String process(String message) {
        producer.sendToQueue(message);
        return "Mensagem publicada com sucesso: " + message;
    }
}

# TaskFlow - Gerenciador de Tarefas com Atualização em Tempo Real

<p align="center">
  <img src="https://img.shields.io/badge/Java-17-5382a1?logo=openjdk&logoColor=white" alt="Java 17"/>
  <img src="https://img.shields.io/badge/Spring_Boot-3.5.8-6DB33F?logo=spring-boot&logoColor=white" alt="Spring Boot 3.5.8"/>
  <img src="https://img.shields.io/badge/Angular-21.1.0-DD0031?logo=angular&logoColor=white" alt="Angular 21.1.0"/>
  <img src="https://img.shields.io/badge/RabbitMQ-3.13.7-FF6600?logo=rabbitmq&logoColor=white" alt="RabbitMQ 3.13.7"/>
  <img src="https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white" alt="PostgreSQL 16"/>
  <img src="https://img.shields.io/badge/Docker-29.0.1-blue?logo=docker&logoColor=white" alt="Docker 29.0.1"/>
</p>



> Sistema completo de CRUD com dashboard em tempo real, mensageria assíncrona e interface moderna.

## Funcionalidades Implementadas

- **CRUD completo de tarefas**: criar, listar, editar e excluir tarefas.  
- **Dashboard em tempo real**:
  - Cards de estatísticas (pendentes, em progresso, concluídas e total).  
  - Gráficos interativos (Chart.js):
    - Pizza: distribuição de status das tarefas.  
    - Barra: tarefas criadas por dia da semana.  
  - Relógio com data/hora atualizada dinamicamente.  
- **Mensageria assíncrona** com RabbitMQ.  
- **API REST documentada** com Swagger/OpenAPI.  
- **Interface moderna e responsiva** com Angular Material.  
- **Arquitetura modular** utilizando Angular Standalone Components.  
- **Containerização completa** com Docker (backend, frontend e RabbitMQ).  


---

## Tecnologias Utilizadas

### Backend (Java + Spring Boot)
| Tecnologia                  | Versão        | Finalidade                              |
|-----------------------------|---------------|-----------------------------------------|
| Java                        | 17 (LTS)      | Linguagem principal                     |
| Spring Boot                 | 3.5.8         | Framework principal                     |
| Spring Data JPA             | 3.5.8         | ORM + persistência                      |
| Spring for RabbitMQ         | 3.5.8         | Mensageria assíncrona                   |
| Spring Web                  | 3.5.8         | API REST                                |
| Spring Validation           | 3.5.8         | Validação de entrada                    |
| Lombok                      | 1.18.34       | Redução de boilerplate                  |
| Maven                       | 3.9.9         | Gerenciador de dependências e build     |
| PostgreSQL                  | 16            | Banco de dados relacional               |
| RabbitMQ                    | 3.13.7        | Fila de mensagens (notificações)        |
| OpenAPI + Swagger UI        | 2.2.20        | Documentação automática da API          |
| Docker & Docker Compose     | 29.0.1        | Containerização e orquestração          |

### Frontend (Angular 21 - Standalone)
| Tecnologia                  | Versão        | Finalidade                              |
|-----------------------------|---------------|-----------------------------------------|
| Angular                     | 21.1.0        | Framework frontend                      |
| TypeScript                  | 5.6.x         | Tipagem forte                           |
| Angular Material            | 21.1.0        | Componentes UI modernos                 |
| Angular Forms               | 21.1.0        | Formulários reativos e template-driven |
| RxJS                        | 7.8.x         | Programação reativa                     |
| Chart.js                    | 4.4.4         | Gráficos interativos (pizza e barras)  |
| HTTP Client                 | nativo        | Comunicação com API REST                |
| Standalone Components       | Angular 21+   | Arquitetura moderna sem NgModules       |
| SCSS                        | 1.77.x        | Estilização avançada                    |

---

## Endpoints Principais (Backend)

| Método | Endpoint           | Descrição                   |
|--------|------------------|-----------------------------|
| GET    | /api/tasks        | Lista todas as tarefas      |
| POST   | /api/tasks        | Cria uma nova tarefa        |
| PUT    | /api/tasks/{id}   | Atualiza uma tarefa         |
| DELETE | /api/tasks/{id}   | Remove uma tarefa           |

---

## Estrutura do Projeto
<img width="571" height="450" alt="Captura de Tela 2025-11-25 às 13 08 56" src="https://github.com/user-attachments/assets/10f4fe46-3074-437c-9761-197d055521c0" />




## Endpoints Principais (Backend)

| Método | Endpoint          | Descrição                |
|--------|-----------------|--------------------------|
| GET    | /api/tasks       | Lista todas as tarefas   |
| POST   | /api/tasks       | Cria uma nova tarefa     |
| PUT    | /api/tasks/{id}  | Atualiza uma tarefa      |
| DELETE | /api/tasks/{id}  | Remove uma tarefa        |


## Acessos:

Frontend: http://localhost:4200
Backend + Swagger: http://localhost:8080/swagger-ui.html
RabbitMQ Management: http://localhost:15672 (guest/guest)


## Telas

Tela Inicial <img width="1440" height="894" alt="Captura de Tela 2025-11-25 às 12 23 26" src="https://github.com/user-attachments/assets/96a2d32c-2d58-444b-b673-eca75fe2097d" />
Graficos de Status <img width="1439" height="697" alt="Captura de Tela 2025-11-25 às 12 24 55" src="https://github.com/user-attachments/assets/b7595ac6-db76-443b-a77c-bc0686cca2a6" />
Tarefas Criadas <img width="1439" height="684" alt="Captura de Tela 2025-11-25 às 12 25 25" src="https://github.com/user-attachments/assets/17c4b34b-7397-4b88-89ba-afcb8bc89cb9" />
Editar Tarefa <img width="1437" height="647" alt="Captura de Tela 2025-11-25 às 12 26 27" src="https://github.com/user-attachments/assets/eaaa11a7-955c-462e-abdc-6617d87a4523" />


Autor
Feito por: Kamilly

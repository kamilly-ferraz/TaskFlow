# TaskFlow - Gerenciador de Tarefas com Atualização em Tempo Real

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21.0.0-DD0031?logo=angular&logoColor=white" alt="Angular 21"/>
  <img src="https://img.shields.io/badge/Node.js-22.18.0-339933?logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/RabbitMQ-3.13.7-FF6600?logo=rabbitmq&logoColor=white" alt="RabbitMQ"/>
  <img src="https://img.shields.io/badge/LocalStorage-F6E05E?logoColor=black" alt="LocalStorage"/>
  <img src="https://img.shields.io/badge/Docker-27.3-blue?logo=docker&logoColor=white" alt="Docker"/>
</p>


> Sistema completo de CRUD com dashboard em tempo real, mensageria assíncrona e interface moderna.

## Tecnologias Utilizadas

### Backend (Java + Spring Boot)
| Tecnologia                  | Versão        | Finalidade                              |
|-----------------------------|---------------|-----------------------------------------|
| Java                        | 21 (LTS)      | Linguagem principal                     |
| Spring Boot                 | 3.3.5         | Framework principal                     |
| Spring Data JPA             | 3.3.5         | ORM + persistência                      |
| Spring for RabbitMQ         | 3.3.5         | Mensageria assíncrona                   |
| Spring Web                  | 6.1.x         | API REST                                |
| Spring Validation           | 6.1.x         | Validação de entrada                    |
| Lombok                      | 1.18.34       | Redução de boilerplate                  |
| Maven                       | 3.9.9         | Gerenciador de dependências e build     |
| PostgreSQL                  | 16            | Banco de dados relacional               |
| RabbitMQ                    | 3.13          | Fila de mensagens (notificações)        |
| OpenAPI + Swagger UI        | 2.2.20        | Documentação automática da API          |
| Docker & Docker Compose     | 27.3.1        | Containerização e orquestração          |

### Frontend (Angular 18 - Standalone)
| Tecnologia                  | Versão        | Finalidade                              |
|-----------------------------|---------------|-----------------------------------------|
| Angular                     | 18.2.10       | Framework frontend                      |
| TypeScript                  | 5.6.x         | Tipagem forte                           |
| Angular Material            | 18.2.10       | Componentes UI modernos                 |
| Angular Forms               | 18.2.10       | Formulários reativos e template-driven |
| RxJS                        | 7.8.x         | Programação reativa                     |
| Chart.js                    | 4.4.4         | Gráficos interativos (pizza e barras)  |
| HTTP Client                 | nativo        | Comunicação com API REST                |
| Standalone Components       | Angular 18+   | Arquitetura moderna sem NgModules       |
| SCSS                        | 1.77.x        | Estilização avançada                    |

### Infraestrutura & DevOps
| Tecnologia                  | Finalidade                              |
|-----------------------------|-----------------------------------------|
| Docker                      | Containerização do backend              |
| Docker Compose              | Orquestração local (Postgres + RabbitMQ + Backend) |
| Railway / Render / Vercel   | Deploy em produção (cloud-ready)        |
| Git & GitHub                | Controle de versão e CI/CD básico       |

## Funcionalidades Implementadas
- CRUD completo de tarefas
- Dashboard com gráficos em tempo real (Chart.js)
- Cards de estatísticas (pendentes, em progresso, concluídas)
- Relógio com data/hora atualizada em tempo real
- Mensageria com RabbitMQ (producer + consumer)
- API REST documentada com Swagger/OpenAPI
- Interface responsiva e moderna com Angular Material
- Totalmente containerizado com Docker
  

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
Feito por Kamilly

# TaskFlow - Gerenciador de Tarefas com Atualização em Tempo Real

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-5382a1?logo=openjdk&logoColor=white" alt="Java 21"/>
  <img src="https://img.shields.io/badge/Spring_Boot-3.3.5-6DB33F?logo=spring-boot&logoColor=white" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/Angular-18.2.10-DD0031?logo=angular&logoColor=white" alt="Angular 18"/>
  <img src="https://img.shields.io/badge/RabbitMQ-3.13-FF6600?logo=rabbitmq&logoColor=white" alt="RabbitMQ"/>
  <img src="https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Docker-27.3.1-2496ED?logo=docker&logoColor=white" alt="Docker"/>
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
  

##Acessos:

Frontend: http://localhost:4200
Backend + Swagger: http://localhost:8080/swagger-ui.html
RabbitMQ Management: http://localhost:15672 (guest/guest)



Autor
Feito por Kamilly

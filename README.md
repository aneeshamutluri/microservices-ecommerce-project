# 🛒 E-Commerce Microservices Backend

This project is a full-stack microservices backend built using the **MERN (Node.js, Express, MongoDB)** stack. It implements a secure API Gateway architecture with centralized authentication and containerized services.

## 🏗️ Architecture Overview
The system follows a strict Microservices Architecture as per the project requirements:

* **API Gateway (Port 5000):** Acts as the entry point, routing requests and verifying JWT tokens.
* **Auth Service (Port 5001):** Manages user accounts, hashing passwords with bcrypt, and issuing JWTs.
* **Product Service (Port 5002):** A dedicated service for product catalog management with full CRUD capability.



---

## 🚀 Getting Started (Docker)
To run the entire system with a single command, ensure Docker Desktop is open and run this in your terminal:

```bash
docker-compose up --build
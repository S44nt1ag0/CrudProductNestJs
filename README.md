<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://sequelize.org/" target="blank"><img src="https://sequelize.org/img/logo.svg" width="120" alt="Sequelize Logo" /></a>
</p>

# CRUD Backend

Welcome to the **CRUD** backend repository! 🚀
This project is a robust RESTful API built with **NestJS**, designed to handle user authentication, product management, and more.

## 🛠️ Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (Node.js)
- **Database:** MySQL
- **ORM:** [Sequelize](https://sequelize.org/)
- **Authentication:** Passport, JWT (JSON Web Tokens)
- **Language:** TypeScript

## ✨ Features

- **Users Module**: Management of user profiles.
- **Auth Module**: Secure authentication using JWT and Passport strategies.
- **Product Module**: CRUD operations for product management.
- **Database Integration**: Seamless connection to MySQL using Sequelize.

## 🚀 Getting Started

Follow these steps to get your development environment up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/) installed and running locally

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd hugh-caption
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory. You can use `.env.example` as a reference:

    ```bash
    cp .env.example .env
    ```

    Open `.env` and fill in your database credentials and preferred JWT secret:

    ```env
    JWT_SECRET="your_super_secret_key"
    DATABASE_HOST="localhost"
    DATABASE_PORT=3306
    DATABASE_USER="root"
    DATABASE_PASSWORD="your_database_password"
    DATABASE_NAME="hugSequelize"
    ```

### Running the Application

```bash
# development
npm run start

# watch mode (recommended for dev)
npm run start:dev

# production mode
npm run start:prod
```

The server will typically start on `http://localhost:3000` (or the port defined in `main.ts`).

## 🧪 Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## 📂 Project Structure

```
src/
├── core/
│   └── database/       # Database providers and configuration
├── modules/
│   ├── auth/           # Authentication logic (Strategies, Guards)
│   ├── product/        # Product domain logic
│   └── users/          # User management
├── app.module.ts       # Main application module
└── main.ts             # Application entry point
```

## 📄 License

This project is [UNLICENSED](LICENSE).

# Vite React Template

This project is a boilerplate for building a React application using Vite. It includes configuration for environment variables, server setup, and process management with PM2.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Production](#production)
   - [PM2](#pm2)
   - [Docker](#docker)
- [Git Action CI/CD](#git-action)
   - [PM2](#deploying-with-pm2)
   - [Docker](#deploying-with-docker)
- [Testing](#testing)
- [Scripts](#scripts)

## Prerequisites

Make sure you have the following installed:

- [OpenSSL](https://www.openssl.org/)
- [Bun](https://bun.sh/)
- [PM2](https://pm2.keymetrics.io/)

## Installation

1. clone the repository,run the following commands:

   ```bash
   git clone https://github.com/yourusername/vite-react-template.git
   cd vite-react-template
   ```

2. install dependencies,run the following commands:
   ```bash
   bun install
   ```
3. create SSL certificates, run the following commands:
   ```bash
   openssl genpkey -algorithm RSA -out vite_private.key -pkeyopt rsa_keygen_bits:2048
   openssl req -new -x509 -key vite_private.key -out vite_certificate.crt -days 365
   ```

## Development

To start the development server, run the following commands:

```bash
bun dev
```

## Production

Before starting the application in production mode, build the project:

```bash
bun run build
```

## PM2
To start the application in production mode using PM2, run:

```bash
pm2 start ecosystem.config.cjs --env production
```

To restart the application in production mode using PM2, run:

```bash
pm2 restart ecosystem.config.cjs --env production
```

## Docker

To manage your application using Docker, follow these steps:

1. remove any existing stack:
   ```bash
   docker stack rm vite-nginx || true
   ```
2. build the Docker image:
   ```bash
   docker build -f Dockerfile -t vite-nginx:latest .
   ```
3. deploy the stack:
   ```bash
   docker stack deploy -c docker-compose.yaml vite-nginx
   ```
4. clean up unused containers:
   ```bash
   docker container prune -f
   ```

## Git Action

This section outlines the steps to deploy your application using Docker and PM2 via Git commit messages.

### Deploying with PM2
To deploy your application using PM2, follow these steps:
1. Make your changes and commit them with the following message format:
   ```bash
   git commit -m `"[deploy pm2]  your_message`
   ```
2. Push your changes to trigger the CI/CD pipeline that will start or restart your application using PM2.

### Deploying with Docker
To deploy your application using Docker, follow these steps:
1. Make your changes and commit them with the following message format:
   ```bash
   git commit -m `"[deploy docker]  your_message`
   ```
2. Push your changes to trigger the CI/CD pipeline that will build and deploy your Docker image.
  

## Testing

To run tests, you can use the following commands:

```bash
bun run test      # Run unit tests
bun run test:ui   # Run tests with Vitest UI
bun run coverage   # Run tests and generate coverage report
bun run open-coverage:mac   # Open coverage report on macOS
bun run open-coverage:windows   # Open coverage report on Window
```

## Scripts

- Build: `bun run build`
- Start: `pm2 start ecosystem.config.cjs --env production`
- Restart: `pm2 restart ecosystem.config.cjs --env - production`
- Run Tests: `bun run test`



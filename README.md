# TODO App API
This project is an API server for a TODO application built with Nest.js and Prisma. Follow the instructions below to set up and start the server using Docker.

## Required Tools
- Docker Desktop

## Starting the Server with Docker
Configure the .env file with sqlite settings:
`DATABASE_URL="file:./dev.db"`

Build the image by executing the following command in your terminal:
`docker build -t todo-app:latest .`

To start a container from the previously built image, execute the following command:
`docker run -d -p 8080:8080 todo-app:latest`

To check running containers, execute the following command:
`docker ps`

To stop a running container, execute the following command:
`docker stop <CONTAINER ID>`


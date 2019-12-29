# Pathinker App

## Basic Commands

### Client

`npm run start`: Creates development server on port 3000 (client)
`npm run build`: Builds production files
`npm run test`: Runs client tests

## DevOps

`npm run dev`: Creates development server on port 5000 (server)
`npm run start`: runs server for production
`npm run test`: Runs server tests

### Development Environment

Docker should be installed on your local machine

Project has 2 main containers:

1. **Front-End App** (client)
2. **Back-End App** (server)

Each container has a development dockerfile and can work independently. 

#### Client Container

For building container:

`docker build -t <tagname> -f Dockerfile.dev .`

For running container (macos):

`docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app  <tagname>`

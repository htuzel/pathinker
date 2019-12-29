# Pathinker App



## DevOps

### Development Environment

#### Docker should be installed on your local machine

Project has 2 main containers:

1. **Front-End App** (client)
2. **Back-End App** (server)

Each container has a development dockerfile and can work independently. 

##### Client Container

For building container:

`docker build -t <tagname> -f Dockerfile.dev .`

For running container (macos):

`docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app  <tagname>`

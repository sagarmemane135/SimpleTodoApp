# SimpleTodoApp
A Node JS TO-DO Application for CI/CD

## Installation Steps 
- `git clone https://github.com/sagarmemane135/SimpleTodoApp.git`
- `npm install`
- `npm start`

## Installation on Docker
- `docker build . -t listify-task`
- `docker run -d -p 8000:8000 --name listify-task listify-task:latest`
- For DockerHub,  `docker run -d -p 8000:8000 --name listify-task memanes688/listify-task`
- The Container will run on port 8000 

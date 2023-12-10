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

## Output
- Manual Delivery
- ![Screenshot (283)](https://github.com/sagarmemane135/SimpleTodoApp/assets/108060123/2db5c9a4-17f2-4ac1-8db8-865bc1ff715b)
- Continuous Deployment with Github Webhooks 
- ![Screenshot (299)](https://github.com/sagarmemane135/SimpleTodoApp/assets/108060123/6fda0542-1f40-4c8f-9d3c-b4f9d3d6e541)



# Get a Node Image
FROM node:19.3.0-alpine AS builder

# Make a working directory
WORKDIR /app

# Copy the files into Working directory
COPY public ./public
COPY app.js ./
COPY README>md ./
COPY package.json

# Install dependencies
RUN npm install

# Expose listening port
EXPOSE 8000

# Run our Application
CMD ["npm", "start"]

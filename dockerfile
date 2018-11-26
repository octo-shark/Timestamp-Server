# Dockerfile for timestamp

<<<<<<< HEAD
FROM node:11.1.0-alpine
=======
FROM node:8
>>>>>>> 20ade70b364d39f60486a0f75c8c4f96fcb7fc23

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

<<<<<<< HEAD
CMD npm start
=======
CMD node server.js
>>>>>>> 20ade70b364d39f60486a0f75c8c4f96fcb7fc23

EXPOSE 4898
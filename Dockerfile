# Dockerfile for timestamp

FROM node:11.1.0-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

CMD npm start

EXPOSE 4898

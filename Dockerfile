FROM node:alpine

WORKDIR /usr/app/api

COPY ./ /usr/app

RUN npm install

EXPOSE 4000
ENTRYPOINT npm start
FROM node:slim

RUN npm install -g firebase-tools

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 8080


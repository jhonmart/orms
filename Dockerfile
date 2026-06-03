FROM node:24-slim

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm
RUN npm ci

COPY . .

CMD ["npm", "start"]

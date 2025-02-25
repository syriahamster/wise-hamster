# nodejs dockerfile
FROM node:23-alpine3.21

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 8002
CMD ["npm", "start"]

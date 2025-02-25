# nodejs dockerfile
FROM node:17.0.0

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 8002
CMD ["npm", "start"]

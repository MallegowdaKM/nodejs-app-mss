FROM node:lts-alpine3.17
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 9981
CMD ["node","app.js"]

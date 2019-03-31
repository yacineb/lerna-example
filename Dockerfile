FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm i && npm run bootstrap

RUN ls /app/packages


ENTRYPOINT [ "node","/app/packages/project-c/index.js" ]
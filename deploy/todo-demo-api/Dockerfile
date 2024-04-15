FROM node:18.15.0-slim

RUN mkdir -p /app/packages/
RUN yarn global add lerna

WORKDIR /app/packages

COPY ./packages/todo-demo-api /app/packages/todo-demo-api
COPY ./lerna.json /app
COPY ./package.json /app
COPY ./yarn.lock /app
RUN cat /app/package.json

RUN yarn install

EXPOSE 8220

WORKDIR /app

CMD ["yarn", "start:todo-demo-api"]

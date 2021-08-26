FROM node:12-alpine as prod

EXPOSE 3000
EXPOSE 3001


# прокидывет команды выключения в контейнер
RUN apk add --no-cache tini

WORKDIR /mtgtrader/app

COPY package.json yarn*.lock ./

RUN yarn install

COPY . .

RUN node_modules/.bin/razzle build --noninteractive

ENTRYPOINT ["tini", "--"]

ENV NODE_ENV=production
CMD ["yarn", "start:prod"]

FROM prod as dev

ENV NODE_ENV=development


CMD ["yarn", "start"]

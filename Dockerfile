FROM node:12-alpine as build

EXPOSE 3001
EXPOSE 3000

WORKDIR /mtgtrader/app

RUN apk add --no-cache tini
COPY package.json yarn*.lock ./
RUN yarn install
COPY . .
RUN node_modules/.bin/razzle build --noninteractive
ENTRYPOINT ["tini", "--"]

#  ---- PRODUCTION BUILD ----
FROM build as prod

ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /mtgtrader/app/package.json yarn*.lock ./
COPY --from=build /mtgtrader/app/build build
COPY --from=build /mtgtrader/app/public public

RUN yarn install --no-lockfile && rm package.json

CMD ["node", "build/server.js"]

#  ---- DEVELOPMENT BUILD ----
FROM build as dev

ENV NODE_ENV=development

CMD ["yarn", "start"]

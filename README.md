# TMGTrader
 Online toolset for Magic The Gathering cards collection management.

 ## Contributing

 [Trello board](https://trello.com/b/VMtE9KHN/mtgtrader)

### `npm start` or `yarn start`

Runs the project in development mode.  
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

## Local development with Docker

1. Build image `yarn build-conainer-prod:web`
2. Run container `yarn run-container:prod` app will be available on `http://localhost:5000`

Start command line inside container: `docker exec  -it <container id> /bin/sh`
## Production
1. Build image `yarn build-conainer-prod:web`
2. Run container `yarn run-container:prod`

## API
Run Swagger editor: `yarn swagger-editor`. Ui will be awailiable on `localhost:80`

Run Swagger UI: `yarn swagger-ui`. Ui will be on `localhost/swagger`. File `swagger.json` must be in the root of the project.

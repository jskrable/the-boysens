# boysens-v2

## local setup

`nvm use && yarn` to install dependencies

### database

`docker compose build && docker compose up` to start docker db

`yarn db:generate && yarn db:migrate:dev` to generate prisma client and migrate the schema to the docker db

`yarn db:seed` to populate the database with legacy data

### app

`yarn dev` to startup the dev server
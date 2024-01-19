# boysens-v2

## local setup

`nvm use && pnpm i` to install dependencies

### database

`docker compose build && docker compose up` to start docker db

`pnpm db:generate && yarn db:migrate:dev` to generate prisma client and migrate the schema to the docker db

`pnpm db:seed` to populate the database with legacy data

### app

`yarn dev` to startup the dev server

## build & deploy

https://docs.railway.app/quick-start
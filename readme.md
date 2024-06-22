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

the app and db are hosted on [railway](https://railway.app/project/d4211605-94de-4de5-a82e-7cf43bb746b0).

the domain is registered with route 53, and the nameservers are registered with Cloudrun.

### deploy

`railway up`

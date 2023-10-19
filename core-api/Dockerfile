# This stage is used as a target in Lotic's global docker-compose at https://github.com/Lotic-ai/lotic-configs/blob/main/docker-compose.yml
FROM node:18.17.1-alpine AS dev
WORKDIR /app

# add necessary packages for building
RUN apk add --no-cache --upgrade alpine-sdk

# copy configuration files
COPY \
  .env* \
  .eslintrc.js \
  .prettierignore \
  .prettierrc \
  nest-cli.json \
  package.json \
  tsconfig.json \
  tsconfig.build.json \
  yarn.lock \
  ./

# copy source code
COPY src/ src/


FROM dev AS build

# install dependencies
RUN yarn install --frozen-lockfile

# run unit tests
RUN yarn test:unit

# build from source
RUN yarn build

# copy common graphql file
COPY src/modules/service/graphql/*.graphql /app/dist/graphql/

# copy graphql files from other modules
COPY src/modules/*/*/*.graphql /app/dist/graphql/

# copy migrations
COPY src/modules/service/database/migrations/ /app/dist/modules/service/database/migrations/

# prune dev dependencies, keep production dependencies
RUN yarn install --frozen-lockfile --production --ignore-scripts --prefer-offline

FROM node:18.17.1-alpine AS prod
WORKDIR /app

# copy production-relevant configuration files
COPY package.json yarn.lock .sequelizerc ./

# copy all dependencies
COPY --from=build /app/node_modules/ node_modules/

# copy compiled source
COPY --from=build /app/dist dist/

# CMD should prefer to call node directly, not through a yarn script
CMD ["node", "dist/main.js"]

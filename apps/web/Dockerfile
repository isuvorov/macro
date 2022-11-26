FROM node:18.10.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm i -g pnpm@6.16

WORKDIR /app
COPY package*.json pnpm*.yaml /app/
RUN pnpm install --frozen-lockfile --prod
COPY ./dist /app
CMD [ "node", "main.js" ]

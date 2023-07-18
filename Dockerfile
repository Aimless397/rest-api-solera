FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]

COPY . .

RUN yarn

CMD yarn dev
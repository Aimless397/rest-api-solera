# REST API challenge Solera

## Built With

This project was built using these main technologies

* [Express.js](https://expressjs.com//)
* [TypeScript](https://www.typescriptlang.org/)
* [MySql](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Docker](https://www.docker.com/)
* [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)


## Setup

#### 1. Clone this repository

```
git clone https://github.com/Aimless397/rest-api-solera
```

#### 2. Install the dependencies

```
yarn install
```

#### 3. Create a ```.env``` file based on ```.env.example``` file using the following environment variables

```
# SERVER
PORT=
NODE_ENV=

# DATABASE
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_NAME=
```

#### 4. Start the Docker daemon (CLI, Docker Desktop, etc.) before build/running the container

#### 5. Build the Docker image from Dockerfile

```
docker-compose build
```

#### 6. Run the container with ```api``` service

```
docker-compose up
```


# Projects Manager

## About this

This is free project management tools Using node.js, MongoDB and docker-compose.

## Settings

### docker-compose.yml

This file run docker containers for node and mongo.

change settings if you want.

### .env

This file related to docker-compose.yml.

UID, GID , APP_USER, and MONGO setting are used as constants in docker-compose.yml

## How to run

1. install docker desktop
2. run docker desktop
3. run command `docker network create app-network`
4. run command `docker-compose up`

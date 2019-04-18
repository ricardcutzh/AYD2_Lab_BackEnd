#!/bin/bash
docker network create --driver bridge dev-net
docker run -d --name dbBanca --net dev-net bancadb:v1 --default-authentication-plugin=mysql_native_password
docker run -it  -p 8000:8000 -v $PWD/:/home/node --name devel --net dev-net  dev:v1 /bin/ash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker network rm dev-net

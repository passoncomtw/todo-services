#!/bin/bash

DOCKERHUB_USERNAME=$1
DOCKERHUB_PASSWORD=$2
DOCKERHUB_IMAGE=$3
VERSION=$4

echo "VERSION: $VERSION"

echo "Start build docker image"
docker build . -t $DOCKERHUB_USERNAME/$DOCKERHUB_IMAGE:$VERSION --progress=plain -f deploy/$DOCKERHUB_IMAGE/Dockerfile

echo "Login DockerHub"
echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin

echo "Push Image to DockerHub"
docker push $DOCKERHUB_USERNAME/$DOCKERHUB_IMAGE:$VERSION
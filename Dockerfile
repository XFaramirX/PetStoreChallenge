FROM node:10.11.0-alpine

RUN npm install -g newman newman-reporter-htmlextra

WORKDIR /etc/newman

ENTRYPOINT ["newman"]
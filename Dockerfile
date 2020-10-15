FROM node:10.11.0-alpine

RUN npm install -g newman newman-reporter-htmlextra

WORKDIR /src/newman

ENTRYPOINT ["newman"]
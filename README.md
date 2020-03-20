# PET STORE API - CHALLENGE

This is Automated test which was build to test Pet Store API Functionality using postman and javascript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing

#### Clone repo

```
git clone https://github.com/XFaramirX/PostmanPetStore.git
```

#### Install dependencies

```
npm install
```

## How to run tests:

#### Command interface or CI/CD

```
npm run test
```

#### Generate Report

```
npm run generateReport
```

This command will execute create a detail report using htmlextra reporter inside /newman folder.

You can launch it using like "live-server" to see it in more detail.

#### Run in Docker
Run below command to pull docker image
```
docker pull postman/newman;

```
Run collection
```
docker run -t postman/newman run https://www.getpostman.com/collections/591ff49755558f1103d2
```


## Reporting

**htmlextra**

https://www.npmjs.com/package/newman-reporter-htmlextra

#### API Documentation generated

https://documenter.getpostman.com/view/7191477/SzS7R6qZ

## TEST NOTES

Here you can find the test notes after the testing session.

```
TESTING NOTES URL
```

## Authors

- **David Barrera - Colombia**

#### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

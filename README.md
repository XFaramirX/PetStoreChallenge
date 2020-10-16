# PET STORE API - CHALLENGE

This is Automated test which was build to test Pet Store API Functionality using postman and javascript.

The nodeJS project itself will ease out the process of generating automatic reports and can be use as a boilerPlate for API with postman projects. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing

#### Clone repo

```
git clone https://github.hugeinc.com/jbarrera/postman-automation 
```

#### Install dependencies

```
npm install or yarn
```

## How to run tests:

#### Command interface or CI/CD

```
npm run test
```

#### View and Generate Report

You can view the lastest report at:

Or you can generate a new one in your local host.

```
npm run generateReport
```

This command will execute create a detail report using htmlextra reporter inside **/newman** folder.

You can launch the report using VScode "live-server" plugin.
See example: https://prnt.sc/rkuadr

#### Run in Docker

Run below command to pull docker image

```
docker pull postman/newman;
```

Run collection

```
docker run -t postman/newman run https://www.getpostman.com/collections/508f21bd30fb0fa88c72
```

Run collection inside docker and update live report.

```
npm run dockeReport
```

## Reporting

You can find the **LIVE REPORT Here** : https://xfaramirx.github.io/PetStoreChallenge/

Reporting Tools used:

**htmlextra**
https://www.npmjs.com/package/newman-reporter-htmlextra

#### API Documentation generated

https://documenter.getpostman.com/view/7191477/SzS7R6qZ

## Author

- **David Barrera - Colombia**

#### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

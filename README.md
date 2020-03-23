# PET STORE API - CHALLENGE

This is Automated test which was build to test Pet Store API Functionality using postman and javascript.

#### Test Notes 
https://docs.google.com/document/d/1dx9fHDmeij6Vuva_LLNmZpj-F2PltupD7c1BUQFX_ks/edit?usp=sharing

#### Language and Tool selection 

 I opted for Postman tool in particular due to the coding speed of the test cases , it provides a nice interface to debug issues , and nice reporting and plugins out of the box.  In comparison to other tools you have to write less and better code and dont worry so much about the request headers , I think it fits good for this challenge.

Below a basic DAR (Decision Analysis Report) diagram detailing why we choose postman among other tools.
![Image of Dar](https://i.ibb.co/RH31Cs5/Dar-Postman.png)

The framework contains several node packagesand CI/CD file integration.

Also Javascript is easy to debug using postman developer tools and the code is easier to read than other programming languages.

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

#### View and Generate Report
You can view the lastest report at: 


Or you can generate a new one in your local host.
```
npm run generateReport
```

This command will execute create a detail report using htmlextra reporter inside **src/newman** folder.

You can launch the report using something like the "live-server" plugin.
See example: https://prnt.sc/rkuadr 

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

You can find the **LIVE REPORT Here** : https://xfaramirx.github.io/PetStoreChallenge/ 

Reporting Tool
**htmlextra**
https://www.npmjs.com/package/newman-reporter-htmlextra

#### API Documentation generated

https://documenter.getpostman.com/view/7191477/SzS7R6qZ

## Author

- **David Barrera - Colombia**

#### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
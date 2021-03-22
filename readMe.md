## Exchange Management System

### Overview
- The web application has been developed in Angular 9 to provide user an interface to get information about exchange rates, reports for the comparison of transactions and flexibilty to search transaction for a particular country.
- Apart from that, the rights are different for viewer, user and admin.
- Admin can approve or reject informations, user can add informations and viewer has only view access.

### Getting Started with Project
Prerequisite
- Angular CLI: 9.1.12
- Node: 12.18.3
- OS: darwin x64
- Typescript Knowledge

Clone the repository
```sh
  > git clone https://github.com/shoaibrayeen/Exchange-Management-System/
  > cd Exchange-Management-System
```

Install required dependencies
```sh
  > npm install
```
Version Check
```sh
  > ng --version
```

Starting the server
```sh
  > ng serve

  ## server is up at http://localhost:4200/
```

### Starting From Scratch
```sh
  # after installing node.js and angular-cli

  $ ng new appName
  $ cd appName
  $ ng serve
  # check on the browser
  server is up at http://localhost:4200/
```

### To Generate Component, Service or Gaurd
```sh
  $ ng generate component componentName // A small piece of reusuable code
  $ ng generate guard guardName         // To restrict user
  $ ng generate service serviceName     // To provide a service
```


### License
[![Apache License](https://img.shields.io/badge/license-Apache-brightgreen.svg)](http://www.apache.org/licenses/)

**Copyright (c) 2020-2021 Mohd Shoaib Rayeen**

This project is licensed under the Apache License - see the LICENSE file for details

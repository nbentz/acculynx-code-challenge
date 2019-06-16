# AcculynxCodingChallenge


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Installation instructions

## Install NodeJS

Install NodeJS from this download link: https://nodejs.org/en/download/

## Install Angular

After installing NodeJS, run this command:
npm install -g @angular/cli

## Install MongoDb
MongoDb can be installed from this link: https://www.mongodb.com/download-center/community
Setup a folder for your local mongodb data. I named mine mongo-data.
Open up CMD line. Type in :
  cd C:\Program Files\MongoDB\Server\4.0\bin

Then enter the following cmd:
  .\mongod --dbpath=<your-path>/mongo-data

Do not close this cmd window, keep it open.

## MongoDB driver for nodeJS
Navigate to the parent folder of my project.
run the following command:
  npm install mongodb --save

## Instal Robo 3T
Download it from here: https://robomongo.org/download

## Install additional NodeJS modules
run the following commands:
npm i mongoose
npm i express

## Start Angular Project
ng serve -o --proxy-config proxy.conf.json


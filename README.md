# AcculynxCodingChallenge Installation Instructions

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

Then enter the following cmd (Enter path with no angle brackets):
  
  .\mongod --dbpath=<your-path>/mongo-data

Do not close this cmd window, keep it open.

## MongoDB driver for nodeJS
Navigate to the parent Acculynx-coding-challeng folder of my project.

run the following command:

  npm install mongodb --save

## Instal Robo 3T (GUI for MongoDB)
Download it from here: https://robomongo.org/download

After this is installed create a new connection, give it a name, and keep

all other default values. Double check Acculynx-coding-challenge/server/config.json
to make sure that local numerical ip address is the same as the servers.

## Install additional NodeJS modules
run the following commands in the server folder:

npm i mongoose

npm i express

## Start the server
Navigate to the server folder.
In the cmd line enter:
node server.js

## Start Angular Project
(in Acculynx-coding-challenge folder)
ng serve -o --proxy-config proxy.conf.json

-o opens the app in a browser.
--proxy-config references the proxy.conf.json file to create a proxy
which enables local testing due to CORS policy.

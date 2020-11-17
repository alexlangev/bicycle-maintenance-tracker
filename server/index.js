//Gears Icon made by https://www.flaticon.com/authors/freepik

'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fetch = require('isomorphic-fetch');

const PORT = 5150;

//handlers
const handleGetUser = require('./handlers/handleGetUser');
const handleTest = require('./handlers/handleTest');
const handleGetParts = require('./handlers/handleGetParts');
const handleGetUserData = require('./handlers/handleGetUserData');
const handleUpdateUser = require('./handlers/handleUpdateUser');
const handleSelectBike = require('./handlers/handleSelectBike');
const handleGetCompleteBicycles = require('./handlers/handleGetCompleteBicycles');
const handleSubmitForm = require('./handlers/handleSubmitForm');

express()
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Endpoints
  .get('/test', handleTest)
  .get('/getUser/:authToken', handleGetUser)//from the log in. exchange auth token for refresh and access token
  .get('/getUserData', handleGetUserData) //from strava
  .post('/updateUser', handleUpdateUser) //to mongo need body {"_id": "","bicycleData" : "","activities": ""}
  .get('/selectBike/:_id/:_gear_id', handleSelectBike)
  .get('/database/completeBicycles', handleGetCompleteBicycles)
  .get('/database/parts', handleGetParts) //from mongo
  .post('/database/submit', handleSubmitForm)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
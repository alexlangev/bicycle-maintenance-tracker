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

express()
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Endpoints
  .get('/test', handleTest)
  .get('/getUser/:authToken', handleGetUser)//from the log in. exchange auth token for refresh and access token
  .get('/getUserData', handleGetUserData) //from strava
  .post('/updateUser', handleUpdateUser) //to mongo need body {"_id": "","bicycleData" : "","activities": ""}

///////////////// Not used yet /////////////////////////////
  .get('/database/parts', handleGetParts) //from mongo
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
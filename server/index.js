'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fetch = require('isomorphic-fetch');

const PORT = 5150;

//handlers
const handleTest = require('./handlers/handleTest');
// const handleGetActivities = require('./handlers/handleGetActivities');
const handleGetParts = require('./handlers/handleGetParts');
const handleUpdateUserInfo = require('./handlers/handleUpdateUserInfo')

express()
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Endpoints
  .get('/test', handleTest)
  //this following handler is now a function called inside handleUpdateUserInfo
  // .get('/activities', handleGetActivities)
  .get('/database/parts', handleGetParts)
  .get('/updateUserData', handleUpdateUserInfo)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fetch = require('isomorphic-fetch');

const PORT = 5150;

//handlers
const handleTest = require('./handlers/handleTest');
const handleGetActivities = require('./handlers/handleGetActivities');

express()
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Endpoints
  .get('/test', handleTest)
  .get('/activities', handleGetActivities)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
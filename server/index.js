'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 5150;

//handlers
const handleTest = require('./handlers/test');

express()
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Endpoints
  .get('/test', handleTest)
  .get('/bacon', (req, res) => res.status(200).json('I love bacon!!! 🥓'))
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
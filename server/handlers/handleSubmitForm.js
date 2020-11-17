//This Function takes all the relevant user information and creates or updates the user
//in the database with mongoDB

'use strict';
//MongoDB stuff
require('dotenv').config({path: '.env'});
const { MongoClient } = require('mongodb');
const assert = require('assert');
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleSubmitForm = async (req,res) => {
  //Setting up the client and query
  const client = await MongoClient(MONGO_URI, options);
  const data = req.body;
  console.log(data);  
};

module.exports = handleSubmitForm;
//This function: 
//- connects to the Database named "MyApp" and then the collection called "complete-bikes"
//- it returns an array of objects corresponding to bicycle parts.


'use strict';
//MongoDB stuff
require('dotenv').config({path: '../.env'});
const { MongoClient } = require('mongodb');
const assert = require('assert');
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleGetCompleteBicycles = async (req, res) => {
  //Setting up the client
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    //Connecting to the database named "MyApp"
    const db = client.db('MyApp');
    //Getting our data from the collection named "parts" as an array of objects
    const bikes = await db.collection('complete-bikes').find().toArray();
    //status code 200 OK response
    res.status(200).json({status:200,bikes,});

  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

module.exports = handleGetCompleteBicycles;
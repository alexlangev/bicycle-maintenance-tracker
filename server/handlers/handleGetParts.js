//This function: 
//- connects to the Database named "MyApp" and then the collection called "parts"
//- it returns an array of objects corresponding to bicycle parts.
//- here is an example of part:
// {
// _id:"tr-gatorskin-25"
// diameter:"700c"
// width:"25mm"
// brand:"continental"
// msrp:"69.99"
// lifespan:"4000"
// }

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

const handleGetParts = async (req, res) => {
  console.log(MONGO_URI)
  //Setting up the client
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    //Connecting to the database named "MyApp"
    const db = client.db('MyApp');
    //Getting our data from the collection named "parts" as an array of objects
    const parts = await db.collection('parts').find().toArray();
    console.log('parts:', parts);
    
    const response = {};
    parts.forEach((part) => {
      response[part._id] = part;
    })
    //status code 200 OK response
    res.status(200).json({status:200, parts: response,});

  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

module.exports = handleGetParts;
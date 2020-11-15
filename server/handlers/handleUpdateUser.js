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

const handleUpdateUser = async (userInfo,BikeData,userActivities) => {
  //Setting up the client and query
  const client = await MongoClient(MONGO_URI, options);
  const _id = userInfo.athlete.id;
  //For the mongo upsert method
  const query = { '_id': _id };
  const update = {$set:{
    _id: _id,
    BikeData: BikeData,
    userActivities: userActivities,
  }
  };

  try {
    await client.connect();
    const db = client.db('MyApp');
    await db.collection('athletes').updateOne(query, update, {upsert: true} );
    
    //Figure this out later
    // assert.equal(1 , athlete.upsertedCount) ;
    return 'succes';
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

module.exports = handleUpdateUser;
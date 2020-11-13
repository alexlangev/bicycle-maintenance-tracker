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

const handleUpdateUser = async (req, res) => {
  //Setting up the client and query
  const client = await MongoClient(MONGO_URI, options);
  const {_id, bicycleData, activities} = req.body;

  //For the mongo upsert method
  const query = { '_id': _id };
  const update = {$set:{
    _id: _id,
    bicycleData: bicycleData,
    activities: activities,
  }
  };

  try {
    await client.connect();
    const db = client.db('MyApp');
    let athlete = await db.collection('athletes').updateOne(query, update, {upsert: true} );
    
    //Figure this out later
    // assert.equal(1 , athlete.upsertedCount) ;
    res.status(204).json({ status: 204, success: true });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({status: 500, message: err.message});
  }
  client.close();
}

module.exports = handleUpdateUser;
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

const handleSelectBike = async (req, res) => {
  const _id = parseInt(req.params._id);
  const _gear_id = req.params._gear_id;
  const trackQuery = `tracking_${_gear_id}`

  //Setting up the client and query
  const client = await MongoClient(MONGO_URI, options);
  //For the mongo upsert method
  
  // const update = {$set:{
  //   _id: _id,
  //   BikeData: BikeData,
  //   userActivities: userActivities,
  // }
  // };

  try {
    const query = { '_id': _id };
    let tracked; //is the bike created and tracked or not yet?

    await client.connect();
    const db = client.db('MyApp');
    const athlete = await db.collection('athletes').findOne(query);

    //Figure out value of tracked
    if(athlete[trackQuery] === undefined){
      tracked = false;
    } else if (athlete[trackQuery] !== undefined){
      tracked = true;
    }
    console.log(tracked);
    //Figure this out later
    // assert.equal(1 , athlete.upsertedCount) ;
    // assert.equal(1, athlete.matchedCount);
    res.status(200).json({ tracked });
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

module.exports = handleSelectBike;
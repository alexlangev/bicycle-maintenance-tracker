//This Function takes the information the user has provided in the app and updates the user's information in Mongo
//in the database with mongoDB

'use strict';
//MongoDB stuff
require('dotenv').config({path: '.env'});
const { MongoClient } = require('mongodb');
const assert = require('assert');
const { countReset } = require('console');
const { networkInterfaces } = require('os');
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleSubmitForm = async (req,res) => {
  //Setting up the client and query
  const client = await MongoClient(MONGO_URI, options);
  const data = req.body;
  const _id = data.user_id;
  const bicycle_id = data.bicycle_id;
  const parts_data = data.data.parts;
  console.log(_id, bicycle_id, parts_data);

  const query = { '_id': _id };
  try {
    //Find the athlete in athletes collection.
    await client.connect();
    const db = client.db('MyApp');
    const athlete = await db.collection('athletes').findOne(query);

    //numActivities is the current number of activities us user have done with this bicycle.
    let numActivities = 0;
    athlete.userActivities.activities.map(activity => {
      if(activity.gear_id === bicycle_id){
        numActivities++;
      }
    });

    //new key for the object in DB
    const gearTrack = `tracking_${bicycle_id}`;

    //adding the number of rides each parts has done along with its other data
    let newValue = {};
    Object.keys(parts_data).map(part => {
      newValue[part] = parts_data[part];
      newValue[part].numRides=numActivities;
    })
    console.log('newValue', newValue);
    const newObject = {};
    newObject[gearTrack] = newValue;

    const newEntry = await db.collection('athletes').updateOne(query, {
      $set: 
        newObject,
      
    });
    res.status(200).json({ succes: true });
    //insert into athlete
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};

module.exports = handleSubmitForm;
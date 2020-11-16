require('dotenv').config({ path: '../.env' });

const handleGetBicycleNames = require('./handleGetBicycleNames');

//This function will return all the relavant user information,(his Strava id, 
//his one time accessToken, a list of his bicycles and a list of activities)
const handleGetUserData = async (accessToken, userActivities) => {
//This will give us an array of all the bicycle gear_ids of the athlete
let bicycleData = {};
for (const data of userActivities.activities){
  const bicycleId = data.gear_id;
  //This function takes the gear id and return the bicycle name given by the user on Strava
  const bikeData = await handleGetBicycleNames(accessToken, bicycleId);
  bicycleData[bicycleId]
  = {bikeData};
}

return bicycleData;
}

module.exports = handleGetUserData;
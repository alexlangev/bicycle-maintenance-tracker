require('dotenv').config({ path: '../.env' });

const handleGetActivities = require('./handleGetActivities');
const handleGetBicycleNames = require('./handleGetBicycleNames');

//This function will return all the relavant user information,(his Strava id, 
//his one time accessToken, a list of his bicycles and a list of activities)
const handleGetUserData = async (req,res) => {
const userInfo = await handleGetActivities();
const activities = await userInfo[0];
const accessToken = await userInfo[1];

//This will give us the id of the user named athleteId
const athleteId = await activities[0].athlete.id;
console.log(activities);
console.log("athleteId", athleteId);
console.log(accessToken);

//This will give us an array of all the bicycle gear_ids of the athlete
let bicycleData = {};
for (const data of activities){
  const bicycleId = data.gear_id;
  const bikeData = await handleGetBicycleNames(accessToken, bicycleId);
  bicycleData[bicycleId]
  = {bikeData};
}
console.log("bicycles: ", bicycleData);

let userData = {
  _id: athleteId,
  accessToken: accessToken,
  bicycleData: bicycleData,
  activities: activities,
}

res.status(200).json({status:200, user_data: userData});
}

module.exports = handleGetUserData;
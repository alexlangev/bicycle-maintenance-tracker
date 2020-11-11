require('dotenv').config({ path: '../.env' });

const handleGetActivities = require('./handleGetActivities');
const handleGetBicycleNames = require('./handleGetBicycleNames');

const handleUpdateUserInfo = async (req,res) => {
const userInfo = await handleGetActivities();
const activities = await userInfo[0];
const accessToken = await userInfo[1];

//This will give us the id of the user named athleteId
const athleteId = await activities[0].athlete.id;
console.log(activities);
console.log("athleteId", athleteId);
console.log(accessToken);

//This will give us an array of all the bicycle gear_ids of the athlete
let bicycleDataArray = {};

//   activities.forEach( data => {
//   const bicycleId = data.gear_id;
//   if(!bicycleIdArray.includes(bicycleId)){
//     bicycleIdArray.push(bicycleId);
//   }
// });

for (const data of activities){
  const bicycleId = data.gear_id;
  const bikeData = await handleGetBicycleNames(accessToken, bicycleId);
  bicycleDataArray[bicycleId]
  = {bikeData};
}
console.log("bicycles: ", bicycleDataArray);

res.status(200).json({status:200, user_info: userInfo});
}

module.exports = handleUpdateUserInfo;
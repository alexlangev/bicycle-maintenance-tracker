require('dotenv').config({ path: '../.env' });

const handleGetActivities = require('./handleGetActivities');

const handleUpdateUserInfo = async (req,res) => {
const userInfo = await handleGetActivities();
const activities = await userInfo[0];
const accessToken = await userInfo[1];

//This will give us the id of the user named athleteId
const athleteId = await activities[0].athlete.id;
console.log("athleteId", athleteId);
console.log(accessToken);

//This will give us an array of all the bicycle gear_ids of the athlete
let bicycleIdArray = [];
await activities.forEach( data => {
  const bicycleId = data.gear_id;
  if(!bicycleIdArray.includes(bicycleId)){
    bicycleIdArray.push(bicycleId);
  }
});
console.log("bicycles: ", bicycleIdArray);

res.status(200).json({status:200, user_info: userInfo});
}

module.exports = handleUpdateUserInfo;
require('dotenv').config({ path: '../.env' });

const handleGetActivities = require('./handleGetActivities');

const handleUpdateUserInfo = async (req,res) => {
const userInfo = await handleGetActivities();

//This will give us the id of the user named athleteId
const athleteId = await userInfo[0].athlete.id;
console.log("athleteId", athleteId);

//This will give us an array of all the bicycle gear_ids of the athlete
let bicycleIdArray = [];
await userInfo.forEach( data => {
  const bicycleId = data.gear_id;
  if(!bicycleIdArray.includes(bicycleId)){
    bicycleIdArray.push(bicycleId);
  }
});
console.log("bicycles: ", bicycleIdArray);


res.status(200).json({status:200, user_info: userInfo});

}

module.exports = handleUpdateUserInfo;
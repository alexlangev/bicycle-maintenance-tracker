require('dotenv').config({ path: '../.env' });

const handleGetActivities = require('./handleGetActivities');

const handleUpdateUserInfo = async (req,res) => {
  //Info on my Strava account?
const userInfo = await handleGetActivities();
console.log(userInfo);
res.status(200).json({status:200, user_info: userInfo});
}

module.exports = handleUpdateUserInfo;
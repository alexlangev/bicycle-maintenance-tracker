require('dotenv').config();

const handleGetActivities = require('./handleGetActivities');
const handleGetUserData = require('./handleGetUserData');
const handleUpdateUser = require('./handleUpdateUser');

const handleGetUser = async (req, res) => {
  //client Id and client secret of the developper and the authorization from the new user
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const authToken = req.params.authToken;
  //url to exchange the authorization token for user info.
  const callUserAuth = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${authToken}&grant_type=authorization_code`

  try{
    //
    const callAuthResponse = await fetch(callUserAuth, {
      method: 'POST'
    })
    const userInfo = await callAuthResponse.json();
    //We want only a bit of information about the user.
    const refresh_token = await userInfo.refresh_token;
    const access_token = await userInfo.access_token;
    //This method takes in the refresh token and returns the user's activities.
    const userActivities = await handleGetActivities(refresh_token);
    //This method takes in the user activites and info and returns additionnal data on the
    //user's bicycles
    const BikeData = await handleGetUserData(access_token, userActivities);
    
    //With all that information we can create/update user in DB

    const updateUserResponse = await handleUpdateUser(userInfo,BikeData,userActivities);
    
    res.status(200).json({
      userInfo,
      userActivities,
      BikeData,
      updateUserResponse,
    });

  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = handleGetUser;



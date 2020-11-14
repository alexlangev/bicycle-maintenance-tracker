require('dotenv').config();

const handleGetActivities = async (RefreshToken) => {
  //The developper's client ID and client Secret
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  console.log(CLIENT_ID, CLIENT_SECRET)
  
  //Endpoints
  const callRefreshUrl = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${RefreshToken}&grant_type=refresh_token`
  const callActivitiesUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=`

    try {
    //first fetch returns access credentials. We are interested only in the access token
      const accessCredentialsResponse = await fetch(callRefreshUrl, {
        method: 'POST'
      })
      const accessCredentials = await accessCredentialsResponse.json();
      const accessToken = await accessCredentials.access_token;

    //second fetch returns an array of activities the athlete have done.(This has most of the user's info we need)
      const activitiesList = await fetch(callActivitiesUrl + accessToken);
      const activities = await activitiesList.json();
      return {
        activities, 
        accessCredentials
      };
    } catch (err) {
      console.log(err.stack);
    }
}

module.exports = handleGetActivities;
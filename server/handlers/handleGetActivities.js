require('dotenv').config({ path: '../.env' });

const handleGetActivities = async (req, res) => {
  //Info on my Strava account?
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  //Tokens
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  //Endpoints
  const callRefreshUrl = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`
  const callActivitiesUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  //first fetch returns access credentials. We are interested only in the access token
    try {
      const accessCredentialsResponse = await fetch(callRefreshUrl, {
        method: 'POST'
      })
      const accessCredentials =
      await accessCredentialsResponse.json();
      const accessToken = await accessCredentials.access_token;
      const activitiesList  = await fetch(callActivitiesUrl + accessToken);
  
      const activities = await activitiesList.json();
      return activities;
    } catch (err) {
      console.log(err.stack);
    }
}

module.exports = handleGetActivities;
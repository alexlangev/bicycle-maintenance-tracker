require('dotenv').config({ path: '../.env' });

const handleGetActivities = (req, res) => {
  //Info on my Strava account?
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  //Tokens
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  //Endpoints
  const callRefreshUrl = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`
  const callActivitiesUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  //first fetch returns access credentials. We are interested only in the access token
  fetch(callRefreshUrl, {
    method: 'POST'
  })
  .then(res => res.json())
  .then(accessCredentials => accessCredentials.access_token)

  //This second fetch takes the access token and returns an array of activities (NESTED FETCHES WATCH OUT!)
  .then(accessToken => {      
    return fetch(callActivitiesUrl + accessToken) 
  }) 
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

module.exports = handleGetActivities;
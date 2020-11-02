require('dotenv').config();
const fetch = require("node-fetch");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const refresh_token = process.env.REFRESH_TOKEN;

const activitiesUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=`;
const authUrl = 'https://www.strava.com/oauth/token';

const reAuthorize = () => {
  fetch(authUrl,{
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      refresh_token: refresh_token,
      grant_type: 'refresh_token'
    })
  })
  .then((res) => {
    answer = res.json();
    return answer;
  })
  .then((answer) => {
    access_token = answer.access_token;
    console.log(access_token);
    return access_token;
  })
  .then((access_token) => {
    getActivities(access_token);
  })
}

const getActivities = (access_token) => {
  console.log(activitiesUrl+access_token);
  fetch(activitiesUrl+access_token, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json()
    })
    .then(res => {
      let activities = res;
      console.log(activities);
      return activities;
    })
}

reAuthorize();

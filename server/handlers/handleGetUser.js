require('dotenv').config();

const handleGetUser = async (req, res) => {
  //client Id and client secret of the developper and the authorization from the new user
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const authToken = req.params.authToken;
  console.log(authToken); 
  //url to exchange the authorization token for user info.
  const callUserAuth = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${authToken}&grant_type=authorization_code`
  
  try{
    const callResponse = await fetch(callUserAuth, {
      method: 'POST'
    })
    const userInfo = await callResponse.json();
    
    //We want only a bit of information about the user.
    const relevantInfo = {
      refresh_token: userInfo.refresh_token,
      access_token: userInfo.access_token,
      _id: userInfo.athlete.id,
      firstname: userInfo.athlete.firstname,
    }
    res.status(200).send(relevantInfo);

  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = handleGetUser;


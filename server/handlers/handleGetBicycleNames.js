const fetch = require('isomorphic-fetch');

const handleGetBicycleNames = async (accessToken, gearId) => {

  const callGearName = `https://www.strava.com/api/v3/gear/${gearId}`;

    try {
    //This fetch returns an object corresponding with the gear's (bicycle) collected data.
      const callGearResponse = await fetch(callGearName, {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        },
      });
      const gearResponse = await callGearResponse.json();
    //We take this data an create an object with id, name and total distance values
      const gearData = await {
        _id: gearResponse.id,
        name: gearResponse.name,
        totalDistance: gearResponse.distance,
      }
      return gearData;
    } catch (err) {
      console.log(err.stack);
    }
}

handleGetBicycleNames();

module.exports = handleGetBicycleNames;
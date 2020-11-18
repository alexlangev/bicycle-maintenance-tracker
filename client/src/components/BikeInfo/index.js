import React from 'react';
import styled from 'styled-components';
import BikeImage from './BikeImage';
import PartInfo from './PartInfo';
import BikeList from './BikeList';

import { ViewToggleContext } from '../../Context/ViewToggleContext';
import { PartsDbContext } from  '../../Context/PartsDbContext';

const BikeInfo = (props) => {
  const {viewToggle} = React.useContext(ViewToggleContext);
  const { partsDb } = React.useContext(PartsDbContext)

  const currentUser = props.currentUser;
  const selectedBicycle = props.selectedBicycle;

  //want to calculate the KMs on each parts, compare it to it's theoretical lifespan and give back that info on the app.
  const bikeId = selectedBicycle.name[0];
  const query = `tracking_${bikeId}`
  const bikePartsData = Object.values(currentUser.athlete[query]);

  //we iterate through each part and measure what we want
  let rides = [];
  currentUser.userActivities.activities.map(ride => {
    if(ride.gear_id === bikeId){
      rides.push(ride);
    }
  });
  let wearArray = [];

  bikePartsData.map((part)=> {
  const firstRideIndex = rides.length - part.numRides;
  let partm = 0;
  
  for(let i=0; i<= firstRideIndex; i++){
    partm = partm + rides[i].distance;
  }
  let obj = {part:part,partm:partm}
  wearArray.push(obj);
  })


  //variables and a function for getting the % or wear of each part. This should be done 
  //in the back end for cleaner code...
  let chainWear;
  let cassetteWear;
  let chainringWear;
  let rearTireWear;
  let frontTireWear;

  const calculatePartPercentage = () => {
    partsDb.chains.forEach(chain => {
      if(chain[0] === wearArray[0].part._id){
        const lifespan = chain[1].lifespan;
        const chainKm = wearArray[1].partm/1000;
        chainWear = (chainKm/lifespan)*100;
      }
    });

    partsDb.cassettes.forEach(cassette => {
      if(cassette[0] === wearArray[1].part._id){
        const lifespan = cassette[1].lifespan;
        const cassetteKm = wearArray[1].partm/1000;
        cassetteWear = (cassetteKm/lifespan)*100;
      }
    });

    partsDb.chainrings.forEach(chainring => {
      if(chainring[0] === wearArray[2].part._id){
        const lifespan = chainring[1].lifespan;
        const chainringKm = wearArray[2].partm/1000;
        chainringWear = (chainringKm/lifespan)*100;
      }
    });

    partsDb.tires.forEach(rearTire => {
      if(rearTire[0] === wearArray[3].part._id){
        const lifespan = rearTire[1].lifespan;
        const rearTireKm = wearArray[3].partm/1000;
        rearTireWear = (rearTireKm/lifespan)*100;
      }
    });

    partsDb.tires.forEach(frontTire => {
      if(frontTire[0] === wearArray[4].part._id){
        const lifespan = frontTire[1].lifespan;
        const frontTireKm = wearArray[4].partm/1000;
        frontTireWear = (frontTireKm/lifespan)*100;
      }
    });
  }
  calculatePartPercentage();

  if(selectedBicycle.name === 'none'){
    return(
    <BikeInfoWrapper>
      <p>please Select your bike in the menu</p>
    </BikeInfoWrapper>
    )
  } else {
    return (
      <BikeInfoWrapper>
        {viewToggle === 'image'?<BikeImage 
          wearArray={wearArray}
          chainWear={chainWear}
          cassetteWear={cassetteWear}
          chainringWear={chainringWear}
          rearTireWear={rearTireWear}
          frontTireWear={rearTireWear} 
        />:<BikeList 
        wearArray={wearArray}
        chainWear={chainWear}
        cassetteWear={cassetteWear}
        chainringWear={chainringWear}
        rearTireWear={rearTireWear}
        frontTireWear={rearTireWear}  
        />}
        <PartInfo wearArr
          wearArray={wearArray}
          chainWear={chainWear}
          cassetteWear={cassetteWear}
          chainringWear={chainringWear}
          rearTireWear={rearTireWear}
          frontTireWear={rearTireWear} 
        />
      </BikeInfoWrapper>
    )
  }
}

const BikeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100%;
`

export default BikeInfo;
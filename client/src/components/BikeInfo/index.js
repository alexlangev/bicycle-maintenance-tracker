import React from 'react';
import styled from 'styled-components';
import BikeImage from './BikeImage';
import PartInfo from './PartInfo';
import BikeList from './BikeList';

import { ViewToggleContext } from '../../Context/ViewToggleContext';



const BikeInfo = (props) => {
  const {viewToggle} = React.useContext(ViewToggleContext);
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

  if(selectedBicycle.name === 'none'){
    return(
    <BikeInfoWrapper>
      <p>please Select your bike in the menu</p>
    </BikeInfoWrapper>
    )
  } else {
    return (
      <BikeInfoWrapper>
        {viewToggle === 'image'?<BikeImage wearArray={wearArray} />:<BikeList wearArray={wearArray} />}
        <PartInfo wearArray={wearArray} />
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
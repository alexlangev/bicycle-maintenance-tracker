import React from 'react';
import styled from 'styled-components';
import BikeImage from './BikeImage';
import PartInfo from './PartInfo';
import BikeList from './BikeList';

import { ViewToggleContext } from '../../Context/ViewToggleContext';
import { SelectedBicycleContext } from '../../Context/SelectedBicycleContext';

const BikeInfo = (props) => {
  const {selectedBicycle, setSelectedBicycle} = React.useContext(SelectedBicycleContext);
  const {viewToggle} = React.useContext(ViewToggleContext);


  if(selectedBicycle.name === 'none'){
    return(
    <BikeInfoWrapper>
      <p>please Select your bike in the menu</p>
    </BikeInfoWrapper>
    )
  } else {
    return (
      <BikeInfoWrapper>
        {viewToggle === 'image'?<BikeImage />:<BikeList />}
        <PartInfo />
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
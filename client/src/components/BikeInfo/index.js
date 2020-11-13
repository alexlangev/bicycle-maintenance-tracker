import React from 'react';
import styled from 'styled-components';
import BikeImage from './BikeImage';
import PartInfo from './PartInfo';
import BikeList from './BikeList';

import { ViewToggleContext } from '../../Context/ViewToggleContext';


const BikeInfo = (props) => {

  const {viewToggle} = React.useContext(ViewToggleContext);

  return (
    <BikeInfoWrapper>
      {viewToggle === 'image'?<BikeImage />:<BikeList />}
      <PartInfo />
    </BikeInfoWrapper>
  )
}

const BikeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: red 3px solid;
  width: 100%;
  height: 100%;
`

export default BikeInfo;
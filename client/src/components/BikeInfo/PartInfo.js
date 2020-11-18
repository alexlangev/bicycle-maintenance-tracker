import React from 'react';
import styled from 'styled-components';

//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';
import UnstyledButton from '../UnstyledButton';

const PartInfo = (props) => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);
  const wearArray=props.wearArray;

  console.log(wearArray);

  if(selectedPart !== 'none') {
    return (
      <PartInfoWrapper>
        <PartName>{selectedPart}</PartName>
      </PartInfoWrapper>
    )
  } else {
    return (
      <PartInfoWrapper style={{border:"none"}} />
    )
  }
}

const PartInfoWrapper = styled.div`
  margin: 0 5vh 0 0;
  width: 25%;
  min-width: 225pt;
  height: 80vh;
  border-radius: 5pt;
  background-color: #dbdbdb;
  box-shadow: 2px 2px 8px #000000;
`

const PartName = styled.div`
  font-size: 18pt;
  font-weight: 600;
  margin: 2pt 4pt;
`

export default PartInfo;
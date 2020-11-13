import React from 'react';
import styled from 'styled-components';

//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';

const PartInfo = () => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);


  if(selectedPart !== 'none') {
    return (
      <PartInfoWrapper>
        <h2>{selectedPart}</h2>
      </PartInfoWrapper>
    )
  } else {
    return (
      <PartInfoWrapper>
        <h2>selectedPart</h2>
      </PartInfoWrapper>
    )
  }
}

const PartInfoWrapper = styled.div`
  margin: 5vh 5vh 0 0;
  border: 3px solid white;
  width: 25%;
  min-width: 225pt;
  height: 60vh;
`

export default PartInfo;
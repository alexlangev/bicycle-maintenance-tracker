import React from 'react';
import styled from 'styled-components';

const PartInfo = () => {
  return (
    <PartInfoWrapper>
      <h2>part info</h2>
    </PartInfoWrapper>
  )
}

const PartInfoWrapper = styled.div`
  margin: 5vh 5vh 0 0;
  border: 3px solid white;
  width: 25%;
  min-width: 225pt;
  height: 60vh;
`

export default PartInfo;
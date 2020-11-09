import React from 'react';
import styled from 'styled-components';

const BikeImage = () => {
  return (
    <BikeImageWrapper>
      <CompleteBike src='images/complete.png'/>
      <Chain src='/images/chain.png' />
    </BikeImageWrapper>
  )
}

const BikeImageWrapper = styled.div`  
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 75%;
  height: 100%;
`

const CompleteBike = styled.img`
  width:100%;
`

const Chain = styled.img`
  z-index: 1;
  width: 100%;
  transform: translate(0,-90%);
`

export default BikeImage;
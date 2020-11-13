import React from 'react';
import styled from 'styled-components';
//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';

//Color codes for the color legend
const greenPart = '#3f992b';
const yellowPart = '#b3a836';
const redPart = '#ab2b1a';

const BikeImage = () => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);
  return (
    <BikeImageWrapper>
      <CompleteBike src='images/complete.png'/>
      {/* Parts are display:none unless they are selected with context */}
      <Chain 
        src='/images/chain.png'
        onClick={() => setSelectedPart('chain')}
        role="button"
        tabIndex="0"
      />
      <Chainrings 
        src='/images/chainrings.png'
        onClick={() => setSelectedPart('chainrings')}
        role="button"
        tabIndex="0"
      />
    <FrontTire 
      src='/images/tire.png'
      onClick={() => setSelectedPart('frontTire')}
      role="button"
      tabIndex="0"
    />
    <RearTire 
      src='/images/tire.png'
      onClick={() => setSelectedPart('rearTire')}
      role="button"
      tabIndex="0"
    />
    <Casette 
      src='/images/cassette.png'
      onClick={() => setSelectedPart('cassette')}
      role="button"
      tabIndex="0"
    />
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
  filter: grayscale(100%);
`

const CompleteBike = styled.img`
  width:100%;
`

const Chain = styled.img`
  z-index: 2;
  width: 34%;
  transform: translate(50%,-172%);

`

const Chainrings = styled.img`
  z-index: 2;
  width: 12.5%;
  transform: translate(305%,-286%);

`

const FrontTire = styled.img`
  z-index: 1;
  width: 41%;
  transform: translate(144.5%,-161.5%);

`

const RearTire = styled.img`
  z-index: 1;
  width: 41%;
  transform: translate(0%,-261.5%);
`

const Casette = styled.img`
  z-index: 3;
  width: 6.5%;
  transform: translate(255%,-1983%);
`

export default BikeImage;
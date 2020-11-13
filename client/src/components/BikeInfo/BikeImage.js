import React from 'react';
import styled from 'styled-components';
//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';
import UnstyledButton from '../UnstyledButton';

//Color codes for the color legend
const greenPart = '#3f992b';
const yellowPart = '#b3a836';
const redPart = '#ab2b1a';

const BikeImage = () => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);
  return (
    <BikeImageWrapper>
      <CompleteBikeWrapper>
        <CompleteBike src='images/complete.png'/>
          {/* Parts are display:none unless they are selected with context */}
        <PartsWrapper>
          <ChainButton onClick={() => {setSelectedPart('chain');console.log('chain')}}>
            <Chain src='/images/chain.png'/>
          </ChainButton>
          
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

        <RearTireButton onClick={() => {setSelectedPart('rearTire'); console.log('rearTire')}}>
          <RearTire 
            src='/images/tire.png'
          />
        </RearTireButton>

          <Casette 
            src='/images/cassette.png'
            onClick={() => setSelectedPart('cassette')}
            role="button"
            tabIndex="0"
          />
        </PartsWrapper>
      </CompleteBikeWrapper>

    </BikeImageWrapper>
  )
}

const BikeImageWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: auto;
  filter: grayscale(100%);
  border: 1px solid green;
`

const CompleteBikeWrapper = styled.div`
  min-width: 500pt;
  width: 100%;
  height: auto;
`

const PartsWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: visible;
`

const CompleteBike = styled.img`
  width:100%;
`

const Chain = styled.img`
  height: 100%;
  width: 100%;
`

const ChainButton = styled(UnstyledButton)`
  z-index: 3;
  width: 36%;
  transform: translate(45%,-330.5%);
  opacity: 100%;
  /* border: 1px solid green; */
  padding: 1%;
`

const Chainrings = styled.img`
  z-index: 2;
  width: 12.5%;
  transform: translate(32%,-416%);
  opacity: 0%;
  /* border: 1px solid green; */

`

const FrontTire = styled.img`
  z-index: 1;
  width: 41%;
  transform: translate(31%,-100.5%);
  opacity: 0%;
`
/////////////////////////////////////////////////////
const RearTire = styled.img`
  height: 100%;
  width: 100%;
`

const RearTireButton = styled(UnstyledButton)`
  z-index: 1;
  width: 41%;
  transform: translate(0%,-200.5%);
  opacity: 0%;
`


const Casette = styled.img`
  z-index: 4;
  width: 6.5%;
  transform: translate(-371%,-1509%);
  opacity: 0%;
`

export default BikeImage;
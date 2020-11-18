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

          <RearTireButton onClick={() => {setSelectedPart('rearTire'); console.log('rearTire')}}>
            <RearTire src='/images/tire.png'/>
          </RearTireButton>


          <FrontTireButton onClick={() => setSelectedPart('frontTire')}>
            <FrontTire src='/images/tire.png'/>
          </FrontTireButton>


          <ChainButton onClick={() => {setSelectedPart('chain');console.log('chain')}}>
            <Chain src='/images/chain.png'/>
          </ChainButton>

          <ChainringsButton onClick={() => setSelectedPart('chainrings')}>
            <Chainrings src='/images/chainrings.png'/>
          </ChainringsButton>


          <CasetteButton onClick={() => setSelectedPart('cassette')}>
            <Casette src='/images/cassette.png'/>
          </CasetteButton>

        </PartsWrapper>
      </CompleteBikeWrapper>
    </BikeImageWrapper>
  )
}

const BikeImageWrapper = styled.div`
  padding:2%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: auto;
  filter: brightness(0%);
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

const RearTire = styled.img`
  height: 100%;
  width: 100%;
`

const RearTireButton = styled(UnstyledButton)`
  z-index: 1;
  width: 41%;
  transform: translate(0%,-100.5%);
  opacity: 100%;
`

const FrontTire = styled.img`
  height: 100%;
  width: 100%;
`

const FrontTireButton = styled(UnstyledButton)`
  z-index: 1;
  width: 41%;
  transform: translate(44%,-100%);
  opacity: 100%;
`

const Chain = styled.img`
  height: 100%;
  width: 100%;
`

const ChainButton = styled(UnstyledButton)`
  z-index: 3;
  width: 36%;
  transform: translate(45%,-425.5%);
  opacity: 100%;
  padding: 1%;
`

const Chainrings = styled.img`
  width: 100%;
  height: 100%;
`

const ChainringsButton = styled(UnstyledButton)`
  z-index: 2;
  width: 12.5%;
  transform: translate(18%,-523%);
  opacity: 100%;
`

const CasetteButton = styled(UnstyledButton)`
  z-index: 4;
  width: 6.5%;
  transform: translate(-490%,-1058%);
  opacity: 100%;
`

const Casette = styled.img`
  width: 100%;
  height: 100%;
`

export default BikeImage;
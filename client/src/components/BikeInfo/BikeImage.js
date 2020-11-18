import React from 'react';
import styled from 'styled-components';
//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';
import UnstyledButton from '../UnstyledButton';

//Color codes for the color legend
const greenPart = '#3f992b';
const yellowPart = '#b3a836';
const redPart = '#ab2b1a';

const BikeImage = ({wearArray, chainWear, cassetteWear, chainringWear, rearTireWear, frontTireWear}) => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);

  //Nested ternaries are hard to read. Figure out another way to execute the conditionnal rendering!
  return (
    <BikeImageWrapper>
      <CompleteBikeWrapper>
        <CompleteBike style={{filter: "brightness(0%)"}} src='images/complete.png'/>
          {/* Parts are display:none unless they are selected with context */}
        <PartsWrapper>
        
          <RearTireButton onClick={() => {setSelectedPart('rearTire')}}>
            {rearTireWear < 50? <RearTire src='/images/tire_green.png'/> 
                                :(rearTireWear < 90)
                                  ? <RearTire src='/images/tire_yellow.png'/> 
                                  :<RearTire src='/images/tire_red.png'/> }
          </RearTireButton>


          <FrontTireButton onClick={() => setSelectedPart('frontTire')}>
            {frontTireWear < 50? <FrontTire src='/images/tire_green.png'/> 
                                  :(frontTireWear < 90)
                                    ? <FrontTire src='/images/tire_yellow.png'/> 
                                    :<FrontTire src='/images/tire_red.png'/> }
          </FrontTireButton>


          <ChainButton onClick={() => {setSelectedPart('chain')}}>
          {chainWear < 50? <Chain src='/images/chain_green.png'/> 
                                  :(chainWear < 90)
                                    ? <Chain src='/images/chain_yellow.png'/> 
                                    :<Chain src='/images/chain_red.png'/> }
          </ChainButton>

          <ChainringsButton onClick={() => setSelectedPart('chainrings')}>
          {chainringWear < 50? <Chainrings src='/images/chainrings_green.png'/> 
                                  :(chainringWear < 90)
                                    ? <Chainrings src='/images/chainrings_yellow.png'/> 
                                    :<Chainrings src='/images/chainrings_red.png'/> }
          </ChainringsButton>


          <CasetteButton onClick={() => setSelectedPart('cassette')}>
          {cassetteWear < 50? <Casette src='/images/cassette_green.png'/> 
                                  :(cassetteWear < 90)
                                    ? <Casette src='/images/cassette_yellow.png'/> 
                                    :<Casette src='/images/cassette_red.png'/> }          </CasetteButton>

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
  transform: translate(-0.5%,-100%);
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
  transform: translate(18%,-520%);
  opacity: 100%;
`

const CasetteButton = styled(UnstyledButton)`
  z-index: 4;
  width: 6.5%;
  transform: translate(-489%,-1050%);
  opacity: 100%;
`

const Casette = styled.img`
  width: 100%;
  height: 100%;
`

export default BikeImage;
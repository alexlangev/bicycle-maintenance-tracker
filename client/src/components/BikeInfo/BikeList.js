import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '../UnstyledButton';
//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';

const BikeList = (props) => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);
  const wearArray = props.wearArray;
  return (
    <BikeListWrapper>
      <Header>Parts:</Header>
      <PartList>
        <PartWrapper>
          <Part onClick={() => setSelectedPart('frontTire')}>Front Tire</Part>
        </PartWrapper>

        <PartWrapper>
          <Part onClick={() => setSelectedPart('rearTire')}>Rear Tire</Part>
        </PartWrapper>    

        <PartWrapper>
        <Part onClick={() => setSelectedPart('chain')}>Chain</Part>
        </PartWrapper>      
        
        <PartWrapper>
          <Part onClick={() => setSelectedPart('cassette')}>Cassette</Part>
        </PartWrapper>  

        <PartWrapper>
          <Part onClick={() => setSelectedPart('chainrings')}>Chainrings</Part>
        </PartWrapper>      
      </PartList>
    </BikeListWrapper>
  )
}

const BikeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  padding: 5vh;
`

const Header = styled.h2`
  padding-bottom: 16pt;
  font-size: 24pt;
  color:#17242c;
  text-shadow: 1px 1px 0px #000000;
`

const PartList = styled.ul`
`

const PartWrapper = styled.li`
  margin-bottom: 8pt;
  border-bottom: 1px black dotted;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Part = styled(UnstyledButton)`
  color: black;
  font-size: 18pt;
  &:hover {
    font-weight:bolder;
  }
`

export default BikeList;
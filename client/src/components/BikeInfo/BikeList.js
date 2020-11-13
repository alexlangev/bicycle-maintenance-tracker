import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '../UnstyledButton';
//Context for the selection of parts
import { SelectedPartContext } from '../../Context/SelectedPartContext';

const BikeList = () => {
  const {selectedPart, setSelectedPart} = React.useContext(SelectedPartContext);
  return (
    <BikeListWrapper>
      <Header>Bicycle Parts:</Header>
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
`

const PartList = styled.ul`
`

const PartWrapper = styled.li`
  border-bottom: 1px grey dotted;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Part = styled(UnstyledButton)`
  color: white;
  font-size: x-large;
`

export default BikeList;
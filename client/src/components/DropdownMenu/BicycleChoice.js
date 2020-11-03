import React from 'react';
import styled from 'styled-components';

const BicycleChoice = () => {
  return(
    <BicycleChoiceWrapper>
      <h3>Bicycle 1</h3>
    </BicycleChoiceWrapper>
  )
}

const BicycleChoiceWrapper = styled.div`
  border: 3px solid black;
  height: 100pt;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default BicycleChoice;
import React from 'react';
import styled from 'styled-components';

const SelectedBicycle = (props) => {
  return (
    <SelecteBicycleWrapper>
      {props.children}
    </SelecteBicycleWrapper>
  )
}

const SelecteBicycleWrapper = styled.div`
  border: 3px solid black;
  height: 100pt;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default SelectedBicycle;
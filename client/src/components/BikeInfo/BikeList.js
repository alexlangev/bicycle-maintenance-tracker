import React from 'react';
import styled from 'styled-components';

const BikeList = () => {
  return (
    <BikeListWrapper>
      <ul>
        <li>part1</li>
        <li>part2</li>
        <li>part3</li>
        <li>part4</li>
      </ul>
    </BikeListWrapper>
  )
}

const BikeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 5pt;
`

export default BikeList;
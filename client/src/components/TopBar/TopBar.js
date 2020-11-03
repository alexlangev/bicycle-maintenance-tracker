import React from 'react';
import styled from 'styled-components';

const TopBar = () => {
  return (
    <TopBarWrapper>
      <p>LOGO</p>
      <p>Sign Out</p>
    </ TopBarWrapper>
  )
}

const TopBarWrapper = styled.div`
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5vh;
`

export default TopBar;
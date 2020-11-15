import React from 'react';
import styled from 'styled-components';

const TopBar = (props) => {
  const currentUser = props.currentUser;
  const userFirstName = currentUser.userInfo.athlete.firstname;

  return (
    <TopBarWrapper>
      <p>LOGO</p>
      <p>{`Welcome ${userFirstName}!`}</p>
      <p>Sign Out</p>
    </ TopBarWrapper>
  )
}

const TopBarWrapper = styled.div`
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
`

export default TopBar;
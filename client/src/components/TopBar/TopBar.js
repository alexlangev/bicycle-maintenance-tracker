import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '../UnstyledButton'
import { CurrentUserContext } from '../../Context/CurrentUserContext';
import { IsLoggedInContext } from '../../Context/IsLoggedInContext';

const TopBar = () => {
  const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext);
  const {isLoggedIn, setIsLoggedIn } = React.useContext(IsLoggedInContext);

  const handleLogOut = () => {
    setCurrentUser('none');
    setIsLoggedIn(false);
  }

  return (
    <TopBarWrapper>
      <p>LOGO</p>
      {currentUser!=='none'?<p>{`Welcome ${currentUser.userInfo.athlete.firstname}`}</p>:<p></p>}
      <SignOutButton onClick={handleLogOut}>Log Out</SignOutButton>
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

const SignOutButton = styled(UnstyledButton)`
  border: 1px white solid;
  padding: 3pt 15pt;
  margin-right:10pt;
`

export default TopBar;
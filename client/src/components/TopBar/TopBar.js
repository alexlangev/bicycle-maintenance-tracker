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
      <Logo src='/images/gears.png'/>
      {currentUser!=='none'?<Welcome>{`Welcome ${currentUser.userInfo.athlete.firstname}!`}</Welcome>:<p></p>}
      <SignOutButton onClick={handleLogOut}>Log Out</SignOutButton>
    </ TopBarWrapper>
  )
}

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5vh;
  background-color: #17242c;
`

const Logo = styled.img`
  height: 35px;
  width: 35px;
  margin-left:10pt;
`

const Welcome = styled.p`
  color: #FFFFFF;
  opacity: 87%;
`

const SignOutButton = styled(UnstyledButton)`
  font-weight: bold;
  background-color: orangered;
  color: #17242c;
  padding: 3pt 15pt;
  margin-right:10pt;
  border-radius: 8px;
`

export default TopBar;


import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '../UnstyledButton';

const LogInPage = () => {
  const CLIENT_ID = '55495'; //This is not a secret
  const authPageUrl = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all`;

  return (
    <PageWrapper>
      <Title>Bicycle Maintenance Tracker</Title>
      <SectionsWrapper>
        <UserSection>
          <h2>for athletes</h2>
          
          
          <LogInButton>
            <a href= {authPageUrl}>
              Log In
            </a>
          </LogInButton>
        </UserSection>

        <MechanicSection>
          <h2>for mechanics</h2>
          <LogInButton>Log In</LogInButton>
        </MechanicSection>
      </SectionsWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  border: 1px black solid;
  margin: auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
`

const SectionsWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  height: 70vh;
  width: 60%;
`

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  border-right: solid 5px black;
`

const MechanicSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%
`

const LogInButton = styled(UnstyledButton)`
  border: 2px solid black;
`

export default LogInPage;
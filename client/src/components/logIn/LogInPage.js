import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '../UnstyledButton';

const LogInPage = () => {
  const CLIENT_ID = '55495'; //This is not a secret
  const authPageUrl = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all`;
  const registerUrl = 'https://www.strava.com/';

  return (
    <PageWrapper>
      <LogInBox>

        <Title>{'Bicycle Maintenance App'}</Title>

      <div>
        <Box>
          <Welcome>Please create a Strava account</Welcome>
          <LogIn>
            <LogInAnchor href= {registerUrl}>Register</LogInAnchor>
          </LogIn>
        </Box>

        <Box>
          <Welcome>Already have an account?</Welcome>
          <LogIn >
            <LogInAnchor href= {authPageUrl}>Log In</LogInAnchor>
          </LogIn>
        </Box>
      </div>

      </LogInBox>    
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  margin: 0;
  width:100%;
  height: 100vh;
  background-image: url('images/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 30pt;
  color:#cccaca;
  text-shadow: 2px 2px 8px #000000;
`

const LogIn = styled.div`
  margin-top: 5pt;
  font-size:20pt;
  background-color: #cc5031;
  color: inherit;
  border: 2px solid black;
  border-radius:12pt;
  padding:2pt 4pt;
`

const LogInAnchor = styled.a`
  padding: 5pt;
  text-decoration: none;
  color: black;
  text-shadow: 1px 1px 2px #000000;

  &:visited{
    color: black;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 35pt;

  color:#cccaca;
  text-shadow: 1px 1px 2px #000000;
`

const LogInBox = styled.div`
  width: 35%;
  min-width: 650px;
  min-height: 400px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10vh;
  border-radius: 10px;
  background-color: hsla(60,4%,18%, 0.85);
  box-shadow: 8px 4px #32322e;
`

const Welcome = styled.p`
  font-size:16pt;
  font-weight: 500;
`
export default LogInPage;
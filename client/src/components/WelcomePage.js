import React from 'react';
import styled from 'styled-components';

const WelcomePage = () => {

  return (
    <WelcomePageWrapper>
      <Title>Steps to get you started!</Title>
      <Instructions>
        <Steps>1. Go on your Strava account at <Anchor href='https://www.strava.com'>https://www.strava.com/</Anchor></Steps>
        <Steps>2. Go into <strong>Settings</strong> > <strong>My Gear</strong>  </Steps>
        <Steps>3. Click on <strong>Add Bike</strong> and give it a name. Repeat the process for every bicycle you want to keep track on this app.</Steps>
        <Steps>4. In this app, click on <strong>Select Bicycle</strong> and follow the steps.</Steps>
        <Steps>5. Go ride your bicycle! Add every ride to Strava with the corresponding bicycle.</Steps>
        <Steps>6. Come back here regularly to keep track of the wear on your bicycle.</Steps>
      </Instructions>
    </WelcomePageWrapper>
  )
}

const WelcomePageWrapper = styled.div`
  margin: auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Anchor = styled.a`
  &:link{
    font-weight:bold;
    color: black;
  }
  &:visited{
    color: black;
    font-weight:bold;
  }
`

const Title = styled.h2`
  padding-top:3pt;
  margin:8pt;
  font-size:16pt;
`

const Instructions = styled.ul`
margin: 8pt;
font-size:14pt;
`

const Steps = styled.li`
  padding-bottom:3pt;
`

export default WelcomePage;
import React from 'react';
import styled from 'styled-components';

const WelcomePage = () => {

  return (
    <WelcomePageWrapper>
      <Title>Steps to get you started!</Title>
      <Instructions>
        <Steps>1. Go on your Strava account at <a>https://www.strava.com/</a></Steps>
        <Steps>2. Go into Settings > My Gear  </Steps>
        <Steps>3. Click on Add Bike and give it a name. Repeat the process for every bicycle you want to track.</Steps>
        <Steps>4. In this app, click on select bicycle and follow the steps</Steps>
        <Steps>5. Go ride your bicycle! Add every ride to Strava with the corresponding bicycle</Steps>
        <Steps>6. Come back here and see the </Steps>
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

const Title = styled.h2`

`

const Instructions = styled.ul`
`

const Steps = styled.li`
`

export default WelcomePage;
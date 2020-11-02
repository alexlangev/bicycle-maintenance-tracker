import React from 'react'
import styled from 'styled-components'

import UnstyledButton from '../UnstyledButton'

const LogInForm = () => {
  return (
    <PageWrapper>
      <Title>Bicycle Maintenance Tracker</Title>
      <SectionsWrapper>
        <UserSection>
          <h2>for users</h2>
          <LogInButton>Log In</LogInButton>
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

export default LogInForm;
import React from 'react'
import styled from 'styled-components'

import UnstyledButton from '../UnstyledButton'

const LogInForm = () => {
  return (
    <Form>
      <Title>Bicycle Maintenance Tracker</Title>
      <LogInButton>Log In</LogInButton>
    </Form>
  )
}

const Form = styled.form`
  border: 1px black solid;
  margin: auto;
`

const Title = styled.h1`
`

const LogInButton = styled(UnstyledButton)`
`

export default LogInForm;
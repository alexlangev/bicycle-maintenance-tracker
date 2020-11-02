import React from 'react';
import styled from 'styled-components';

import LogInForm from './components/logIn/LogInForm';

function App() {
  return (
    <PageWrapper>
      <LogInForm />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export default App;

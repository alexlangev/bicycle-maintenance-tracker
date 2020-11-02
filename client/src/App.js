import React from 'react';
import styled from 'styled-components';

import LogInForm from './components/logIn/LogInForm';
import Sidebar from './components/Sidebar/SideBar';

function App() {
  return (
    <PageWrapper>
      {/* <LogInForm /> */}
      <Sidebar />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export default App;

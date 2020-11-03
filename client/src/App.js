import React from 'react';
import styled from 'styled-components';

// import LogInForm from './components/logIn/LogInForm';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/SideBar';

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <TopBar />
      <ContentWrapper>
        <Sidebar />
      </ContentWrapper>
      {/* <LogInForm /> */}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentWrapper = styled.div`
  background-color: blue;
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export default App;

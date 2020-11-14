import React from 'react';
import styled from 'styled-components';

// import LogInForm from './components/logIn/LogInForm';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/SideBar';
import BikeInfo from './components/BikeInfo/index';
import LogInPage from './components/logIn/LogInPage';

import { ViewToggleProvider } from './Context/ViewToggleContext';
import { SelectedPartProvider } from './Context/SelectedPartContext';

function App() {
  //State relating to loading
  const [loadingStatus, setLoadingStatus] = React.useState('idle');
  //State relating to having client info or not
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  //useEffect fetch user info? LogIn something happens...

  if (isLoggedIn === false && loadingStatus === 'loading'){
    return (
      <PageWrapper>
        Loading...
      </PageWrapper>
    )
  } else if (isLoggedIn === true && loadingStatus === 'idle'){
    return (
      <PageWrapper>
        <GlobalStyle />
        <TopBar />

          <SelectedPartProvider>
          <ViewToggleProvider>
            <ContentWrapper>
              <Sidebar />
              <BikeInfo />
            </ContentWrapper>
          </ViewToggleProvider>
          </SelectedPartProvider>
      </PageWrapper>
    )
  } else {
    return (
      <LogInPage />
    )
  }
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
  align-items: center;
`

export default App;

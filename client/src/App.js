import React from 'react';
import styled from 'styled-components';

// import LogInForm from './components/logIn/LogInForm';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/SideBar';
import BikeInfo from './components/BikeInfo/index';

import { ViewToggleProvider } from './Context/ViewToggleContext';
import { FaUserAstronaut } from 'react-icons/fa';

function App() {
  //State relating to loading
  const [loadingStatus, setLoadingStatus] = React.useState('idle');
  //State relating to having client info or not
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  //useEffect fetch user info? LogIn something happens...
  React.useEffect(() => {
    
    const fetchUserData = async () => {
      const fetchUserData = await fetch('/getUserData');
      const userData = await fetchUserData.json();
      await console.log(userData);
      return userData;
    }
    
    fetchUserData();

  });

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
          <ViewToggleProvider>
            <ContentWrapper>
              <Sidebar />
              <BikeInfo />
            </ContentWrapper>
          </ViewToggleProvider>

        {/* <LogInForm /> */}
      </PageWrapper>
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
`

export default App;

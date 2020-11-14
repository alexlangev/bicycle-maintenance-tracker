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
import { CurrentUserProvider } from './Context/CurrentUserContext';

function App() {
    //State relating to loading
    const [loadingStatus, setLoadingStatus] = React.useState('idle');
    //State relating to having client info or not
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser]= React.useState('none');

    //MAKE IT SO WHEN URL CHANGE???
    React.useEffect(()=>{
    //Getting the authorizationToken from window url
      const windowUrl = window.location.href;
      if(windowUrl.includes('exchange_token?state=&code=')){
        const authTokenString = windowUrl.split('=')[2];
        const authToken = authTokenString.split('&')[0];
        setLoadingStatus('loading');

    //With the auth token, this function creates or updates the userdata in the database and
    //returns the data and updates the states
    const getUserInfo = async () => {
      const userInforesponse = await fetch(`/getUser/${authToken}`)
      
      //should get a response from DB with all the info about user.
      const userInfo = await userInforesponse.json();
      //set the current user as his userInfo?
      console.log(currentUser);
    }
    getUserInfo();
  }
    },[])



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

          <CurrentUserProvider>
          <SelectedPartProvider>
          <ViewToggleProvider>
            <ContentWrapper>
              <Sidebar />
              <BikeInfo />
            </ContentWrapper>
          </ViewToggleProvider>
          </SelectedPartProvider>
          </CurrentUserProvider>
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

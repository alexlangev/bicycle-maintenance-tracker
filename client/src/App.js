import React from 'react';
import styled from 'styled-components';

// import LogInForm from './components/logIn/LogInForm';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/SideBar';
import BikeInfo from './components/BikeInfo/index';
import LogInPage from './components/logIn/LogInPage';
//Context imports
import { IsLoggedInContext } from './Context/IsLoggedInContext';
import { CurrentUserContext } from './Context/CurrentUserContext';

function App() {
    //State relating to loading
    const [loadingStatus, setLoadingStatus] = React.useState('idle');

    //Subscribing to the contexts
    const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext)
    const {isLoggedIn, setIsLoggedIn} = React.useContext(IsLoggedInContext);


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
      const userInfo = await userInforesponse.json();
      //set the current user as his userInfo?
      if (userInfo.updateUserResponse === 'succes'){
        setIsLoggedIn(true);
        setCurrentUser(userInfo);
        setLoadingStatus('idle');
      }
    }
    getUserInfo();
  }
    },[])

console.log("from app: ", loadingStatus, isLoggedIn, currentUser)

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
        <TopBar/>

        <ContentWrapper>    
          <Sidebar />
          <BikeInfo />
        </ContentWrapper>

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

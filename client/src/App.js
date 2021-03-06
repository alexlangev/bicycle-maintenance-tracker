import React from 'react';
import styled, {keyframes } from 'styled-components';

// import LogInForm from './components/logIn/LogInForm';
import GlobalStyle from './GlobalStyle';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/SideBar';
import BikeInfo from './components/BikeInfo/index';
import LogInPage from './components/logIn/LogInPage';
import WelcomePage from './components/WelcomePage';
import CreateBicycleForm from './components/createBicycleForm/CreateBicycleForm';
//Context imports
import { IsLoggedInContext } from './Context/IsLoggedInContext';
import { CurrentUserContext } from './Context/CurrentUserContext';
import { SelectedBicycleContext} from './Context/SelectedBicycleContext';
import { IsTrackedContext } from './Context/IsTrackedContext';
import { PartsDbContext } from './Context/PartsDbContext'
import { CompleteBicyclesDbContext } from './Context/CompleteBicyclesDbContext';

function App() {
    //State relating to loading
    const [loadingStatus, setLoadingStatus] = React.useState('idle');

    //Subscribing to the contexts
    const {currentUser, setCurrentUser} = React.useContext(CurrentUserContext)
    const {isLoggedIn, setIsLoggedIn} = React.useContext(IsLoggedInContext);
    const {selectedBicycle, setSelectedBicycle} = React.useContext(SelectedBicycleContext);
    const {isTracked, setIsTracked} = React.useContext(IsTrackedContext);
    const {partsDb, setPartsDb} = React.useContext(PartsDbContext);
    const {completeBicyclesDb, setCompleteBicyclesDb} = React.useContext(CompleteBicyclesDbContext);

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

    
    //This function fetches the parts database, filters it per part type and sets it as context
    const getPartsDb = async () => {
      let chains = [];
      let chainrings = [];
      let tires = [];
      let cassettes = [];

      const partsDBResponse = await fetch('/database/parts')
      const partsDB = await partsDBResponse.json();
      const parts = partsDB.parts;
  
      Object.entries(parts).map(part => {
        const name = part[1]._id;
        if(name.includes('cn')){
          chains.push(part);
        } else if(name.includes('cs')){
          cassettes.push(part);
        } else if(name.includes('cr')){
          chainrings.push(part);
        } else if(name.includes('tr')){
          tires.push(part);
        }
      })
      setPartsDb({
        chains,
        chainrings,
        tires,
        cassettes,
      })
    }
    getPartsDb();

    //This function fetches the complete bicycles database and sets it as context
    const getBicyclesDb = async () => {
      const bicyclesDbResponse = await fetch('/database/completeBicycles')
      const bicyclesDB = await bicyclesDbResponse.json();
  
      setCompleteBicyclesDb(bicyclesDB.bikes);
    }
    getBicyclesDb();
    },[])

  if (loadingStatus === 'loading'){
    return (
        <PageWrapper>
          <LoaderWrapper>
          <p style={{position: "relative", top:"25pt"}}>Loading...</p>
          <Loader src='/images/loader.png'/>
          </LoaderWrapper>
        </PageWrapper>
    )
  } else if(isLoggedIn === true 
    && loadingStatus === 'idle' 
    && selectedBicycle.name === 'none'
    && isTracked === false){
    return (
      <PageWrapper>
        <GlobalStyle />
        <TopBar/>

        <ContentWrapper>    
          <Sidebar />
          <WelcomePage />
        </ContentWrapper>

      </PageWrapper>
    )
  } else if (isLoggedIn === true 
    && loadingStatus === 'idle' 
    && selectedBicycle.name !== 'none' 
    && isTracked === false){
    return (
      <PageWrapper>
        <GlobalStyle />
        <TopBar/>

        <ContentWrapper>    
          <Sidebar />
          <CreateBicycleForm />
        </ContentWrapper>

      </PageWrapper>
    )
  } else if (isLoggedIn === true 
    && loadingStatus === 'idle' 
    && selectedBicycle.name !== 'none' 
    && selectedBicycle.parts !=='none' 
    && isTracked === true){
    return (
      <PageWrapper>
        <GlobalStyle />
        <TopBar/>

        <ContentWrapper>    
          <Sidebar />
          <BikeInfo
            currentUser={currentUser}
            selectedBicycle={selectedBicycle}
          />
        </ContentWrapper>

      </PageWrapper>
    )
  } else {
    return (
      <>
      <GlobalStyle />
      <LogInPage />
      </>
    )
  }
}

const animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = styled.img`
  /* border: 25px solid #f3f3f3;  */
  /* border-top: 25px solid orangered;  */
  /* border-radius: 50%; */
  width: 200px;
  height: 200px;
  animation: ${animation} 2.5s linear infinite;
  position: absolute;
`

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentWrapper = styled.div`
  background-color: #6b99b5;
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export default App;

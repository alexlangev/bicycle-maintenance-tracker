//AppContext is there to Wrap the app with the context providers at the highest level possible.
import React from 'react';
import App from './App';

import { ViewToggleProvider } from './Context/ViewToggleContext';
import { SelectedPartProvider } from './Context/SelectedPartContext';
import { CurrentUserProvider } from './Context/CurrentUserContext';
import { IsLoggedInProvider } from './Context/IsLoggedInContext';
import { SelectedBicycleProvider } from './Context/SelectedBicycleContext';
import { IsTrackedProvider } from './Context/IsTrackedContext';
import { PartsDbProvider } from './Context/PartsDbContext';
import { CompleteBicyclesDbProvider } from './Context/CompleteBicyclesDbContext';

  const AppContext = () => {
    return(
      <CurrentUserProvider>
      <IsLoggedInProvider>
      <SelectedBicycleProvider>
      <IsTrackedProvider>
      <PartsDbProvider>
      <CompleteBicyclesDbProvider>
      <SelectedPartProvider>
      <ViewToggleProvider>
        
        <App />

      </ViewToggleProvider>
      </SelectedPartProvider>
      </CompleteBicyclesDbProvider>
      </PartsDbProvider>
      </IsTrackedProvider>
      </SelectedBicycleProvider>
      </IsLoggedInProvider>
      </CurrentUserProvider>
    )
  }

  export default AppContext;
  


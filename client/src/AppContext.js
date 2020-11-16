//AppContext is there to Wrap the app with the context providers at the highest level possible.
import React from 'react';
import App from './App';

import { ViewToggleProvider } from './Context/ViewToggleContext';
import { SelectedPartProvider } from './Context/SelectedPartContext';
import { CurrentUserProvider } from './Context/CurrentUserContext';
import { IsLoggedInProvider } from './Context/IsLoggedInContext';
import { SelectedBicycleProvider } from './Context/SelectedBicycleContext';

  const AppContext = () => {
    return(
      <CurrentUserProvider>
      <IsLoggedInProvider>
      <SelectedBicycleProvider>
      <SelectedPartProvider>
      <ViewToggleProvider>
        
        <App />

      </ViewToggleProvider>
      </SelectedPartProvider>
      </SelectedBicycleProvider>
      </IsLoggedInProvider>
      </CurrentUserProvider>
    )
  }

  export default AppContext;
  


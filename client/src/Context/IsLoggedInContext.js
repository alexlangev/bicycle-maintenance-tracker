import React from 'react';

export const IsLoggedInContext = React.createContext(null);

export const IsLoggedInProvider = ({ children }) => {

  //use localStorage??
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return(
    <IsLoggedInContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
    }}>
      {children}
    </IsLoggedInContext.Provider>
  )
};

import React from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {

  //use localStorage??
  const [currentUser, setCurrentUser] = React.useState('none');

  return(
    <CurrentUserContext.Provider value={{
      currentUser,
      setCurrentUser,
    }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
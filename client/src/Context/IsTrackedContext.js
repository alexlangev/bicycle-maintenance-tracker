import React from 'react';

export const IsTrackedContext = React.createContext(null);

export const IsTrackedProvider = ({ children }) => {

  //use localStorage??
  const [isTracked, setIsTracked] = React.useState(false);

  return(
    <IsTrackedContext.Provider value={{
      isTracked,
      setIsTracked,
    }}>
      {children}
    </IsTrackedContext.Provider>
  )
};

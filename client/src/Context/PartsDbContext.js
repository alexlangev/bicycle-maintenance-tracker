import React from 'react';

export const PartsDbContext = React.createContext(null);

export const PartsDbProvider = ({ children }) => {

  //use localStorage??
  const [partsDb, setPartsDb] = React.useState('none')

  return(
    <PartsDbContext.Provider value={{
      partsDb,
      setPartsDb,
    }}>
      {children}
    </PartsDbContext.Provider>
  )
}
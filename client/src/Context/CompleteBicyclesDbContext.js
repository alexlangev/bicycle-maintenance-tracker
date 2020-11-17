import React from 'react';

export const CompleteBicyclesDbContext = React.createContext(null);

export const CompleteBicyclesDbProvider = ({ children }) => {

  //use localStorage??
  const [completeBicyclesDb, setCompleteBicyclesDb] = React.useState('none')

  return(
    <CompleteBicyclesDbContext.Provider value={{
      completeBicyclesDb,
      setCompleteBicyclesDb,
    }}>
      {children}
    </CompleteBicyclesDbContext.Provider>
  )
}
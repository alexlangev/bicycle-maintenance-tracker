import React from 'react';

export const SelectedBicycleContext = React.createContext(null);

export const SelectedBicycleProvider = ({ children }) => {

  //use localStorage??
  const [selectedBicycle, setSelectedBicycle] = React.useState({
    name: 'none',
    parts: 'none',
  })

  return(
    <SelectedBicycleContext.Provider value={{
      selectedBicycle,
      setSelectedBicycle,
    }}>
      {children}
    </SelectedBicycleContext.Provider>
  )
}      
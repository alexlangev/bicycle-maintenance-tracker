import React from 'react';

export const SelectedPartContext = React.createContext(null);

export const SelectedPartProvider = ({ children }) => {

  //use localStorage??
  const [selectedPart, setSelectedPart] = React.useState('none')

  return(
    <SelectedPartContext.Provider value={{
      selectedPart,
      setSelectedPart,
    }}>
      {children}
    </SelectedPartContext.Provider>
  )
}
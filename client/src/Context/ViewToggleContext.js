import React from 'react';

export const ViewToggleContext = React.createContext(null);

export const ViewToggleProvider = ({ children }) => {

  //use localStorage??
  const [viewToggle, setViewToggle] = React.useState('image')

  return(
    <ViewToggleContext.Provider value={{
      viewToggle,
      setViewToggle,
    }}>
      {children}
    </ViewToggleContext.Provider>
  )
};

import React, { createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value="This is the context value">
      {children}
    </MyContext.Provider>
  );
}

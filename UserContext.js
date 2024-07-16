import React, { createContext, useReducer } from 'react';

const initialState = { user: {} };
const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

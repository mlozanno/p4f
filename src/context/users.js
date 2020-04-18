import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { reducer, initialState } from '../reducers/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={contextValue}>
      <Router>{children}</Router>
    </UserContext.Provider>
  );
};

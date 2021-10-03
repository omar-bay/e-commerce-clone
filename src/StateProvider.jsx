// setup a data layer
// for basket

import React, { createContext, useContext, useReducer } from "react";

// an empty data layer
export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to use inside component
export const useStateValue = () => useContext(StateContext);



/* 

// in UserContext.js
import React, { createContext, useContext, useReducer } from "react"
export const UserContext = createContext({});

// in App.js
<UserContext.Provider value={ {value, setValue, name} }>
    <Component />       // this component now can use the value
</UserContext.Provider>

// in Component.js
const {value, setValue} = useContext(UserContext);

*/
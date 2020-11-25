import React, { createContext, useContext, useReducer } from 'react';
//preparing the data layer
export const StateContext = createContext();

//we wrap our app inside this stateprovider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//To pull something from data layer we use useStateValue
export const useStateValue = () => useContext(StateContext);
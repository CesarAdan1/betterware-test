import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const CartContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CartContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(CartContext);
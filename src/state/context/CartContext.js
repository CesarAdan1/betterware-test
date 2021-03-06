import React, { createContext, useContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {

  return (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CartContext.Provider>
  )
};

export const useStateValue = () => useContext(CartContext);
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { storageKey } from "./cartReducer";

export const CartContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {


  const localState = JSON.parse(localStorage.getItem(storageKey));

  return (
    <CartContext.Provider value={useReducer(reducer, localState || initialState)}>
      {children}
    </CartContext.Provider>
  )
};

export const useStateValue = () => useContext(CartContext);
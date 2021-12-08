import React from "react";
import ListData from "../src/data"
export const initialState = {
  basket: [],
  user: null,
  counter: 10,
  dataPagination:ListData,
  selectedProducts:[]

  
};
console.log("reducer", initialState.basket, initialState.user);
//selector
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("reducer file", action);
      const abc = {
        ...state,
        basket: [...state.basket, action.item]
      };
      console.log("reducer abc", abc);
      return abc;

    //find first index and return you which on matched with id
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(`cant rmove (id:${action.id}) from basket`);
      }
      return {
        ...state,
        basket: newbasket
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
      case "PRODUCTS":
        console.log("action in products reducer",action)
        return {
          ...state,
         selectedProducts :[...action.selectedProducts]
        };
      
    default:
      return state;
  }
};
export default reducer;

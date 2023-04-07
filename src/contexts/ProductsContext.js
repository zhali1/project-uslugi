import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const productContext = createContext();
const API = "https://6429c89a00dfa3b5473a2b58.mockapi.io/prod";

export const useProductContext = () => {
  return useContext(productContext);
};

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

function ProductsContext(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData() {
    try {
      const res = await axios.get(API);
      const action = {
        type: "GET_PRODUCTS",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    products: state.products,
    getData,
  };

  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
}

export default ProductsContext;

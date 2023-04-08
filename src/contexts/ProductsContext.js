import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const productContext = createContext();
const API = "https://6429c89a00dfa3b5473a2b58.mockapi.io/prod";
const LIKED_API = "https://6429c89a00dfa3b5473a2b58.mockapi.io/liked";

export const useProductContext = () => {
  return useContext(productContext);
};

const initialState = {
  products: [],
  likedProducts: [],
  cartLength: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_LIKED":
      return { ...state, likedProducts: action.payload };
    case "CART_LENGTH":
      return { ...state, cartLength: action.payload };
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
  async function getLikedData() {
    try {
      const res = await axios.get(LIKED_API);
      const action = {
        type: "GET_LIKED",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }
  async function getCartLength() {
    try {
      const res = await axios.get(LIKED_API);
      const action = {
        type: "CART_LENGTH",
        payload: res.data.length,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }
  async function addToLiked(likedProduct) {
    try {
      await axios.post(LIKED_API, likedProduct);
      getLikedData();
      getCartLength();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    products: state.products,
    likedProducts: state.likedProducts,
    cartLength: state.cartLength,
    getData,
    getLikedData,
    addToLiked,
    deleteProduct,
    getCartLength,
  };

  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
}

export default ProductsContext;

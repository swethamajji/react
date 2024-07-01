// PRODUCT_FETCHING_REQUEST
// PRODUCT_FETCHING_SUCCESS
// PRODUCT_FETCHING_FAILURE

import axios from "axios";

export const productAsyncActions = () => {
  return async (dispatch) => {
    dispatch({
      type: "PRODUCT_FETCHING_REQUEST",
    });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        dispatch({
          type: "PRODUCT_FETCHING_SUCCESS",
          payload: response.data,
        });
      }
    } catch (err) {
      dispatch({
        type: "PRODUCT_FETCHING_FAILURE",
      });
    }
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
export const removeProductFromCart = (productID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productID,
  };
};
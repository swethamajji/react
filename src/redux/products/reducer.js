

const initialState = {
  products: [],
  loading: true,
  error: null,
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_FETCHING_REQUEST":
      return { ...state, loading: true };
    case "PRODUCT_FETCHING_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "PRODUCT_FETCHING_FAILURE":
      return {
        ...state,
        error: "Bad request something went wrong",
        loading: false,
      };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
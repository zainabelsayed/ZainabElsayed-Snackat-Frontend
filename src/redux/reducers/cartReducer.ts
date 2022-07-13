import { ADD_TOCART } from "../actions/AddToCart";
import { REMOVE_CART } from "../actions/RemoveCart";
import { INCREASE_PRODUCT } from "../actions/IncreaseProduct";
import { DECREASE_PRODUCT } from "../actions/DecreaseProduct";

const redux = require("redux");
const createStore = redux.createStore;

const intialState: any = {
  cart: [],
};

const addToCartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TOCART:
      return { ...state.cart, cart: [...state.cart, action.payload] };
    case REMOVE_CART:
      return {
        ...state.cart,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case INCREASE_PRODUCT:
      return {
        ...state.cart,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            item.count++;
          }
          return item;
        }),
      };
    case DECREASE_PRODUCT:
      return {
        ...state.cart,
        cart: state.cart.map((item) => {
          if (item.id === action.payload && item.count > 1) {
            item.count--;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const store = createStore(addToCartReducer);

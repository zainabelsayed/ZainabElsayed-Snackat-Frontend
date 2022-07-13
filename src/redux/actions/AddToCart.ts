import { ProductInterface } from "../../interfaces/product";

export const ADD_TOCART = 'ADDTOCART'

export const addToCartAction = (payload:ProductInterface) => {
    return {
      type: ADD_TOCART,
      payload,
    };
  };
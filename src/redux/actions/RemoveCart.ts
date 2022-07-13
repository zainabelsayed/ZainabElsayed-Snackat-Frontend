export const REMOVE_CART = 'REMOVE_CART'

export const removeCartAction = (payload:Number) => {
    return {
      type: REMOVE_CART,
      payload,
    };
  };
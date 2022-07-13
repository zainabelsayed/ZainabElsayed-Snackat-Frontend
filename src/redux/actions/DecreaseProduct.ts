export const DECREASE_PRODUCT = 'DECREASE_PRODUCT'

export const decreaseCartAction = (payload:Number) => {
    return {
      type: DECREASE_PRODUCT,
      payload,
    };
  };
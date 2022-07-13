export const INCREASE_PRODUCT = 'INCREASE_PRODUCT'

export const increaseCartAction = (payload:Number) => {
    return {
      type: INCREASE_PRODUCT,
      payload,
    };
  };
// action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// action creators
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}

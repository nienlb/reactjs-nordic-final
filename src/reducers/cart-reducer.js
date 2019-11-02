import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart-actions';

const initialState = 0;

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return state + 1;
    }
    case REMOVE_FROM_CART: {
      let cartItemCount = state - 1;
      if (cartItemCount < 0) cartItemCount = 0;
      return cartItemCount;
    }
    default:
      return state;
  }
}

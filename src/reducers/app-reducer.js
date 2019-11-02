import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  RECEIVE_PRODUCTS,
} from '../actions/products-actions'


const initialState = {
  isLoading: true,
}

export default function appReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      }
    case RECEIVE_PRODUCTS:
      {
        return {
          ...state,
          isLoading: false,
        }
      }
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

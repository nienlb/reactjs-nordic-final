import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  RECEIVE_PRODUCTS,
} from '../actions/products-actions'


const initialState = {
  isFetching: false,
  page: 0,
  pageSize: 0,
  total: 0,
  items: [],
}

export default function productsReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PRODUCTS:
      {
        const { status, data } = action.data;
        return {
          ...state,
          isFetching: false,
          items: data,
          pageSize: status.pageSize,
          page: status.page,
          total: status.total
        }
      }
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

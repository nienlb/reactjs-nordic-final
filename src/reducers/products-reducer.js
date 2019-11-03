import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  RECEIVE_PRODUCTS,
  FETCH_PRODUCTS_DETAIL,
  FETCH_PRODUCTS_DETAIL_FAILED,
  RECEIVE_PRODUCTS_DETAIL,
  // SORT_PRODUCTS_AZ,
  // SORT_PRODUCTS_ZA
} from '../actions/products-actions'


const initialListState = {
  isFetching: false,
  page: 0,
  pageSize: 0,
  total: 0,
  items: [],
}
const initialDetailState = {
  isFetching: false,
  detail: [],
}


export function productsReducer(state = initialListState, action) {

  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PRODUCTS:
      {
        const { meta_data, data, product_total } = action.data;
        return {
          ...state,
          isFetching: false,
          items: data,
          pageSize: data.length,
          page: meta_data.current_page,
          total: product_total
        }
      }
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    // case SORT_PRODUCTS_AZ:
    //   return {
    //     ...state,
    //     items: action.product_new
    //   }
    // case SORT_PRODUCTS_ZA:
    //   return {
    //     ...state,
    //     items: action.product_new
    //   }
    default:
      return state
  }
}

export function productsDetailReducer(state = initialDetailState, action) {

  switch (action.type) {
    case FETCH_PRODUCTS_DETAIL:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PRODUCTS_DETAIL:
      {
        return {
          ...state,
          isFetching: false,
          detail: action.data
        }
      }
    case FETCH_PRODUCTS_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

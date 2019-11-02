export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const FETCH_PRODUCTS_DETAIL = 'FETCH_PRODUCTS_DETAIL';
export const RECEIVE_PRODUCTS_DETAIL = 'RECEIVE_PRODUCTS_DETAIL';
export const FETCH_PRODUCTS_DETAIL_FAILED = 'FETCH_PRODUCTS_DETAIL_FAILED';

export function fetchProducts() {
  return (dispatch, getState) => {
    console.log('fetchProducts middleware')

    dispatch({
      type: FETCH_PRODUCTS,

    })

    // fetch('http://localhost:3000/data.json')
    fetch('https://mapi.sendo.vn/mob/product/cat/quan-jeans-nam/?p=1&q=jean')
      .then(res => res.json())
      .then((json) => {
        console.log(json.status)
        setTimeout(() => {
          dispatch({
            type: RECEIVE_PRODUCTS,
            data: json,
          })
        }, 2000)
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_FAILED,
          error: error,
        })
      })
  }
}

export function fetchProductsDetail(productId) {
  return (dispatch, getState) => {
    console.log('fetchProducts middleware')
    console.log(productId)
    dispatch({
      type: FETCH_PRODUCTS_DETAIL,
    })

    // fetch('http://localhost:3000/data.json')
    fetch(`https://mapi.sendo.vn/mob/product/${productId}/detail/`)
      .then(res => res.json())
      .then((json) => {
        // console.log(json.description)
        setTimeout(() => {
          dispatch({
            type: RECEIVE_PRODUCTS_DETAIL,
            data: json,
          })
        }, 2000)
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_DETAIL_FAILED,
          error: error,
        })
      })
  }
}



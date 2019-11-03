import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import {productsReducer , productsDetailReducer} from './products-reducer';
import appReducer from './app-reducer'
const rootReducer = combineReducers({
  cartItem: cartReducer,
  products: productsReducer,
  productsDetail: productsDetailReducer,
  // sortProduct: sortProductReducer,
  app: appReducer,
});

export default rootReducer;

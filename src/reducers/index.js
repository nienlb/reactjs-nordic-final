import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import {productsReducer , productsDetailReducer , productsSortReducer} from './products-reducer';
import appReducer from './app-reducer'
const rootReducer = combineReducers({
  cartItem: cartReducer,
  products: productsReducer,
  productsDetail: productsDetailReducer,
  sortProduct: productsSortReducer,
  app: appReducer,
});

export default rootReducer;

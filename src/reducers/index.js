import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import productsReducer from './products-reducer';
import appReducer from './app-reducer'
const rootReducer = combineReducers({
  cartItemCount: cartReducer,
  products: productsReducer,
  app: appReducer,
});

export default rootReducer;

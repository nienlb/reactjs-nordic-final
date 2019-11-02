// import { createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import shopApp from '../reducers';

// const store = createStore(
//   shopApp,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;
const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

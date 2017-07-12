/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import home from './modules/home';
//import main from './modules/main';
//import newPost from './modules/newPost';
//import common from './common';


function configureStore(initialState: any = undefined) {
  const logger = createLogger();
  const enhancer = compose(
    // applyMiddleware(thunk, logger)
    applyMiddleware(thunk),
  );
  const rootReducer = combineReducers({
    [home.NAME]: home.reducers,
    //[main.NAME]: main.reducers,
    //[common.NAME]: common.reducers,
    //[newPost.NAME]: newPost.reducers,
  });
  let store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      // const nextRootReducer = rootReducer.default;
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

const Store = configureStore();

export { Store };
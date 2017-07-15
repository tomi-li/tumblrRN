/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './redux/reducer';


function configureStore(initialState: any = undefined) {
  const logger = createLogger();
  const enhancer = compose(applyMiddleware(thunk), applyMiddleware(logger));
  const rootReducer = reducer;
  let store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
}

const Store = configureStore();

export { Store };
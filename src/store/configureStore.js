/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */


import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'

export default function configureStore(initialState: any = undefined) {
    const logger = createLogger();
    const enhancer = compose(
        // applyMiddleware(thunk, promise, logger)
        applyMiddleware(thunk, promise)
    );
    return createStore(rootReducer, initialState, enhancer);
}